import React from "react";
import Chart from "./Chart";
import TrackList from "./TrackList";
import TrackMeal from "./TrackMeal";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const Tracker = () => {
  // const dispatch = useDispatch();
  const ate = useSelector((state) => state.ate);
  const menu = useSelector((state) => state.menu);
  const recipes = useSelector((state) => state.recipes);
  if (
    ate.status === "loading" ||
    menu.status === "loading" ||
    recipes.status === "loading"
  ) {
    return <Loader />;
  }
  // useEffect(() => {
  //   dispatch(fetchAllAte());
  // }, [dispatch]);

  // if (ate.data.length < 1) {
  //   return (
  //     <div className="info">
  //       <h2>Nothing tracked</h2>
  //     </div>
  //   );
  // }

  const menuIds = menu.data.map((m) => m.recipeId);
  const my = recipes.data.filter((r) => menuIds.includes(r._id));

  // console.log(ate);
  const ateRich = ate.data.map((a) => {
    return {
      ...a,
      meal: recipes.data.find((r) => r._id === a.recipeId),
    };
  });

  const ateRichGroup = ateRich.reduce((a, i) => {
    return {
      ...a,
      [i.date]: [...(a[i.date] || []), i],
    };
  }, {});
  const ateGroupArr = Object.keys(ateRichGroup).map((k) => {
    return {
      date: k,
      meals: ateRichGroup[k],
    };
  });

  // console.log("a", ate);
  console.log("ag", ateRichGroup);
  console.log("aga", ateGroupArr);

  //grupby then sort thjen slice last5
  //najpierw warunek ze data wieksza od, sort

  const cals = ateGroupArr.slice(-5).map((a) => {
    return {
      date: a.date,
      cals: a.meals.reduce((a, i) => a + Number(i.meal.calories), 0),
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
      {ate.data.length < 1 ? (
        <h2>Nothing tracked yet</h2>
      ) : (
        <>
          <Chart cals={cals} />
          <TrackList data={ateGroupArr} />
        </>
      )}
      {my.length > 0 && <TrackMeal data={my} />}
    </div>
  );
};

export default Tracker;
