import React, { Component } from "react";
import { Link } from "react-router-dom";
import hotel from '../../images/h1.jpg';
import destination from '../../images/destination1.jpg'
import vehicle from '../../images/car.jpg'
import user from '../../images/man1.jpg'
import guide from '../../images/lady.jpg'
import expense from '../../images/report.png'


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
                                    <img className="card-img-top" src={hotel} alt="Card image cap" />
                                    <p className="card-text">Hotel Management</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column" style={{marginBottom: "15px"}}>
                        <div className="card text-white bg-light mb-3" style={{ width: "15rem"}}>
                            <div className="card-body">
                                <Link to={"/hotelList"}>
                                    <img className="card-img-top" src={destination} alt="Card image cap" />
                                    <p className="card-text">Destination Management</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column" style={{marginBottom: "15px"}}>
                        <div className="card text-white bg-secondary mb-3" style={{width: "15rem"}} >
                            <div className="card-body">
                                <Link to={"/individualDestinationDetails"}>
                                    <img className="card-img-top" src={vehicle} alt="Card image cap" />
                                    <p className="card-text">Vehicle Management</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column" style={{height: "15rem"}}>
                        <div className="card text-white bg-light mb-3" style={{width: "15rem"}}>
                            <div className="card-body">
                                <Link to={"/HotelDashbaord/Report"}>
                                    <img className="card-img-top" src={guide} alt="Card image cap" style={{height: "170px"}}/>
                                    <p className="card-text">Tourist Guide Management</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="column" style={{height: "15rem"}}>
                        <div className="card text-white bg-light mb-3" style={{width: "15rem"}}>
                            <div className="card-body">
                                <Link to={"/HotelDashbaord/Report"}>
                                    <img className="card-img-top" src={user} alt="Card image cap" style={{height: "170px"}}/>
                                    <p className="card-text">User Profile Management</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="column" style={{height: "17.5rem"}}>
                        <div className="card text-white bg-light mb-3" style={{width: "15rem"}}>
                            <div className="card-body">
                                <Link to={"/HotelDashbaord/Report"}>
                                    <img className="card-img-top" src={expense} alt="Card image cap" style={{height: "170px"}} />
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
