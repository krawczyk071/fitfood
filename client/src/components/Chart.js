import React from "react";

const Chart = ({ cals }) => {
  const max = 5000;
  // add Math.ceiling

  return (
    <div className="chart">
      {cals.map((c) => {
        return (
          <div className="chart__cont">
            <div
              className="chart__cont__data"
              style={{ height: `${(c / max) * 100}%` }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
