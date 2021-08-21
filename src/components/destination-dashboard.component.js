import React, { Component } from "react";
import {Link} from "react-router-dom";
import destination1 from '../images/destination1.jpg'

export default class DestinationDashboardComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 className="adminHeading">Destination Management</h2>

                <nav >
                    <ol style={{backgroundColor: "white", marginLeft: "-13px"}} className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Admin</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Add Destinations</li>
                    </ol>
                </nav> <br/><br/>

                <div className="row">
                    <div className="column2">
                        <div className="card text-white bg-info mb-3" style={{width: "18rem"}}>
                            <div className="card-body">
                                <Link to={"/add"}>
                                    <img className="card-img-top" src={destination1} alt="Card image cap" />
                                    <p className="card-text">Add Destinations</p>
                                </Link><br/>
                            </div>
                        </div>
                    </div>
                    <div className="column2">
                        <div className="card text-white bg-danger mb-3" style={{width: "18rem"}}>
                            <div className="card-body">
                                <Link to={"/destinationList"}>
                                    <img className="card-img-top" src={destination1} alt="Card image cap" />
                                    <p className="card-text">View & Update Destinations</p>
                                </Link><br/>
                            </div>
                        </div>
                    </div>
                    <div className="column2" >
                        <div className="card text-white bg-success mb-3" style={{width: "18rem"}} >
                            <div className="card-body">
                                <Link to={"/individualDestinationDetails"}>
                                    <img className="card-img-top" src={destination1} alt="Card image cap" />
                                    <p className="card-text">View Destination Details</p>
                                </Link><br/>
                            </div>
                        </div>
                    </div>
                    <div className="column2">
                        <div className="card text-white bg-warning mb-3" style={{width: "18rem"}}>
                            <div className="card-body">
                                <Link to={"/add"}>
                                    <img className="card-img-top" src={destination1} alt="Card image cap" />
                                    <p className="card-text">Generate Reports</p>
                                </Link><br/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
