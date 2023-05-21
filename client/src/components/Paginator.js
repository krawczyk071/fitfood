import React from "react";
import { Link } from "react-router-dom";

const Paginator = ({ baseUrl, current, last }) => {
  return (
    <div className="paginator">
      {current !== 1 && (
        <Link to={baseUrl + (current - 1)}>
          <div className="paginator__btn">prev</div>
        </Link>
      )}
      <Link to={baseUrl + current}>
        <div className="paginator__btn paginator__btn--active">{current}</div>
      </Link>
      {current !== last && (
        <Link to={baseUrl + (current + 1)}>
          <div className="paginator__btn">next</div>
        </Link>
      )}
    </div>
  );
};

export default Paginator;
