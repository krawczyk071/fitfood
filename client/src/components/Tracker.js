import React, { useEffect } from "react";
import Chart from "./Chart";
import TrackList from "./TrackList";
import TrackMeal from "./TrackMeal";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { fetchAllAte } from "../redux/features/ateSlice";

const Tracker = () => {
  const dispatch = useDispatch();
  const ate = useSelector((state) => state.ate);
  const menu = useSelector((state) => state.menu);
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchAllAte());
  }, [dispatch]);
  if (
    ate.status === "loading" ||
    menu.status === "loading" ||
    recipes.status === "loading"
  ) {
    return <Loader />;
  }

  // if (ate.data.length < 1) {
  //   return (
  //     <div className="info">
  //       <h2>Nothing tracked</h2>
  //     </div>
  //   );
  // }

  const menuIds = menu.data.map((m) => m.recipeId);
  const my = recipes.data.filter((r) => menuIds.includes(r._id));

  // const ateRich = ate.data.map((a) => {
  //   return {
  //     ...a,
  //     meal: recipes.data.find((r) => r._id === a.recipeId),
  //   };
  // });

  // const ateRichGroup = ateRich.reduce((a, i) => {
  //   return {
  //     ...a,
  //     [i.date]: [...(a[i.date] || []), i],
  //   };
  // }, {});
  // const ateGroupArr = Object.keys(ateRichGroup).map((k) => {
  //   return {
  //     date: k,
  //     meals: ateRichGroup[k],
  //   };
  // });

  // const cals = ateGroupArr.slice(-5).map((a) => {
  //   let dateDisplay = new Date(a.date);
  //   return {
  //     date: dateDisplay.toLocaleDateString(),
  //     cals: a.meals.reduce((a, i) => a + Number(i.meal.calories), 0),
  //   };
  // });

  return (
    <div className="tracker">
      <h1 className="tracker__title">Meal Journal</h1>
      <h2 className="tracker__title">Recent calories</h2>
      {ate.data.length < 1 ? (
        <h2>Nothing tracked yet</h2>
      ) : (
        <>
          <Chart cals={ate.data} />
          <TrackList data={ate.data} />
        </>
      )}
      {my.length > 0 && <TrackMeal data={my} />}
    </div>
  );
};

export default Tracker;
