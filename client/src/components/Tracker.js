import React from "react";
import { ate, days, menu, recipes } from "../utils/data";
import Chart from "./Chart";

const Tracker = () => {
  const my = recipes.filter((r) => menu.includes(r.id));

  return (
    <div className="tracker">
      <h1 className="tracker__title">Meal Journal</h1>
      <h2 className="tracker__title">Recent calories</h2>
      <Chart cals={[2000, 3000, 1000, 2500, 1500]} />

      <h2 className="tracker__title">Last 5 days</h2>
      <div className="tracker__recent">
        {ate.map((a) => (
          <>
            <h2>{a.date}</h2>
            <ul className="tracker__recent__list">
              {a.meals.map((m) => (
                <li className="tracker__recent__list__item">
                  {m}
                  <div className="tracker__recent__list__item__btn">
                    <i class="fa-regular fa-trash-can"></i>
                  </div>
                </li>
              ))}
            </ul>
          </>
        ))}
      </div>
      <h2 className="tracker__title">Track your meals</h2>
      <form action="" className="login__form">
        <label htmlFor="login" className="lbl">
          Day
        </label>
        <div className="select">
          <select name="day" id="day">
            {days.map((d) => (
              <option value={d}>{d}</option>
            ))}
          </select>
        </div>
        <label htmlFor="meals" className="lbl">
          Meal
        </label>
        <div className="select">
          <select name="meals" id="meals">
            {my.map((m) => (
              <option value={m.id}>{m.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn--primary">
          Track
        </button>
      </form>
    </div>
  );
};

export default Tracker;
