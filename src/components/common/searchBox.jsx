import React, { Component } from "react";

const SearchBox = ({ onChange, value }) => {
  return (
    <input
      className="form-control my-3"
      type="text"
      name="query"
      placeholder="Search..."
      aria-label="Search..."
      onChange={(e) => onChange(e.currentTarget.value)}
      value={value}
    ></input>
  );
};

export default SearchBox;
