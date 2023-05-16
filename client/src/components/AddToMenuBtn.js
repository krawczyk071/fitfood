import React from "react";
import { toast } from "react-toastify";
import { addToMenu } from "../redux/features/menuSlice";
import { useDispatch } from "react-redux";

const AddToMenuBtn = ({ recipeId }) => {
  const dispatch = useDispatch();

  async function onSubmit(e) {
    await dispatch(addToMenu(recipeId));
    toast.success("Added");
  }
  return (
    <>
      <button className="btn" onClick={onSubmit}>
        Save to MyMenu
      </button>
    </>
  );
};

export default AddToMenuBtn;
