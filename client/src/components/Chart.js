import React from "react";

const Chart = ({ cals }) => {
  const max = 5000;
  // draw target line
  cals = cals.slice().reverse();
  console.log({ cals });
  return (
    <div className="chart">
      {cals.map((c) => {
        let dateDisplay = new Date(c._id);
        return (
          <div className="chart__section" key={c._id}>
            <div className="chart__section__cont">
              <div
                className="chart__section__cont__data"
                style={{
                  height: `${(Math.min(c.dailyCalories, max) / max) * 100}%`,
                }}
              ></div>
            </div>
            <p>{dateDisplay.toLocaleDateString()}</p>
            <p>({c.dailyCalories})</p>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
