import React from "react";
import RecipeList from "./RecipeList";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const MyMenu = () => {
  // const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  const recipes = useSelector((state) => state.recipes);
  if (menu.status === "loading" || recipes.status === "loading") {
    return <Loader />;
  }

  // useEffect(() => {
  //   dispatch(fetchAllMenu());
  //   dispatch(fetchRecipes());
  // }, [dispatch]);

  if (menu.data.length < 1) {
    return <h2>MyMenu empty</h2>;
  }
  // const menuIds = menu.data.map((m) => m.recipeId);
  // const my = recipes.filter((r) => menuIds.includes(r._id));
  // const myRich = my.map((m) => {
  //   return { _id: m._id, recipe: recipes.find((r) => m.recipeId === r._id) };
  // });

  const my = menu.data.map((m) => {
    return { ...recipes.data.find((r) => m.recipeId === r._id), menuId: m._id };
  });

  return (
    <div className="mymenu">
      <h1 className="mymenu__title">Your favorite meals</h1>
      <RecipeList recipes={my} edit />
    </div>
  );
};

export default MyMenu;
