import React, { useEffect } from "react";
import { menu, recipes } from "../utils/data";
import RecipeList from "./RecipeList";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMenu } from "../redux/features/menuSlice";
import { fetchRecipes } from "../redux/features/recipesSlice";

const MyMenu = () => {
  const dispatch = useDispatch();
  const { data: menu } = useSelector((state) => state.menu);
  const { data: recipes } = useSelector((state) => state.recipes);
  useEffect(() => {
    dispatch(fetchAllMenu());
    dispatch(fetchRecipes());
  }, [dispatch]);

  if (menu.length < 1) {
    return <h2>MyMenu empty</h2>;
  }
  // const menuIds = menu.map((m) => m.recipeId);
  // const my = recipes.filter((r) => menuIds.includes(r._id));
  // const myRich = my.map((m) => {
  //   return { _id: m._id, recipe: recipes.find((r) => m.recipeId === r._id) };
  // });
  const my = menu.map((m) => {
    return { ...recipes.find((r) => m.recipeId === r._id), menuId: m._id };
  });
  // console.log(myRich);
  return (
    <div className="mymenu">
      <h1 className="mymenu__title">Your favorite meals</h1>
      <RecipeList recipes={my} edit />
    </div>
  );
};

export default MyMenu;
