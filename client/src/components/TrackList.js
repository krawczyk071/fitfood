import React from "react";

const TrackList = ({ data }) => {
  return (
    <div className="tracklist">
      <h2 className="tracker__title">Last 5 days</h2>
      <div className="tracklist__recent">
        {data.map((a) => (
          <div className="tracklist__recent__day" key={a.date}>
            <h2>{a.date}</h2>
            <ul className="tracklist__recent__day__list">
              {a.meals.map((m) => (
                <li className="tracklist__recent__day__list__item">
                  {m.name}
                  <div className="tracklist__recent__day__list__item__btn">
                    <i class="fa-regular fa-trash-can"></i>
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
