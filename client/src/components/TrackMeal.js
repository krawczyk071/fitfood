import React from "react";
import { days } from "../utils/data";

const TrackMeal = ({ data }) => {
  return (
    <div className="trackmeal">
      <h2 className="tracker__title">Track your meals</h2>
      <form action="" className="trackmeal__form">
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
            {data.map((m) => (
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

export default TrackMeal;
