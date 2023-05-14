import React from "react";
import Hero from "../components/Hero";
import AddRecipe from "../components/AddRecipe";
import Login from "../components/Login";
import Signup from "../components/Signup";
import MyMenu from "../components/MyMenu";
import Recipe from "../components/Recipe";
import Tracker from "../components/Tracker";
import Discover from "../components/Discover";
import Test from "../components/Test";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Login />
      <Signup />
      <Discover />
      <AddRecipe />
      <Recipe />
      <MyMenu />
      <Tracker />

      <Test />
    </>
  );
};

export default Homepage;
