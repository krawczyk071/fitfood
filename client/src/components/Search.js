import axios from "axios";
import React, { useState } from "react";
import { baseurl } from "../utils/helpers";

const Search = ({ setRecipes }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit() {
    const fetch = async () => {
      const API_URL = baseurl + "recipes/search";
      const response = await axios.get(API_URL + `?q=${searchTerm}`);
      // console.log({ response });
      setRecipes({ status: "idle", data: response.data });
    };
    fetch();
  }
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }
  return (
    <div className="search">
      <input
        type="text"
        className="ipt ipt-forbtn "
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <button
        type="submit"
        className="ipt-btn ipt-btn--transparent"
        onClick={handleSubmit}
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default Search;
