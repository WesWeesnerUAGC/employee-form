import React from 'react';
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

        this.props.onAddEmployee(this.state); // Pass the employee data to the parent component

        console.log(this.state);

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
                <h2>Employee Form</h2>

                <form className="employee-form" onSubmit={this.handleSubmit}>
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

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default EmployeeForm;