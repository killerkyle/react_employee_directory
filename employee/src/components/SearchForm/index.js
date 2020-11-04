import React from "react";
import "./style.css";

/* // Using the datalist element we can create autofill suggestions based on the props.breeds array */
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Search Employees:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search employees"
          id="employee-input"
        />
      </div>
    </form>
  );
}

export default SearchForm;