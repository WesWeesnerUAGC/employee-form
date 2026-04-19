import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

function EmployeeList(props) {
  return (
    <div className="employee-list card">
      <h1>Employee List</h1>

      {props.employees.length === 0 ? (
        <p>No employees have been added yet.</p>
      ) : (
        <ul>
          {props.employees.map((employee) => (
            <li key={employee.EmployeeId}>
              <Link to={`/employees/${employee.EmployeeId}`}>
                {employee.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    employees: state.employees,
  };
}


export default connect(mapStateToProps)(EmployeeList);