import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/createExpenses.css'

const initialState = {
    expenseType: "",
    amount: 0,
    exmonth: "2021-08",
    errors: {},
    id:"",
}

class UpdateExpenses extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = initialState;
    }


    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        this.retrieveExpenseById();
    }

    retrieveExpenseById() {
        const { searchTitle, page, pageSize } = this.state;
        // const params = this.getRequestParams(searchTitle, page, pageSize);
        var id = window.location.pathname.split('/')[2];

        axios.get(`http://localhost:8085/expenses/get-expense/${id}`)

            .then(response => {
                console.log(response.data);

                this.setState({
                    expenseType: response.data.expenseType,
                    amount: response.data.amount,
                    exmonth: response.data.year + "-" + response.data.month,
                    id: response.data._id,
                });

            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }


    onSubmit(e) {
        e.preventDefault();

        var hasErrors = this.validation(this.state);

        if (hasErrors) {
            return;
        }

        var expenses = {
            expenseType: this.state.expenseType,
            year: this.state.exmonth.split("-")[0],
            month: this.state.exmonth.split("-")[1],
            amount: this.state.amount,
            date: this.state.exmonth
        }
        console.log('DATA TO SEND', expenses);

        
        axios.put(`http://localhost:8085/expenses/update-expenses/${this.state.id}`, expenses)
            .then(response => {
                alert('Data successfully updated')
                window.location = window.location.origin + "/expenses";
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })

    }

    validation = (values) => {

        var errors = {};

        if (!values.exmonth) {
            errors.exmonth = "Month is required."
        }
        if (!values.expenseType) {
            errors.expenseType = "Expense Type is required."
        }
        if (!values.amount) {
            errors.amount = "Amount is required."
        }

        this.setState({ errors: errors })
        return Object.keys(errors).length > 0;
    };

    render() {

        return (
            <div className="container">


                <form onSubmit={this.onSubmit} className="form">

                    <h1 className="adminHeading">UPDATE EXPENSES</h1>
                    <br></br>
                    <br></br>
                    <div className="mb-3 ">
                        <label htmlFor="expenseType" className="form-label">Expense Type : </label>

                        <select
                            className="form-control select_it19177106"
                            id="expenseType"
                            name="expenseType"
                            value={this.state.expenseType}
                            onChange={this.onChange}
                        >
                            <option value="" disabled selected hidden>Expense Type</option>
                            <option value="Electricity Bill">Electricity Bill</option>
                            <option value="Monthly Employee Salary">Monthly Employee Salary</option>
                            <option value="Internet Bill">Internet Bill</option>
                            <option value="Monthly Rent">Monthly Rent</option>
                            <option value="Phone Bill">Phone Bill</option>
                            <option value="Water Bill">Water Bill</option>
                        </select>
                        {this.state.errors.expenseType && <p className="error_IT19177106">{this.state.errors.expenseType}</p>}
                    </div>

                    <br></br>
                    <div className="mb-3">
                        <label htmlFor="exmonth" className="form-label">Expense Month : </label>

                        <input
                            type="month"
                            id="exmonth"
                            name="exmonth"
                            className="form-control select_it19177106"
                            value={this.state.exmonth}
                            onChange={this.onChange}>
                        </input>
                        {this.state.errors.exmonth && <p className="error_IT19177106">{this.state.errors.exmonth}</p>}
                    </div>
                    <br></br>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label ">Amount : </label>

                        <input
                            type="Number"
                            className="form-control select_it19177106"
                            id="amount"
                            name="amount"
                            value={this.state.amount}
                            onChange={this.onChange}
                        />
                        {this.state.errors.amount && <p className="error_IT19177106">{this.state.errors.amount}</p>}
                    </div>
                    <br></br><br></br>
                    <button type="submit" className="submitBtn">UPDATE</button>

                </form>
                <br></br><br></br>
            </div>
        )
    }


}

export default UpdateExpenses;