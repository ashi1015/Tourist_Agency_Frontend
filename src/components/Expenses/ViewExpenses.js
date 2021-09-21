import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../styles/viewExpenses.css'
import Pdf from "react-to-pdf";


const ref = React.createRef();

const options = {
    orientation: 'p',
    format: 'a4',
    // unit: 'px',
    // format: [600,800]
};



class Expenses extends Component {

    constructor(props) {
        super(props);
        this.onChangeSearchType = this.onChangeSearchType.bind(this);
        this.onChangeSearchDateStart = this.onChangeSearchDateStart.bind(this);
        this.onChangeSearchDateEnd = this.onChangeSearchDateEnd.bind(this);
        this.retrieveExpenses = this.retrieveExpenses.bind(this);
        this.getExpensesByType = this.getExpensesByType.bind(this);
        this.getExpensesByDate = this.getExpensesByDate.bind(this);


        this.state = {
            searchType: "All",
            searchDateStart: "",
            searchDateEnd: "",
            expenses: [],
            currentExpense: null,
            currentIndex: -1,
            page: 1,
            count: 0,
            pageSize: 3,
        };

        this.pageSizes = [10, 20, 50];
    }

    onChangeSearchType(e) {
        const searchType = e.target.value;

        this.setState({
            searchType: searchType,
        });
    }

    onChangeSearchDateStart(e) {
        const searchDateStart = e.target.value;

        this.setState({
            searchDateStart: searchDateStart,
        });
    }

    onChangeSearchDateEnd(e) {
        const searchDateEnd = e.target.value;

        this.setState({
            searchDateEnd: searchDateEnd,
        });
    }


    componentDidMount() {
        this.retrieveExpenses();
    }

    //search expenses by type
    getExpensesByType() {
        const { searchType } = this.state;
        if (searchType == "All") {
            this.retrieveExpenses();
        } else {
            axios.get(`http://localhost:8085/expenses/type/${searchType}`)
                .then(response => {
                    this.setState({
                        expenses: response.data.data,
                        count: 5,
                    });
                    console.log(response.data.data);
                })
                .catch(error => {
                    console.log(error.message);
                    alert(error.message)
                })
        }

    }

