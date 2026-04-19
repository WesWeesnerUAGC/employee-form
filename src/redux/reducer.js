import { ADD_EMPLOYEE } from "./actions";

const savedEmployees = localStorage.getItem("employees");

const initialState = {
  employees: savedEmployees ? JSON.parse(savedEmployees) : [],
};

function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EMPLOYEE: {
      const newEmployee = {
        ...action.payload,
        EmployeeId: state.employees.length + 1,
      };

      const updatedEmployees = [...state.employees, newEmployee];
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));

      return {
        ...state,
        employees: updatedEmployees,
      };
    }

    default:
      return state;
  }
}

export default employeeReducer;