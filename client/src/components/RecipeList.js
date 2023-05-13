import React from "react";

const RecipeList = ({ recipes, edit }) => {
  return (
    <div className="recipelist">
      {recipes.map((m) => (
        <div className="recipelist__item">
          <a href={m.name}>{m.name}</a>
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
