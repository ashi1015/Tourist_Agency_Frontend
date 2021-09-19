import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddHotel from "./components/add-hotels.component";
import Hotels from "./components/hotel.component";
import HotelsList from "./components/hotels-list.component";
import HotelsDetails from "./components/Hotel-details.component";
import TouristView from "./components/tourist_view.component";
import HotelDashboardComponent from "./components/hotel-dashboard.component";
import ContactUsComponent from "./components/contact-us.component";
import HotelMain from './components/Hotels/HotelMainPage';
import test from './components/Hotels/test';
import Galadari from "./components/Individual Hotels/Hotel.Galadari";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/hotels" className="navbar-brand">
              Travel Agency
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/hotelList"} className="nav-link">
                  Hotels List
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/hotels"} className="nav-link">
                  Hotels
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/tourists"} className="nav-link">
                  Tourists
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/HotelDashboard"} className="nav-link">
                  Hotels Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contactUs"} className="nav-link">
                  Contact Us
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
            <Route path="/Galadari" component={Galadari} />
              <Route exact path="/hotels" component={HotelMain} />
              <Route exact path="/individualDestinationDetails" component={HotelsDetails} />
              <Route exact path={"/hotelList"} component={HotelsList} />
              <Route exact path="/add" component={AddHotel} />
              <Route path="/hotels/:id" component={Hotels} />
              <Route path="/tourists" component={TouristView} />
              <Route path="/HotelDashboard" component={HotelDashboardComponent} />
              <Route path="/contactUs" component={ContactUsComponent} />
              <Route path="/t" component={test} />
              
            </Switch>
            
          </div>
        </div>

      </Router>
    );
  }
}

export default App;
