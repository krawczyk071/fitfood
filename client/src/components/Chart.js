import React from "react";

const Chart = ({ cals }) => {
  const max = 5000;
  // draw target line

  return (
    <div className="chart">
      {cals.map((c) => {
        return (
          <div className="chart__section" key={c.date}>
            <div className="chart__section__cont">
              <div
                className="chart__section__cont__data"
                style={{ height: `${(Math.min(c.cals, max) / max) * 100}%` }}
              ></div>
            </div>
            <p>{c.date}</p>
            <p>({c.cals})</p>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
