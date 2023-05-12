import React from "react";
import { menu, recipes } from "../utils/data";

const MyMenu = () => {
  const my = recipes.filter((r) => menu.includes(r.id));
  return (
    <div className="mymenu">
      <h1 className="mymenu__title">Your favorite meals</h1>
      <div className="mymenu__list">
        {my.map((m) => (
          <div className="mymenu__list__item">
            <a href={m.name}>{m.name}</a>
            <div className="mymenu__list__item__btn">
              <i class="fa-regular fa-trash-can"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMenu;