    //search expenses by date
    getExpensesByDate() {
        const { searchDateStart, searchDateEnd } = this.state;
        console.log(searchDateStart);
        console.log(searchDateEnd);
        if (searchDateStart == "") {
            this.retrieveExpenses();
        } else {
            axios.get(`http://localhost:8085/expenses/search-expenses/date?start=${searchDateStart}&end=${searchDateEnd}`)
                .then(response => {
                    this.setState({
                        expenses: response.data,
                        count: 5,
                    });
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error.message);
                    alert(error.message)
                })
        }

    }


    retrieveExpenses() {
        const { searchType, page, pageSize } = this.state;

        axios.get('http://localhost:8085/expenses/view')
            .then(response => {
                this.setState({
                    expenses: response.data.data,
                    count: 5,
                });
                console.log(response.data.data);
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }


    deleteExpense = async (id, e) => {

        e.preventDefault();

        if (window.confirm("Do you really want to delete this Expense?")) {
            console.log("OK");
            const { data } = await axios.delete(`http://localhost:8085/expenses/delete-expense/${id}`)
            console.log("DATA:" + data);
            if (data.data != null) {
                window.location = window.location.origin + "/expenses";
            }
        } else {
            console.log("CANCEL")
        }
    }


    render() {
        const {
            searchType,
            searchDateStart,
            searchDateEnd,
            expenses,
          } = this.state;


        return (


            <div className="col-md-12 hole" >
                <form>
                    <h2 className="adminHeading_expenses">List of Expenses </h2>

                    <nav >
                        <ol style={{ backgroundColor: "white" }} className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Admin</a></li>
                            <li className="breadcrumb-item active" aria-current="page">List of Expenses</li>
                        </ol>
                    </nav> <br />

                    <div className="col-md-12">


                        <div className="input-group mb-3">
                            <select
                                type="text"
                                className="form-control"
                                placeholder="Search by type"
                                value={searchType}
                                onChange={this.onChangeSearchType}
                            >
                                <option value="All" selected >All Expense Types</option>
                                <option value="Electricity Bill">Electricity Bill</option>
                                <option value="Monthly Employee Salary">Monthly Employee Salary</option>
                                <option value="Internet Bill">Internet Bill</option>
                                <option value="Monthly Rent">Monthly Rent</option>
                                <option value="Phone Bill">Phone Bill</option>
                                <option value="Water Bill">Water Bill</option>
                            </select>

                            <div className="input-group-append">
                                <button
                                    className="btn btn-info"
                                    style={{ paddingLeft: "50px", paddingRight: "50px" }}
                                    type="button"
                                    onClick={this.getExpensesByType} >
                                    Search
                                </button>

                            </div>
                            <h2 style={{ marginLeft: "120px", fontSize: "20px" }}>From :  </h2>
                            <input
                                type="month"
                                id="exmonth"
                                placeholder="Search by date"
                                style={{ marginLeft: "5px" }}
                                name="exmonth"
                                className="form-control select_ex_it19177106"
                                value={searchDateStart}
                                onChange={this.onChangeSearchDateStart}

                            >
                            </input>

                            <h2 style={{ marginLeft: "10px", fontSize: "20px" }}>To :  </h2>
                            <input
                                type="month"
                                id="exmonth"
                                placeholder="Search by date"
                                name="exmonth"
                                style={{ marginLeft: "5px" }}
                                className="form-control select_ex_it19177106"
                                value={searchDateEnd}
                                onChange={this.onChangeSearchDateEnd}

                            >
                            </input>
                            <div className="input-group-append">
                                <button
                                    className="btn btn-info"
                                    style={{ paddingLeft: "50px", paddingRight: "50px" }}
                                    type="button"
                                    onClick={this.getExpensesByDate} >
                                    Search
                                </button>

                            </div>

                        </div>


                    </div>

                    <div ref={ref}>
                        <table className="table view-table" >
                            <thead className="thead-dark">
                                <tr>
                                    <th>Expenses Id</th>
                                    <th>Expense Type</th>
                                    <th>Year</th>
                                    <th>Month</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>


                                {expenses && expenses.map((expense, index) => (

                                    <tr className="expensedata" key={expense._id}>
                                        <td>{expense.expenseID}</td>
                                        <td>{expense.expenseType}</td>
                                        <td>{expense.year}</td>
                                        <td>{expense.month}</td>
                                        <td>{expense.amount}</td>

                                        <td>
                                            <Link to={"/update-expenses/" + expense._id} type="button" style={{ fontWeight: "bold", fontSize: "13px" }} className="btn btn-success btn-sm"> Update </Link>
                                            <button className="btn btn-danger btn-sm" style={{ fontWeight: "bold", marginLeft: "10px", fontSize: "13px" }} onClick={this.deleteExpense.bind(this, expense._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>



                        </table><br />

                    </div>
                
                    <div className="col-md-12">

                        <Link to="/create-expenses">
                            <button
                                className="submitBtnYellow"
                                onClick={this.removeAllExpenses} >
                                Add New Expense
                            </button>
                        </Link>

                        
                        <Link to="/report"
                        to={{pathname: "/report", data: {expenses}}}
                        >
                            <button
                                className="submitBtnRed"
                                onClick={this.removeAllExpenses}>
                                Genarate Report
                            </button>
                        </Link>
                    </div>
                </form>
                    <Pdf targetRef={ref} filename="expense-report.pdf" options={options} scale={0.65}>
                        {({ toPdf }) => <button style={{ fontSize: "15px", textAlign: 'center' }} onClick={toPdf}></button>}
                    </Pdf>
            </div>
        );
    }
}

export default Expenses;