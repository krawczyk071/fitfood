import React from "react";
import { toast } from "react-toastify";
import { addToMenu, delFromMenu } from "../redux/features/menuSlice";
import { useDispatch, useSelector } from "react-redux";

const AddToMenuBtn = ({ recipeId }) => {
  const dispatch = useDispatch();
  const { data: menu } = useSelector((state) => state.menu);

  async function onAdd(e) {
    await dispatch(addToMenu(recipeId));
    toast.success("Added");
  }
  async function onDel(e) {
    const menuId = menu.find((m) => m.recipeId === recipeId)._id;
    try {
      dispatch(delFromMenu(menuId));
      toast.success("Meal deleted");
    } catch (err) {
      toast.error(err.message);
    }
  }

  const isAdded = menu?.some((m) => m.recipeId === recipeId);
  return (
    <>
      {!isAdded ? (
        <button className="btn" onClick={onAdd}>
          Save to MyMenu
        </button>
      ) : (
        <button className="btn" onClick={onDel}>
          Remove
        </button>
      )}
    </>
  );
};

export default AddToMenuBtn;
