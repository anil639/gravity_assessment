import React from "react";

const Filter = ({ current, setFilter }) => {
  return (
    <div className="filter-buttons">
      <button
        onClick={() => setFilter("all")}
        className={current === "all" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={current === "completed" ? "active" : ""}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("pending")}
        className={current === "pending" ? "active" : ""}
      >
        Pending
      </button>
    </div>
  );
};

export default Filter;
