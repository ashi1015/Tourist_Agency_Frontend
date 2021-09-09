import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './viewExpenses.css'



class Expenses extends Component {

    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveExpenses = this.retrieveExpenses.bind(this);
        // this.refreshList = this.refreshList.bind(this);
        // this.setActiveExpense = this.setActiveExpense.bind(this);
        // // this.removeAllExpenses = this.removeAllExpenses.bind(this);
        // this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

        this.state = {
            searchTitle: "",
            expenses: [],
            currentExpense: null,
            currentIndex: -1,
            page: 1,
            count: 0,
            pageSize: 3,
        };

        this.pageSizes = [10, 20, 50];
    }

    // refreshList() {
    //     this.retrieveExpenses();
    //     this.setState({
    //         currentExpense: null,
    //         currentIndex: -1,
    //     });
    // }
    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle,
        });
    }

    // setActiveExpense(expense, index) {
    //     this.setState({
    //         currentExpense: expense,
    //         currentIndex: index,
    //     });
    // }

    // getRequestParams(searchTitle, page, pageSize) {
    //     let params = {};

    //     if (searchTitle) {
    //         params["title"] = searchTitle;
    //     }

    //     if (page) {
    //         params["page"] = page - 1;
    //     }

    //     if (pageSize) {
    //         params["size"] = pageSize;
    //     }

    //     return params;
    // }

    componentDidMount() {
        this.retrieveExpenses();
    }

    retrieveExpenses() {
        const { searchTitle, page, pageSize } = this.state;
        // const params = this.getRequestParams(searchTitle, page, pageSize);

        axios.get('http://localhost:8030/expenses/view')
            .then(response => {
                // const { expenses } = response.data.data;
                // console.log("expenses");
                // console.log(expenses);
                // console.log("response.data.data");
                // console.log(response.data.data);
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

    //   removeAllExpenses() {
    //     ExpenseDataService.deleteAll()
    //       .then((response) => {
    //         console.log(response.data);
    //         this.refreshList();
    //       })
    //       .catch((e) => {
    //         console.log(e);
    //       });
    //   }

    //   deleteExpense() {
    //     ExpenseDataService.delete(this.state.currentExpense.id)
    //       .then(response => {
    //         console.log(response.data);
    //         this.props.history.push('/expenses')
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    //   }

    // handlePageChange(event, value) {
    //     this.setState(
    //         {
    //             page: value,
    //         },
    //         () => {
    //             this.retrieveExpenses();
    //         }
    //     );
    // }

    handlePageSizeChange(event) {
        this.setState(
            {
                pageSize: event.target.value,
                page: 1
            },
            () => {
                this.retrieveExpenses();
            }
        );
    }

    render() {
        const {
            searchTitle,
            expenses,
            currentExpense,
            currentIndex,
            page,
            count,
            pageSize,
        } = this.state;

        // console.log("this.state.expenses");
        // console.log(this.state.expenses);
        // console.log("this.state");
        // console.log(this.state);
        console.log("expenses");
        console.log(expenses);

        return (


            <div className="col-md-12 hole" >
                <form>
                <h2 className="adminHeading">List of Expenses </h2>

                <nav >
                    <ol style={{ backgroundColor: "white" }} className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Admin</a></li>
                        <li className="breadcrumb-item active" aria-current="page">List of Expenses</li>
                    </ol>
                </nav> <br />

                <div className="col-md-12">


                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by title"
                            value={searchTitle}
                            onChange={this.onChangeSearchTitle} />
                        <div className="input-group-append">
                            <button
                                className="btn btn-info"
                                style={{ paddingLeft: "50px", paddingRight: "50px" }}
                                type="button"
                                onClick={this.retrieveExpenses} >
                                Search
                            </button>

                        </div>
                        <h2 style={{ marginLeft: "120px", fontSize: "20px" }}>From :  </h2>
                        <input
                            type="month"
                            id="exmonth"
                            style={{ marginLeft: "5px" }}
                            name="exmonth"
                            className="form-control select_ex_it19177106"
                            // value={this.state.exmonth}
                            // onChange={this.onChange}
                            >
                        </input>
                        
                        <h2 style={{ marginLeft: "10px" , fontSize: "20px"}}>To :  </h2>
                        <input
                            type="month"
                            id="exmonth"
                            name="exmonth"
                            style={{ marginLeft: "5px" }}
                            className="form-control select_ex_it19177106"
                            // value={this.state.exmonth}
                            // onChange={this.onChange}
                            >
                        </input>
                        <div className="input-group-append">
                            <button
                                className="btn btn-info"
                                style={{ paddingLeft: "50px", paddingRight: "50px" }}
                                type="button"
                                onClick={this.retrieveExpenses} >
                                Search
                            </button>

                        </div>

                    </div>


                </div>

                <table className="table">
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
                            <td>{index+1}</td>
                            <td>{expense.expenseType}</td>
                            <td>{expense.year}</td>
                            <td>{expense.month}</td>
                            <td>{expense.amount}</td>
                            {/*<td>{expense.published ? "Published" : "Pending"}</td>*/}
                            <td>
                                <Link to={"/expenses/" + expense.id} type="button" style={{ fontWeight: "bold", fontSize: "13px" }} className="btn btn-success btn-sm"> Update </Link>
                                <button className="btn btn-danger btn-sm" style={{ fontWeight: "bold", marginLeft: "10px", fontSize: "13px" }} onClick={this.deleteTutorial}>Delete</button>
                            </td>
                            </tr>
                        ))}
                    </tbody>



                </table><br />


                <div className="col-md-5">
                    {"Items per Page: "}
                    <select className="select" onChange={this.handlePageSizeChange} value={pageSize}>
                        {this.pageSizes.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>

                    {/* <Pagination
                        className="pagination"
                        count={count}
                        page={page}
                        siblingCount={1}
                        boundaryCount={1}
                        variant="outlined"
                        shape="rounded"
                        onChange={this.handlePageChange}
                    /> */}
                </div>





                <div className="col-md-12">

                    <Link to="/create-expenses">
                        <button
                            className="submitBtnYellow"
                            onClick={this.removeAllExpenses} >
                            Add New Expense
                        </button>
                    </Link>

                    <button
                        className="submitBtnRed"
                        onClick={this.removeAllExpenses}>
                        Genarate Report
                    </button>
                </div>
                </form>
            </div>
        );
    }
}

export default Expenses;