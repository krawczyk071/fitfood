import React from "react";
import { Link } from "react-router-dom";

const RecipeList = ({ recipes, edit }) => {
  return (
    <div className="recipelist">
      {recipes.map((m) => (
        <div className="recipelist__item">
          <Link to={`/meal/${m._id}`}>{m.name}</Link>
          {edit && (
            <div className="recipelist__item__btn">
              <i class="fa-regular fa-trash-can"></i>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
