import React from 'react';
import { useParams } from 'react-router-dom';
import './EmployeeForm.css';

function EmployeeDetail(props) {
  // grab the id from the URL
  const { id } = useParams();
  
  // find that employee by id
  const employee = props.employees.find((employee) => employee.EmployeeId === parseInt(id));
  const { EmployeeId, name, email, phone } = employee || {}; // Provide fallback object if employee is undefined

  // render an HTML with that employees information
  return (
    <div className="employee-detail">
        <h1>Employee Details</h1>
        <table>
            <tbody>
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
    </div>
  );
}

export default EmployeeDetail;