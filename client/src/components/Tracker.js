import React, { useEffect } from "react";
import { ate, days, menu, recipes } from "../utils/data";
import Chart from "./Chart";
import TrackList from "./TrackList";
import TrackMeal from "./TrackMeal";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAte } from "../redux/features/ateSlice";
import { groupBy } from "../utils/helpers";

const Tracker = () => {
  const dispatch = useDispatch();
  const { data: ate } = useSelector((state) => state.ate);
  const { data: menu } = useSelector((state) => state.menu);
  const { data: recipes } = useSelector((state) => state.recipes);
  useEffect(() => {
    dispatch(fetchAllAte());
  }, [dispatch]);
  if (ate.length < 1) {
    return <h2>Nothing tracked</h2>;
  }

  const menuIds = menu.map((m) => m.recipeId);
  const my = recipes.filter((r) => menuIds.includes(r._id));

  const ateGroup = ate.reduce((a, i) => {
    return {
      ...a,
      [i.date]: [...(a[i.date] || []), i.recipeId],
    };
  }, {});
  const ateGroupArr = Object.keys(ateGroup).map((k) => {
    return {
      date: k,
      meals: ateGroup[k],
    };
  });

  console.log("a", ate);
  console.log("ag", ateGroup);
  console.log("aga", ateGroupArr);

  const ateRich = ateGroupArr.map((a) => {
    return {
      ...a,
      // meals: recipes.find((r) => r._id === a.recipeId),
      meals: a.meals.map((a) => recipes.find((r) => r.id === a.recipeId)),
    };
  });

  //grupby then sort thjen slice last5
  //najpierw warunek ze data wieksza od, sort

  const cals = ateRich.slice(-5).map((a) => {
    return {
      date: a.date,
      cals: a.meals.reduce((a, i) => a + Number(i.calories), 0),
    };
  });

  // const calcCals = ateRich.reduce((a, i) => {
  //   return {
  //     ...a,
  //     [i.date]: (Number(a[i.date]) || 0) + Number(i.meal.calories),
  //   };
  // }, {});

  // const cals = Object.keys(calcCals).map((k) => {
  //   return {
  //     date: k,
  //     cals: calcCals[k],
  //   };
  // });
  // console.log(cals);
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
