import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit() {}
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }
  return (
    <div className="search">
      <input
        type="text"
        className="ipt ipt-forbtn "
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <button
        type="submit"
        className="ipt-btn ipt-btn--transparent"
        onClick={handleSubmit}
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default Search;
