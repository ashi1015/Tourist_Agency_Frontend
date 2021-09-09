import React, { Component } from "react";
import TouristGuideDataService from "../services/touristguide.service";
import {Tooltip} from "@material-ui/core";

export default class UpdateTouristguideComponent extends Component {
  constructor(props) {
    super(props);
    this.onChangeFullname = this.onChangeFullname.bind(this);
    this.onChangeNic = this.onChangeNic.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeRace = this.onChangeRace.bind(this);
    this.onChangeLanguages = this.onChangeLanguages.bind(this);
    this.onChangeSkills = this.onChangeSkills.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.getDestination = this.getDestination.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateDestination = this.updateDestination.bind(this);
    this.deleteDestination = this.deleteDestination.bind(this);

    this.state = {
      currentDestination: {
        id: null,
        fullname: "",
        nic: "",
        email : "",
        phone : "",
        gender : "",
        race : "",
        languages : "",
        skills : "",
        address : "",
        availability : "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getDestination(this.props.match.params.id);
  }

  onChangeFullname(e) {
    const fullname = e.target.value;

    this.setState(function(prevState) {
      return {
        currentDestination: {
          ...prevState.currentDestination,
          fullname: fullname
        }
      };
    });
  }

  onChangeNic(e) {
    const nic = e.target.value;
    
    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        nic: nic
      }
    }));
  }

  onChangeEmail(e) {
    const email = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        email: email
      }
    }));
  }

  onChangePhone(e) {
    const phone = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        phone: phone
      }
    }));
  }

  onChangeGender(e) {
    const gender = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        gender: gender
      }
    }));
  }

  onChangeRace(e) {
    const race = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        race: race
      }
    }));
  }

  onChangeLanguages(e) {
    const languages = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        languages: languages
      }
    }));
  }

  onChangeSkills(e) {
    const skills = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        skills: skills
      }
    }));
  }

  onChangeAddress(e) {
    const address = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        address: address
      }
    }));
  }


  getDestination(id) {
    TouristGuideDataService.get(id)
      .then(response => {
        this.setState({
          currentDestination: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentDestination.id,
      fullname: this.state.currentDestination.fullname,
      nic: this.state.currentDestination.nic,
      published: status
    };

    TouristGuideDataService.update(this.state.currentDestination.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentDestination: {
            ...prevState.currentDestination,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateDestination() {
    TouristGuideDataService.update(
      this.state.currentDestination.id,
      this.state.currentDestination
    )
      .then(response => {
        console.log(response.data);
        this.props.history.push('/touristguideList')
        this.setState({
          message: "The touristguide was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
    alert("Destination Updated Successfully!");

  }

  deleteDestination() {
    TouristGuideDataService.delete(this.state.currentDestination.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/touristguideList')
      })
      .catch(e => {
        console.log(e);
      });
    alert("Destination Deleted Successfully!");

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
                <Tooltip fullname="The name of the touristguide." placement="right-start">
                <label htmlFor="fullname">Destination Name</label>
                </Tooltip>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  value={currentDestination.fullname}
                  onChange={this.onChangeFullname}
                />
              </div>

              <div className="form-group">
                <Tooltip fullname="A brief nic about the touristguide" placement="right-start">
                <label htmlFor="nic">Nic</label>
                </Tooltip>
                <input
                  type="text"
                  className="form-control"
                  id="nic"
                  value={currentDestination.nic}
                  onChange={this.onChangeNic}
                />
              </div>

              <div className="form-group">
                <Tooltip fullname="The town in which the touristguide is located" placement="right-start">
                <label htmlFor="nic">Email</label>
                </Tooltip>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={currentDestination.email}
                    onChange={this.onChangeEmail}
                />
              </div>

              <div className="form-group">
                <Tooltip fullname="The group of numbers used to indicate the position of the touristguide" placement="right-start">
                <label htmlFor="phone">Phone</label>
                </Tooltip>
                <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={currentDestination.phone}
                    onChange={this.onChangePhone}
                />
              </div>

              <div className="form-group">
                <Tooltip fullname="The extent/measurement of the piece of land in which the touristguide is spread out" placement="right-start">
                <label htmlFor="gender">Gender (ha)</label>
                </Tooltip>
                <input
                    type="text"
                    className="form-control"
                    id="gender"
                    value={currentDestination.gender}
                    onChange={this.onChangeGender}
                />
              </div>

              <div className="form-group">
                <Tooltip fullname="The height of the touristguide in relation to sea level or ground level" placement="right-start">
                <label htmlFor="race">Race</label>
                </Tooltip>
                <input
                    type="text"
                    className="form-control"
                    id="race"
                    value={currentDestination.race}
                    onChange={this.onChangeRace}
                />
              </div>

              <div className="form-group">
                <Tooltip fullname="The average languages of the air as indicated by a properly exposed thermometer during a given time period" placement="right-start">
                <label htmlFor="languages">Mean Languages</label>
                </Tooltip>
                <input
                    type="text"
                    className="form-control"
                    id="languages"
                    value={currentDestination.languages}
                    onChange={this.onChangeLanguages}
                />
              </div>

              <div className="form-group">
                <Tooltip fullname="The number assigned to a telephone line that is used to skills the touristguide authorities" placement="right-start">
                <label htmlFor="skills">Skills</label>
                </Tooltip>
                <input
                    type="text"
                    className="form-control"
                    id="skills"
                    value={currentDestination.skills}
                    onChange={this.onChangeSkills}
                />
              </div>

              <div className="form-group">
                <Tooltip fullname="The sum of money which has to be paid before you enter the touristguide" placement="right-start">
                <label htmlFor="address">Entrance Fees</label>
                </Tooltip>
                <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={currentDestination.address}
                    onChange={this.onChangeAddress}
                />
              </div>

            </form>

            <Tooltip fullname="The record of the touristguide shown above will be deleted from the database after this button is clicked" placement="right-start">
            <button
              className="submitBtnRed"
              onClick={this.deleteDestination}>
              Delete Destination
            </button>
            </Tooltip>

            <Tooltip fullname="The touristguide details changed above will be updated in the database after this button is clicked" placement="right-start">
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
