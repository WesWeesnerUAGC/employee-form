import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';

function App() {
    const [employees, setEmployees] = useState(() => {
        const savedEmployees = localStorage.getItem("employees");
        return savedEmployees ? JSON.parse(savedEmployees) : [];
    });

    function addEmployee(newEmployee) {
        const employeeWithId = {
            ...newEmployee,
            EmployeeId: employees.length + 1
        };

        const updatedEmployees = [...employees, employeeWithId];
        setEmployees(updatedEmployees);
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    }

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <EmployeeForm onAddEmployee={addEmployee} />
                            <EmployeeList employees={employees} />
                        </div>
                    }
                />
                <Route
                    path="/employees/:id"
                    element={<EmployeeDetail employees={employees} />}
                />
            </Routes>
        </Router>
    );
}

export default App;