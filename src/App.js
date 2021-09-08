import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from './components/navBar/navBar';

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import TutorialsDetails from "./components/tutorials-details.component";
import TouristView from "./components/tourist_view.component";
import DestinationDashboardComponent from "./components/destination-dashboard.component";
import ContactUsComponent from "./components/contact-us.component";
import HotelMain from './components/Hotels/HotelMainPage';
import test from './components/Hotels/test';
import Galadari from "./components/Individual Hotels/Hotel.Galadari";
import home from './components/Home/home';

----IT19177106----
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateExpenses from './components/Expenses/CreateExpenses';
import CreateTourists from './components/Tourists/CreateTourists';
import Login from './components/Login/Login';
import ViewTourists from './components/Tourists/ViewTouristsProfile';
import Expenses from './components/Expenses/ViewExpenses';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/tutorials" className="navbar-brand">
              Travel Agency
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/touristList"} className="nav-link">
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
            <section>
            <Switch>
            <Route path="/Galadari" component={Galadari} />
              <Route exact path="/hotels" component={HotelMain} />
              <Route exact path="/individualDestinationDetails" component={TutorialsDetails} />
              <Route exact path={"/touristList"} component={TutorialsList} />
              <Route exact path="/add" component={AddTutorial} />
              <Route path="/tutorials/:id" component={Tutorial} />
              <Route path="/tourists" component={TouristView} />
              <Route path="/HotelDashboard" component={DestinationDashboardComponent} />
              <Route path="/contactUs" component={ContactUsComponent} />
              <Route path="/" component={home} />
              <Route path="/t" component={test} />
               
              <Route path="/create-tourist" component={CreateTourists}/>
              <Route path="/create-expenses" component={CreateExpenses}/>
              <Route path="/login" component={Login}/>
              <Route path="/Profile" component={ViewTourists}/>
              <Route path="/expenses" component={Expenses}/>
                
                
            </Switch>
           </section>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
