import React from 'react';
import { connect } from "react-redux";
import { addEmployee } from "../redux/actions";
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            title: '',
            department: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

         this.props.addEmployee(this.state); // Dispatch the action to add the employee

        this.setState({
            name: '',
            email: '',
            title: '',
            department: ''
        });
    }

    render() {
        return (
            <div className="employee-form">
                <div style={{ textAlign: "center" }}>
                    <div className="form-header">
                        <h2>Employee Form</h2>
                        <span className="info-icon">
                            i
                            <span className="tooltip-text">
                                Enter employee details and click "Add Employee" to save them to the system.
                            </span>
                        </span>
                    </div>
                </div>

                <form className="employee-form-fields" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="title"
                        placeholder="Job Title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="department"
                        placeholder="Department"
                        value={this.state.department}
                        onChange={this.handleChange}
                    />

                    <button type="submit">Add Employee</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
  addEmployee,
};

export default connect(null, mapDispatchToProps)(EmployeeForm);