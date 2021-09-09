import React, { Component } from "react";
import { Link } from "react-router-dom";
import add from '../images/add.png'
import report from '../images/report.png'
import update from '../images/update.png'
import view from '../images/view2.png'


export default class DestinationDashboardComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (

            <div>
                <h2 className="adminHeading">Hotel Management</h2>

                <nav >
                    <ol style={{backgroundColor: "white", marginLeft: "-13px"}} className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Admin</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Hotels Dashboard</li>
                    </ol>
                </nav> <br/>

                <div className="row" style={{marginLeft: "3rem"}}>
                    <div className="column">
                        <div className="card text-white bg-info mb-3" style={{width: "15rem"}}>
                            <div className="card-body">
                                <Link to={"/add"}>
                                    <img className="card-img-top" src={add} alt="Card image cap" />
                                    <p className="card-text">Add Hotels</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card text-white bg-light mb-3" style={{ width: "15rem"}}>
                            <div className="card-body">
                                <Link to={"/touristList"}>
                                    <img className="card-img-top" src={update} alt="Card image cap" />
                                    <p className="card-text">View & Update Hotels</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column" >
                        <div className="card text-white bg-secondary mb-3" style={{width: "15rem"}} >
                            <div className="card-body">
                                <Link to={"/individualDestinationDetails"}>
                                    <img className="card-img-top" src={view} alt="Card image cap" />
                                    <p className="card-text">View Hotels Details</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card text-white bg-light mb-3" style={{width: "15rem"}}>
                            <div className="card-body">
                                <Link to={"/add"}>
                                    <img className="card-img-top" src={report} alt="Card image cap" />
                                    <p className="card-text">Generate Reports</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
