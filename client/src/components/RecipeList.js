import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delFromMenu } from "../redux/features/menuSlice";
import { toast } from "react-toastify";

const RecipeList = ({ recipes, edit }) => {
  const dispatch = useDispatch();

  function onDelete(id) {
    try {
      dispatch(delFromMenu(id));
      toast.success("Meal deleted");
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div className="recipelist">
      {recipes.map((m) => (
        <div className="recipelist__item" key={m._id}>
          <Link to={`/meal/${m._id}`}>{m.name}</Link>
          {edit && (
            <div
              className="recipelist__item__btn"
              onClick={() => onDelete(m.menuId)}
            >
              <i className="fa-regular fa-trash-can"></i>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
