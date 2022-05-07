import React from "react";

import "./Filter.css";

const Filter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  const SearchHandler = (event) => {
    props.onSearch(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="lists-filter">
      <div className="lists-filter__control">
        <label>Filter by Tag</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {props.choose.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="lists-filter__control">
        <label>Find text description</label>
        <input type="text" onChange={SearchHandler}></input>
      </div>
    </div>
  );
};

export default Filter;
