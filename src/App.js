import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Main System related file imports
import ContactUsComponent from "./components/MainComponents/contact-us.component";
import Footer from "./components/MainComponents/Footer";
import Home from "./components/MainComponents/home";
import AdminDashboard from "./components/MainComponents/AdminDashboard";

// Hotel related file imports
import AddHotel from "./components/Hotels/add-hotels.component";
import UpdateHotels from "./components/Hotels/Update_hotel.component";
import HotelsList from "./components/Hotels/hotels-list.component";
import HotelsDetails from "./components/Hotels/Hotel-details.component";
import HotelDashboardComponent from "./components/Hotels/hotel-dashboard.component";
import Galadari from "./components/Individual Hotels/Hotel.Galadari";
import HotelReport from "./components/Hotels/HotelReport"
import HotelCardViewComponent from "./components/Hotels/Hotel_ComponentView";
import IndividualHotelDetailsComponent from "./components/Individual Hotels/individual_Hotels";
import HotelMain from './components/Hotels/HotelMainPage';
import Gallery from './components/Individual Hotels/Gallery'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/dashboard" className="navbar-brand">
              Travel Agency
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/hotelList"} className="nav-link">
                  Destinations
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
                <Link to={"/HotelDashboard"} className="nav-link">
                  Tourist Guides
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/HotelDashboard"} className="nav-link">
                  Vehicles
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
              <Route path="/dashboard" component={AdminDashboard}/>
              <Route path="/home" component={Home}/>
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
        <Footer/>
      </Router>
    );
  }
}

export default App;
