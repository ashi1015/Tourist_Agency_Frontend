import React, { Component } from "react";
import { Link } from "react-router-dom";
import add from '../../images/add.png';
import report from '../../images/report.png'
import update from '../../images/update.png'
import view from '../../images/view2.png'


export default class AdminDashboard extends Component {
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
                        <li className="breadcrumb-item active" aria-current="page">Admin Dashboard</li>
                    </ol>
                </nav> <br/>

                <div className="row" style={{marginLeft: "9rem"}}>
                    <div className="column" style={{marginBottom: "15px"}}>
                        <div className="card text-white bg-info mb-4" style={{width: "15rem"}}>
                            <div className="card-body">
                                <Link to={"/add"}>
                                    <img className="card-img-top" src={add} alt="Card image cap" />
                                    <p className="card-text">Hotel Management</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column" style={{marginBottom: "15px"}}>
                        <div className="card text-white bg-light mb-3" style={{ width: "15rem"}}>
                            <div className="card-body">
                                <Link to={"/hotelList"}>
                                    <img className="card-img-top" src={update} alt="Card image cap" />
                                    <p className="card-text">Destination Management</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column" style={{marginBottom: "15px"}}>
                        <div className="card text-white bg-secondary mb-3" style={{width: "15rem"}} >
                            <div className="card-body">
                                <Link to={"/individualDestinationDetails"}>
                                    <img className="card-img-top" src={view} alt="Card image cap" />
                                    <p className="card-text">Vehicle Management</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column" >
                        <div className="card text-white bg-light mb-3" style={{width: "15rem"}}>
                            <div className="card-body">
                                <Link to={"/HotelDashbaord/Report"}>
                                    <img className="card-img-top" src={report} alt="Card image cap" />
                                    <p className="card-text">Tourist Guide Management</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card text-white bg-light mb-3" style={{width: "15rem"}}>
                            <div className="card-body">
                                <Link to={"/HotelDashbaord/Report"}>
                                    <img className="card-img-top" src={report} alt="Card image cap" />
                                    <p className="card-text">User Profile Management</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card text-white bg-light mb-3" style={{width: "15rem"}}>
                            <div className="card-body">
                                <Link to={"/HotelDashbaord/Report"}>
                                    <img className="card-img-top" src={report} alt="Card image cap" />
                                    <p className="card-text">Expenses Management</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
