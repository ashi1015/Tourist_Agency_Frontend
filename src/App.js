import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import DestinationDashboardComponent from "./components/destination-dashboard.component";
import DestinationsListComponent from "./components/destinations-list.component";
import AddDestinationComponent from "./components/add-destination.component";
import DestinationsDetailsComponent from "./components/destination-details.component";
import ContactUsComponent from "./components/contact-us.component";
import UpdateDestinationComponent from "./components/update-destination.component";
import DestinationCardViewComponent from "./components/destination-cardview.component";
import IndividualDestinationDetailsComponent from "./components/individual-destination-details.component";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <a href="/destinations" className="navbar-brand">
                            Tourist Agency
                        </a>
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={"/destinationDashboard"} className="nav-link">
                                    Destination Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/destinationList"} className="nav-link">
                                    Destinations List
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/individualDestinationDetails"} className="nav-link">
                                    Destination Details
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/add"} className="nav-link">
                                    Add Destination
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/tourists"} className="nav-link">
                                    Tourists View
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/contactUs"} className="nav-link">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/individualdestinationdetailspage"} className="nav-link">
                                    Individual Destination Details
                                </Link>
                            </li>
                        </div>
                    </nav>

                    <div className="container mt-3">
                        <Switch>
                            <Route path="/destinationDashboard" component={DestinationDashboardComponent} />
                            <Route exact path={"/destinationList"} component={DestinationsListComponent} />
                            <Route exact path="/individualDestinationDetails" component={DestinationsDetailsComponent} />
                            <Route exact path="/add" component={AddDestinationComponent} />
                            <Route path="/contactUs" component={ContactUsComponent} />
                            <Route path="/destinations/:id" component={UpdateDestinationComponent} />
                            <Route path="/tourists" component={DestinationCardViewComponent} />
                            <Route path="/individualdestinationdetailspage/:id" component={IndividualDestinationDetailsComponent} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
