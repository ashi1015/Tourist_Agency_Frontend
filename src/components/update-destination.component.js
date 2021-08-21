import React, { Component } from "react";
import {Tooltip} from "@material-ui/core";

export default class UpdateDestinationComponent extends Component {
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
    this.getDestination = this.getDestination.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateDestination = this.updateDestination.bind(this);
    this.deleteDestination = this.deleteDestination.bind(this);

    this.state = {
      currentDestination: {
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
        published: false
      },
      message: ""
    };

  }

  componentDidMount() {
    this.getDestination(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentDestination: {
          ...prevState.currentDestination,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        description: description
      }
    }));
  }

  onChangeCity(e) {
    const city = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        city: city
      }
    }));
  }

  onChangeCoordinates(e) {
    const coordinates = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        coordinates: coordinates
      }
    }));
  }

  onChangeArea(e) {
    const area = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        area: area
      }
    }));
  }

  onChangeAltitude(e) {
    const altitude = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        altitude: altitude
      }
    }));
  }

  onChangeTemperature(e) {
    const temperature = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        temperature: temperature
      }
    }));
  }

  onChangeContact(e) {
    const contact = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        contact: contact
      }
    }));
  }

  onChangeEntranceFees(e) {
    const entranceFees = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        entranceFees: entranceFees
      }
    }));
  }


  getDestination(id) {
    {/* ********************************************* */}
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentDestination.id,
      title: this.state.currentDestination.title,
      description: this.state.currentDestination.description,
      published: status
    };

    {/* ********************************************* */}

  }

  updateDestination() {

    {/* ********************************************* */}

  }

  deleteDestination() {
    {/* ********************************************* */}
  }

  render() {

    const { currentDestination } = this.state;

    return (
      <div>
        {currentDestination ? (
            <div className="edit-form">

              <h2 className="adminHeading">Update Destination</h2>

              <nav >
                <ol style={{backgroundColor: "white", marginLeft: "-15px"}} className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Admin</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Update Destination</li>
                </ol>
              </nav> <br/>

              <form>

                <div className="form-group">
                  <Tooltip title="The name of the destination." placement="right-start">
                    <label htmlFor="title">Destination Name</label>
                  </Tooltip>
                  <input
                      type="text"
                      className="form-control"
                      id="title"
                      value={currentDestination.title}
                      onChange={this.onChangeTitle}
                  />
                </div>

                <div className="form-group">
                  <Tooltip title="A brief description about the destination" placement="right-start">
                    <label htmlFor="description">Description</label>
                  </Tooltip>
                  <input
                      type="text"
                      className="form-control"
                      id="description"
                      value={currentDestination.description}
                      onChange={this.onChangeDescription}
                  />
                </div>

                <div className="form-group">
                  <Tooltip title="The town in which the destination is located" placement="right-start">
                    <label htmlFor="description">City</label>
                  </Tooltip>
                  <input
                      type="text"
                      className="form-control"
                      id="city"
                      value={currentDestination.city}
                      onChange={this.onChangeCity}
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
                      value={currentDestination.coordinates}
                      onChange={this.onChangeCoordinates}
                  />
                </div>

                <div className="form-group">
                  <Tooltip title="The extent/measurement of the piece of land in which the destination is spread out" placement="right-start">
                    <label htmlFor="area">Area (ha)</label>
                  </Tooltip>
                  <input
                      type="text"
                      className="form-control"
                      id="area"
                      value={currentDestination.area}
                      onChange={this.onChangeArea}
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
                      value={currentDestination.altitude}
                      onChange={this.onChangeAltitude}
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
                      value={currentDestination.temperature}
                      onChange={this.onChangeTemperature}
                  />
                </div>

                <div className="form-group">
                  <Tooltip title="The number assigned to a telephone line that is used to contact the destination authorities" placement="right-start">
                    <label htmlFor="contact">Contact</label>
                  </Tooltip>
                  <input
                      type="text"
                      className="form-control"
                      id="contact"
                      value={currentDestination.contact}
                      onChange={this.onChangeContact}
                  />
                </div>

                <div className="form-group">
                  <Tooltip title="The sum of money which has to be paid before you enter the destination" placement="right-start">
                    <label htmlFor="entranceFees">Entrance Fees</label>
                  </Tooltip>
                  <input
                      type="text"
                      className="form-control"
                      id="entranceFees"
                      value={currentDestination.entranceFees}
                      onChange={this.onChangeEntranceFees}
                  />
                </div>

              </form>

              <Tooltip title="The record of the destination shown above will be deleted from the database after this button is clicked" placement="right-start">
                <button
                    className="submitBtnRed"
                    onClick={this.deleteDestination}>
                  Delete Destination
                </button>
              </Tooltip>

              <Tooltip title="The destination details changed above will be updated in the database after this button is clicked" placement="right-start">
                <button
                    type="submit"
                    className="submitBtnGreen"
                    onClick={this.updateDestination}>
                  Update Destination
                </button>
              </Tooltip>
              <p>{this.state.message}</p>
            </div>
        ) : (
            <div>
              <br />
              <p>Please click on a Destination...</p>
            </div>
        )}
      </div>
    );
  }
}
