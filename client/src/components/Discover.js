import React, { useEffect, useState } from "react";
import Search from "./Search";
import RecipeList from "./RecipeList";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
import axios from "axios";
import { baseurl } from "../utils/helpers";
import Paginator from "./Paginator";
const Discover = () => {
  // const recipes = useSelector((state) => state.recipes);
  const { tag, page } = useParams();

  const [recipes, setRecipes] = useState({ status: "loading", data: [] });
  const [tags, setTags] = useState();
  const [pageInfo, setPageInfo] = useState();

  useEffect(() => {
    const fetch = async () => {
      const API_URL = baseurl + "recipes/tags/";
      const response = await axios.get(
        API_URL + (tag ? tag : "all") + "/" + (page ? page : 1)
      );
      // console.log({ response });
      setRecipes({ status: "idle", data: response.data.recipes });
      setTags(response.data.tags);
      setPageInfo(response.data.pageinfo);
    };
    fetch();
  }, [tag, page]);

  return (
    <div className="discover">
      <div className="discover__top">
        <h1 className="discover__top__title">Browse recipes</h1>
        <div className="discover__top__search">
          <Search setRecipes={setRecipes} />
        </div>
      </div>
      {recipes.status === "loading" || tags.status === "loading" ? (
        <Loader />
      ) : (
        <>
          <div className="discover__tags">
            {tags.slice(0, 5).map((t) => (
              <Link to={`/meals/${t._id}`} key={t._id}>
                <div className="discover__tags__tag">{`${t._id}`}</div>
              </Link>
            ))}
          </div>
          <RecipeList recipes={recipes.data} />
          <Paginator
            baseUrl={`/meals/${tag || "all"}/`}
            current={parseInt(pageInfo.current)}
            last={parseInt(pageInfo.last)}
          />
        </>
      )}
    </div>
  );
};

export default Discover;
