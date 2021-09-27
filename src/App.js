import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//Main System related file imports
import Footer from "./components/MainComponents/Footer";
import Home from "./components/MainComponents/home";
import AdminDashboard from "./components/MainComponents/AdminDashboard";

// Hotels
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

//Destinations
import Dashboard from "./components/Destinations/dashboard";
import DestinationDashboardComponent from "./components/Destinations/destination-dashboard.component";
import DestinationsListComponent from "./components/Destinations/destinations-list.component";
import AddDestinationComponent from "./components/Destinations/add-destination.component";
import DestinationsDetailsComponent from "./components/Destinations/destination-details.component";
import ContactUsComponent from "./components/Destinations/contact-us.component";
import UpdateDestinationComponent from "./components/Destinations/update-destination.component";
import DestinationCardViewComponent from "./components/Destinations/destination-cardview.component";
import IndividualDestinationDetailsComponent from "./components/Destinations/individual-destination-details.component";
import GenerateDestinationReportComponent from "./components/Destinations/generate-destination-report.component";

//Tourist Guides
import TouristGuideDashboardComponent from "./components/TouristGuides/touristguide-dashboard.component";
import TouristGuideListComponent from "./components/TouristGuides/tourist-guides-list.component";
import TouristGuideCardViewComponent from "./components/TouristGuides/touristguide-cardview.component";
import AddTouristGuideComponent from "./components/TouristGuides/add-touristguide.component";
import TouristGuideDetailView from "./components/TouristGuides/touristguide-details.component";
import IndividualTouristGuideDetailsComponent from "./components/TouristGuides/touristguide-individual-details.component";
import UpdateTouristGuideComponent from "./components/TouristGuides/update-touristguide.component";

//Vehicles
import VehicleDashboardComponent from "./components/Vehicles/vehicle-dashboard.component";
import VehicleListComponent from "./components/Vehicles/vehiclelist.component";
import VehicleCardViewComponent from "./components/Vehicles/vehicle-cardview.component";
import AddVehicleComponent from "./components/Vehicles/vehicle-add.component";
import VehicleDetailsComponent from "./components/Vehicles/vehicle-details.component";
import TouristIndividualVehicleDetailsComponent from "./components/Vehicles/vehicle-individual-details.component";
import UpdateVehicleComponent from "./components/Vehicles/vehicle-update.component";

//Tourists
import CreateExpenses from './components/Expenses/CreateExpenses';
import Expenses from './components/Expenses/ViewExpenses';
import Report from './components/Expenses/Report';
import CreateTourists from './components/Tourists/CreateTourists';
import Login from './components/Login/Login';
import ViewTourists from './components/Tourists/ViewTouristsProfile';
import UpdateTourists from './components/Tourists/UpdateProfile';
import AboutUs from './components/MainComponents/AboutUs';
import UpdateExpenses from './components/Expenses/UpdateExpenses';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/AdminDashboard" className="navbar-brand">
              Travel Agency
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/tourists"} className="nav-link">
                  Destinations
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/hotels"} className="nav-link">
                  Hotels
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/touristsGuide"} className="nav-link">
                  Tourist Guides
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/vehicleCardView"} className="nav-link">
                  Vehicles
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/contactUs"} className="nav-link">
                  Contact Us
                </Link>
              </li>

              <li style={{marginLeft : "690px"}} className="nav-item">
                <Link to={"/create-tourist"} className="nav-link">
                  Sign Up
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Sign In
                </Link>
              </li>
            </div>
          </nav>


          <div className="container mt-3">
            <Switch>

              {/*Login & Tourists*/}
              <Route path="/create-tourist" component={CreateTourists}/>
              <Route path="/login" component={Login}/>
              <Route path="/Profile" component={ViewTourists}/>

              <Route path="/UpdateProfile" component={UpdateTourists}/>
              <Route path="/expenses" component={Expenses}/>
              <Route path="/create-expenses" component={CreateExpenses}/>
              <Route path="/update-expenses" component={UpdateExpenses}/>
              <Route path="/report" component={Report}/>

              <Route path="/AboutUs" component={AboutUs}/>

              {/*Vehicles*/}
              <Route exact path={"/vehicleDashboard"} component={VehicleDashboardComponent} />
              <Route exact path={"/vehiclesList"} component={VehicleListComponent} />
              <Route exact path={"/vehicleCardView"} component={VehicleCardViewComponent} />
              <Route exact path={"/addVehicle"} component={AddVehicleComponent} />
              <Route exact path={"/vehicleDetailView"} component={VehicleDetailsComponent} />
              <Route exact path={"/touristindividualvehicledetails/:id"} component={TouristIndividualVehicleDetailsComponent} />
              <Route exact path={"/updateVehicle/:id"} component={UpdateVehicleComponent} />

              {/*TouristGuides*/}
              <Route path="/touristguideDashboard" component={TouristGuideDashboardComponent} />
              <Route exact path={"/touristguideList"} component={TouristGuideListComponent} />
              <Route path="/touristsGuide" component={TouristGuideCardViewComponent} />
              <Route path="/add" component={AddTouristGuideComponent} />
              <Route exact path="/adminindividualDestinationDetails" component={TouristGuideDetailView} />
              <Route exact path="/touristindividualguidedetails/:id" component={IndividualTouristGuideDetailsComponent} />
              <Route path="/touristGuides/:id" component={UpdateTouristGuideComponent} />

              {/*Destinations*/}
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/destinationDashboard" component={DestinationDashboardComponent} />
              <Route exact path="/destinationList" component={DestinationsListComponent} />
              <Route exact path="/individualDestinationDetails" component={DestinationsDetailsComponent} />
              <Route exact path="/addDestination" component={AddDestinationComponent} />
              <Route path="/contactUs" component={ContactUsComponent} />
              <Route path="/destinations/:id" component={UpdateDestinationComponent} />
              <Route path="/tourists" component={DestinationCardViewComponent} />
              <Route path="/individualdestinationdetailspage/:id" component={IndividualDestinationDetailsComponent} />
              <Route path="/destinationReport" component={GenerateDestinationReportComponent} />

              {/*Hotels*/}
              <Route path="/AdminDashboard" component={AdminDashboard}/>
              <Route path="/home" component={Home}/>
              <Route path="/image" component={Gallery}/>
              <Route path="/i/:id" component={IndividualHotelDetailsComponent}/>
              <Route exact path="/hotels" component={HotelMain} />
              <Route path="/hotelsV" component={HotelCardViewComponent}/>
              <Route path="/HotelDashbaord/Report" component={HotelReport}/>
              <Route path="/Galadari" component={Galadari} />
              <Route exact path="/individualHotelsDetails" component={HotelsDetails} />
              <Route exact path={"/hotelList"} component={HotelsList} />
              <Route exact path="/addHotels" component={AddHotel} />
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
