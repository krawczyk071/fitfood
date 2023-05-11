import React from "react";
import Hero from "../components/Hero";
import AddRecipe from "../components/AddRecipe";
import Login from "../components/Login";
import Signup from "../components/Signup";
import MyMenu from "../components/MyMenu";
import Recipe from "../components/Recipe";
import Search from "../components/Search";
import Tracker from "../components/Tracker";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Login />
      <Signup />
      <Search />
      <AddRecipe />
      <Recipe />
      <MyMenu />
      <Tracker />
    </>
  );
};

export default Homepage;
