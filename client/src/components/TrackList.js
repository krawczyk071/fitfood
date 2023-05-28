import React from "react";
import { useDispatch } from "react-redux";
import { delFromAte, fetchAllAte } from "../redux/features/ateSlice";

const TrackList = ({ data }) => {
  const dispatch = useDispatch();
  // import { toast } from "react-toastify";

  function onDelete(id) {
    dispatch(delFromAte(id));
    dispatch(fetchAllAte());
  }
  return (
    <div className="tracklist">
      <h2 className="tracker__title">Last 5 days</h2>
      <div className="tracklist__recent">
        {data.map((a) => {
          let dateDisplay = new Date(a._id);
          return (
            <div className="tracklist__recent__day" key={a._id}>
              <h2>{dateDisplay.toLocaleDateString()}</h2>
              <ul className="tracklist__recent__day__list">
                {a.mealsArr.map((m) => (
                  <li
                    className="tracklist__recent__day__list__item"
                    key={a._id + m.mealId}
                  >
                    {m.recipe.name}
                    <div
                      className="tracklist__recent__day__list__item__btn"
                      onClick={() => onDelete(m.mealId)}
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrackList;
