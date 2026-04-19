import React from 'react';
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import './EmployeeForm.css';

function EmployeeDetail(props) {
  // grab the id from the URL
  const { id } = useParams();
  
  // find the employee in the store with that id
  const employee = props.employees.find(
    (employee) => employee.EmployeeId === parseInt(id)
  );

  if (!employee) {
    return (
      <div className="employee-detail card">
        <h1>Employee Details</h1>
        <p>Employee not found. Please select a valid employee from the list.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }
  // render an HTML with that employees information
  return (
    <div className="employee-detail">
        <h1>Employee Details</h1>
        <table>
            <tbody>
                <tr>
                    <th>ID</th>
                    <td>{employee.EmployeeId}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{employee.name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{employee.email}</td>
                </tr>
                <tr>
                    <th>Job Title</th>
                    <td>{employee.title}</td>
                </tr>
                <tr>
                    <th>Department</th>
                    <td>{employee.department}</td>
                </tr>
            </tbody>
        </table>

        <div className="back-link">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    employees: state.employees,
  };
}

export default connect(mapStateToProps)(EmployeeDetail);