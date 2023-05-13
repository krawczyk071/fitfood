import React from "react";
import { ate, days, menu, recipes } from "../utils/data";
import Chart from "./Chart";
import TrackList from "./TrackList";
import TrackMeal from "./TrackMeal";

const Tracker = () => {
  const my = recipes.filter((r) => menu.includes(r.id));
  const ateRich = ate.map((a) => {
    return { ...a, meals: a.meals.map((m) => recipes.find((r) => r.id === m)) };
  });
  const cals = ateRich.slice(-5).map((a) => {
    return {
      date: a.date,
      cals: a.meals.reduce((a, i) => a + Number(i.calories), 0),
    };
  });
  console.log(cals);

  return (
    <div className="tracker">
      <h1 className="tracker__title">Meal Journal</h1>
      <h2 className="tracker__title">Recent calories</h2>
      <Chart cals={cals} />
      <TrackList data={ateRich} />
      <TrackMeal data={my} />
    </div>
  );
};

export default Tracker;
