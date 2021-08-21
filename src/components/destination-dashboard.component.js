import React, { Component } from "react";
import { Link } from "react-router-dom";
import destination1 from '../images/destination1.jpg'
import addDestination from '../images/addDestination.png'
import destinationDetails from '../images/destinationDetails.png'
import generateDestinationReport from '../images/generateDestinationReport.png'
import updateDestinations from '../images/updateDestinations.png'

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
                </nav> <br/>

                <div className="row">
                    <div className="column">
                        <div className="card text-white bg-info mb-3" style={{width: "18rem"}}>
                            <div className="card-body">
                                <Link to={"/add"}>
                                    <img className="card-img-top" src={destination1} alt="Card image cap" />
                                    <p className="card-text">Add Hotels</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card text-white bg-danger mb-3" style={{width: "18rem"}}>
                            <div className="card-body">
                                <Link to={"/touristList"}>
                                    <img className="card-img-top" src={destination1} alt="Card image cap" />
                                    <p className="card-text">View & Update Hotels</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column" >
                        <div className="card text-white bg-success mb-3" style={{width: "18rem"}} >
                            <div className="card-body">
                                <Link to={"/individualDestinationDetails"}>
                                    <img className="card-img-top" src={destination1} alt="Card image cap" />
                                    <p className="card-text">View Hotels Details</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card text-white bg-warning mb-3" style={{width: "18rem"}}>
                            <div className="card-body">
                                <Link to={"/add"}>
                                    <img className="card-img-top" src={destination1} alt="Card image cap" />
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
