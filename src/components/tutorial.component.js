import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class Tutorial extends Component {
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
    this.getTutorial = this.getTutorial.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
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
    this.getTutorial(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description
      }
    }));
  }

  onChangeCity(e) {
    const city = e.target.value;

    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        city: city
      }
    }));
  }

  onChangeCoordinates(e) {
    const coordinates = e.target.value;

    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        coordinates: coordinates
      }
    }));
  }

  onChangeArea(e) {
    const area = e.target.value;

    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        area: area
      }
    }));
  }

  onChangeAltitude(e) {
    const altitude = e.target.value;

    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        altitude: altitude
      }
    }));
  }

  onChangeTemperature(e) {
    const temperature = e.target.value;

    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        temperature: temperature
      }
    }));
  }

  onChangeContact(e) {
    const contact = e.target.value;

    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        contact: contact
      }
    }));
  }

  onChangeEntranceFees(e) {
    const entranceFees = e.target.value;

    this.setState(prevState => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        entranceFees: entranceFees
      }
    }));
  }


  getTutorial(id) {
    TutorialDataService.get(id)
      .then(response => {
        this.setState({
          currentTutorial: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentTutorial.id,
      title: this.state.currentTutorial.title,
      description: this.state.currentTutorial.description,
      published: status
    };

    TutorialDataService.update(this.state.currentTutorial.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateTutorial() {
    TutorialDataService.update(
      this.state.currentTutorial.id,
      this.state.currentTutorial
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The tutorial was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteTutorial() {    
    TutorialDataService.delete(this.state.currentTutorial.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/tutorials')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
        {currentTutorial ? (
          <div className="edit-form">
            <h4>Tutorial</h4>
            <form>

              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.title}
                  onChange={this.onChangeTitle}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">City</label>
                <input
                    type="text"
                    className="form-control"
                    id="city"
                    value={currentTutorial.city}
                    onChange={this.onChangeCity}
                />
              </div>

              <div className="form-group">
                <label htmlFor="coordinates">Coordinates</label>
                <input
                    type="text"
                    className="form-control"
                    id="coordinates"
                    value={currentTutorial.coordinates}
                    onChange={this.onChangeCoordinates}
                />
              </div>

              <div className="form-group">
                <label htmlFor="area">Area</label>
                <input
                    type="text"
                    className="form-control"
                    id="area"
                    value={currentTutorial.area}
                    onChange={this.onChangeArea}
                />
              </div>

              <div className="form-group">
                <label htmlFor="altitude">Altitude</label>
                <input
                    type="text"
                    className="form-control"
                    id="altitude"
                    value={currentTutorial.altitude}
                    onChange={this.onChangeAltitude}
                />
              </div>

              <div className="form-group">
                <label htmlFor="temperature">Temperature</label>
                <input
                    type="text"
                    className="form-control"
                    id="temperature"
                    value={currentTutorial.temperature}
                    onChange={this.onChangeTemperature}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact">Contact</label>
                <input
                    type="text"
                    className="form-control"
                    id="contact"
                    value={currentTutorial.contact}
                    onChange={this.onChangeContact}
                />
              </div>

              <div className="form-group">
                <label htmlFor="entranceFees">Entrance Fees</label>
                <input
                    type="text"
                    className="form-control"
                    id="entranceFees"
                    value={currentTutorial.entranceFees}
                    onChange={this.onChangeEntranceFees}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentTutorial.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}>
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}
