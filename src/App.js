import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddHotel from "./components/Hotels/add-hotels.component";
import UpdateHotels from "./components/Hotels/Update_hotel.component";
import HotelsList from "./components/Hotels/hotels-list.component";
import HotelsDetails from "./components/Hotels/Hotel-details.component";
import HotelDashboardComponent from "./components/Hotels/hotel-dashboard.component";
import ContactUsComponent from "./components/contact-us.component";
import Galadari from "./components/Individual Hotels/Hotel.Galadari";
import HotelReport from "./components/Hotels/HotelReport"
import HotelCardViewComponent from "./components/Hotels/Hotel_ComponentView";
import IndividualHotelDetailsComponent from "./components/Individual Hotels/individual_Hotels";
import HotelMain from './components/Hotels/HotelMainPage';
import Gallery from "./components/Individual Hotels/Gallery";

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
                <Link to={"/hotels"} className="nav-link">
                  Hotels
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
              <Route path="/image" component={Gallery}/>
              <Route path="/i/:id" component={IndividualHotelDetailsComponent}/>
              <Route exact path="/hotels" component={HotelMain} />
              <Route path="/hotelsV" component={HotelCardViewComponent}/>
              <Route path="/HotelDashbaord/Report" component={HotelReport}/>
              <Route path="/Galadari" component={Galadari} />
              <Route exact path="/individualDestinationDetails" component={HotelsDetails} />
              <Route exact path={"/hotelList"} component={HotelsList} />
              <Route exact path="/add" component={AddHotel} />
              <Route path="/hotels/:id" component={UpdateHotels} />
              <Route path="/HotelDashboard" component={HotelDashboardComponent} />
              <Route path="/contactUs" component={ContactUsComponent} />
              
            </Switch>
            
          </div>
        </div>

      </Router>
    );
  }
}

export default App;
