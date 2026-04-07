import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';

function App() {

    // Load employees from localStorage or initialize with an empty array
    const [employees, setEmployees] = useState(() => {
        const savedEmployees = localStorage.getItem("employees");
        return savedEmployees ? JSON.parse(savedEmployees) : [];
    });

    // Function to add a new employee
    function addEmployee(newEmployee) {
        const updatedEmployees = [...employees, newEmployee];
        setEmployees(updatedEmployees);
        saveData(updatedEmployees);
    }

    // Function to save employees to localStorage
    function saveData(data) {
        localStorage.setItem("employees", JSON.stringify(data));
    }

    return (
        <div>
            <EmployeeForm onAddEmployee={addEmployee} />
        </div>
    );
}

export default App;