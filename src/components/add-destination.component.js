import React, { Component } from "react";
import {Tooltip} from "@material-ui/core";

export default class AddDestinationComponent extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeCoordinates = this.onChangeCoordinates.bind(this);
    this.onChangeArea = this.onChangeArea.bind(this);
    this.onChangeAltitude = this.onChangeAltitude.bind(this);
    this.onChangeTemperature = this.onChangeTemperature.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeEntranceFees = this.onChangeEntranceFees.bind(this);
    this.onChangeVisaRequirement = this.onChangeVisaRequirement.bind(this);
    this.saveDestination = this.saveDestination.bind(this);
    this.newDestination = this.newDestination.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      city : "",
      coordinates : "",
      area : "",
      altitude : "",
      temperature : "",
      contact : "",
      entranceFees : "",
      visaRequirement : "",
      published: false,
      submitted: false
    };

  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value
    });
  }

  onChangeCoordinates(e) {
    this.setState({
      coordinates: e.target.value
    });
  }

  onChangeArea(e) {
    this.setState({
      area: e.target.value
    });
  }

  onChangeAltitude(e) {
    this.setState({
      altitude: e.target.value
    });
  }

  onChangeTemperature(e) {
    this.setState({
      temperature: e.target.value
    });
  }

  onChangeContact(e) {
    this.setState({
      contact: e.target.value
    });
  }

  onChangeEntranceFees(e) {
    this.setState({
      entranceFees: e.target.value
    });
  }

  onChangeVisaRequirement(e) {
    this.setState({
      visaRequirement: e.target.value
    });
  }

  saveDestination() {
    var data = {
      title: this.state.title,
      description: this.state.description,
      city: this.state.city,
      coordinates: this.state.coordinates,
      area: this.state.area,
      altitude: this.state.altitude,
      temperature: this.state.temperature,
      contact: this.state.contact,
      entranceFees: this.state.entranceFees,
      visaRequirement: this.state.visaRequirement
    };

    DestinationDataService.create(data)
        .then(response => {
          this.setState({
            id: response.data.id,
            title: response.data.title,
            description: response.data.description,
            city: response.data.city,
            coordinates: response.data.coordinates,
            area: response.data.area,
            altitude: response.data.altitude,
            temperature: response.data.temperature,
            contact: response.data.contact,
            entranceFees: response.data.entranceFees,
            visaRequirement: response.data.visaRequirement,
            published: response.data.published,
            submitted: true
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
  }

  newDestination() {
    this.setState({
      id: null,
      title: "",
      description: "",
      city : "",
      coordinates : "",
      area : "",
      altitude : "",
      temperature : "",
      contact : "",
      entranceFees : "",
      visaRequirement : "",

      published: false,

      submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
              <div>
                <h4 className="alertMsg">Destination Added Successfully!</h4>
                <button className="submitBtnYellow" onClick={this.newDestination}>
                  Add another Destination
                </button>
              </div>
          ) : (
              <div>

                <h2 className="adminHeading">Add Destinations</h2>

                <nav >
                  <ol style={{backgroundColor: "white", marginLeft: "-15px"}} className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Admin</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Destinations</li>
                  </ol>
                </nav> <br/>

                <div className="form-group">
                  <Tooltip title="The name of the destination." placement="right-start">
                    <label htmlFor="title">Destination Name</label>
                  </Tooltip>
                  <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Horton Plains National Park"
                      required
                      value={this.state.title}
                      onChange={this.onChangeTitle}
                      name="title"
                  />
                </div>

                <div className="form-group">
                  <Tooltip title="A brief description about the destination" placement="right-start">
                    <label htmlFor="description">Description</label>
                  </Tooltip>
                  <textarea
                      type="text"
                      className="form-control"
                      id="description"
                      placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                      required
                      rows="3"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      name="description"
                  />
                </div>

                <div className="form-group">
                  <Tooltip title="The town in which the destination is located" placement="right-start">
                    <label htmlFor="city">City</label>
                  </Tooltip>
                  <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="Nuwara Eliya"
                      required
                      value={this.state.city}
                      onChange={this.onChangeCity}
                      name="city"
                  />
                </div>

                <div className="form-group">
                  <Tooltip title="The group of numbers used to indicate the position of the destination" placement="right-start">
                    <label htmlFor="coordinates">Coordinates</label>
                  </Tooltip>
                  <input
                      type="text"
                      className="form-control"
                      id="coordinates"
                      placeholder="6°48′N 80°48′E"
                      required
                      value={this.state.coordinates}
                      onChange={this.onChangeCoordinates}
                      name="coordinates"
                  />
                </div>

                <div className="form-group">
                  <Tooltip title="The extent/measurement of the piece of land in which the destination is spread out" placement="right-start">
                    <label htmlFor="area">Area (ha)</label>
                  </Tooltip>
                  <input
                      type="number"
                      className="form-control"
                      id="area"
                      placeholder="3169"
                      required
                      value={this.state.area}
                      onChange={this.onChangeArea}
                      name="area"
                  />
                </div>

                <div className="form-group">
                  <Tooltip title="The height of the destination in relation to sea level or ground level" placement="right-start">
                    <label htmlFor="altitude">Altitude</label>
                  </Tooltip>
                  <input
                      type="text"
                      className="form-control"
                      id="altitude"
                      required
                      placeholder="2,100 meters above sea level"
                      value={this.state.altitude}
                      onChange={this.onChangeAltitude}
                      name="altitude"
                  />
                </div>

                <div className="form-group">
                  <Tooltip title="The average temperature of the air as indicated by a properly exposed thermometer during a given time period" placement="right-start">
                    <label htmlFor="temperature">Mean Temperature</label>
                  </Tooltip>
                  <input
                      type="text"
                      className="form-control"
                      id="temperature"
                      required
                      placeholder="13 °C (55 °F)"
                      value={this.state.temperature}
                      onChange={this.onChangeTemperature}
                      name="temperature"
                  />
                </div>

                <div className="form-group">
                  <Tooltip title="The number assigned to a telephone line that is used to contact the destination authorities" placement="right-start">
                    <label htmlFor="contact">Contact Number</label>
                  </Tooltip>
                  <input
                      type="text"
                      className="form-control"
                      id="contact"
                      required
                      placeholder="+94 112 278 549"
                      value={this.state.contact}
                      onChange={this.onChangeContact}
                      name="contact"
                  />
                </div>

                <div className="form-group">
                  <Tooltip title="The sum of money which has to be paid before you enter the destination" placement="right-start">
                    <label htmlFor="entranceFees">Entrance Fee</label>
                  </Tooltip>
                  <input
                      type="text"
                      className="form-control"
                      id="entranceFees"
                      required
                      placeholder="LKR 550"
                      value={this.state.entranceFees}
                      onChange={this.onChangeEntranceFees}
                      name="entranceFees"
                  />
                </div>

                <div className="form-group">
                  <Tooltip title="The requirement of the card carrying the holder's photograph, name, date of birth, etc., serving as official proof of their identity" placement="right-start">
                    <label htmlFor="visaRequirement">Identity Card / Visa Requirement</label>
                  </Tooltip>
                  <div className="radio inline">
                    <input
                        type="radio"
                        id="radio-2"
                        name="visaRequirement"
                        value="Required" />
                    <label htmlFor="radio-2" className="radio-label">Required</label>
                  </div>
                  <div className="radio inline">
                    <input
                        type="radio"
                        id="radio-3"
                        name="visaRequirement"
                        value="Not Required" />
                    <label htmlFor="radio-3" className="radio-label">Not Required</label>
                  </div>
                </div>

                <Tooltip title="The destination details entered above will be saved in the database after this button is clicked" placement="right-start">
                  <button onClick={this.saveDestination} className="submitBtn">
                    Add Destination
                  </button>
                </Tooltip>
              </div>
          )}
        </div>
    );
  }
}
