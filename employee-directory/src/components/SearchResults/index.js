import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table class="table table-striped table-inverse table-responsive">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Last Name</th>
          <th scope="col">First Name</th>
          <th scope="col">
            Cell <i class="fas fa-phone"></i>
          </th>
          <th scope="col">
            Email <i class="far fa-envelope"></i>
          </th>
        </tr>
      </thead>

      <tbody>
        {props.results.map((employee, index) => (
          <tr key={employee.name.last}>
            <th scope="row"></th>
            <td>
              <img src={employee.picture.thumbnail} alt="Employee Image"></img>{" "}
            </td>
            <td> {employee.name.last} </td>
            <td> {employee.name.first} </td>
            <td> {employee.cell} </td>
            <td> {employee.email} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;