import React from "react";
import { useDispatch } from "react-redux";
import { delFromAte } from "../redux/features/ateSlice";

const TrackList = ({ data }) => {
  const dispatch = useDispatch();
  // import { toast } from "react-toastify";

  function onDelete(id) {
    dispatch(delFromAte(id));
  }
  return (
    <div className="tracklist">
      <h2 className="tracker__title">Last 5 days</h2>
      <div className="tracklist__recent">
        {data.map((a) => (
          <div className="tracklist__recent__day" key={a.date}>
            <h2>{a.date}</h2>
            <ul className="tracklist__recent__day__list">
              {a.meals.map((m) => (
                <li
                  className="tracklist__recent__day__list__item"
                  key={a.date + m.meal._id}
                >
                  {m.meal.name}
                  <div
                    className="tracklist__recent__day__list__item__btn"
                    onClick={() => onDelete(m._id)}
                  >
                    <i className="fa-regular fa-trash-can"></i>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
