import React, { Component } from "react";
import TouristGuideDataService from "../services/touristguide.service";
import {Tooltip} from "@material-ui/core";

export default class AddTouristguideComponent extends Component {
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
    this.onChangeAvailibility = this.onChangeAvailibility.bind(this);
    this.saveTouristGuide = this.saveTouristGuide.bind(this);
    this.newTouristGuide = this.newTouristGuide.bind(this);

    this.state = {
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
      published: false,
      submitted: false
    };
  }

  onChangeFullname(e) {
    this.setState({
      fullname: e.target.value
    });
  }

  onChangeNic(e) {
    this.setState({
      nic: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }

  onChangeRace(e) {
    this.setState({
      race: e.target.value
    });
  }

  onChangeLanguages(e) {
    this.setState({
      languages: e.target.value
    });
  }

  onChangeSkills(e) {
    this.setState({
      skills: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  onChangeAvailibility(e) {
    this.setState({
      availability: e.target.value
    });
  }

  saveTouristGuide() {
    var data = {
      fullname: this.state.fullname,
      nic: this.state.nic,
      email: this.state.email,
      phone: this.state.phone,
      gender: this.state.gender,
      race: this.state.race,
      languages: this.state.languages,
      skills: this.state.skills,
      address: this.state.address,
      availability: this.state.availability
    };

    TouristGuideDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          fullname: response.data.fullname,
          nic: response.data.nic,
          email: response.data.email,
          phone: response.data.phone,
          gender: response.data.gender,
          race: response.data.race,
          languages: response.data.languages,
          skills: response.data.skills,
          address: response.data.address,
          availability: response.data.availability,
          published: response.data.published,
          submitted: true
        });
        console.log(response.data);
        this.props.history.push('/touristguideList')

      })
      .catch(e => {
        console.log(e);
      });
    alert("Tourist Guide Added Successfully!");

  }

  newTouristGuide() {
    this.setState({
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
            <button className="submitBtnYellow" onClick={this.newTouristGuide}>
              Add another Destination
            </button>
          </div>
        ) : (
          <div>

            <h2 className="adminHeading">Add Tourist Guide</h2>

            <nav >
            <ol style={{backgroundColor: "white", marginLeft: "-15px"}} className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Admin</a></li>
            <li className="breadcrumb-item active" aria-current="page">Add Tourist Guide</li>
            </ol>
            </nav> <br/>

            <div className="form-group">
              <Tooltip fullname="The name of the touristguide." placement="right-start">
              <label htmlFor="fullname">Full Name</label>
              </Tooltip>
              <input
                type="text"
                className="form-control"
                id="fullname"
                placeholder="Horton Plains National Park"
                required
                value={this.state.fullname}
                onChange={this.onChangeFullname}
                name="fullname"
              />
            </div>

            <div className="form-group">
              <Tooltip fullname="A brief nic about the touristguide" placement="right-start">
              <label htmlFor="nic">NIC No</label>
              </Tooltip>
              <input
                type="text"
                className="form-control"
                id="nic"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                required
                rows="3"
                value={this.state.nic}
                onChange={this.onChangeNic}
                name="nic"
              />
            </div>

            <div className="form-group">
              <Tooltip fullname="The town in which the touristguide is located" placement="right-start">
              <label htmlFor="email">Email</label>
              </Tooltip>
              <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Nuwara Eliya"
                  required
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  name="email"
              />
            </div>

            <div className="form-group">
              <Tooltip fullname="The group of numbers used to indicate the position of the touristguide" placement="right-start">
              <label htmlFor="phone">Phone Number</label>
              </Tooltip>
              <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="6°48′N 80°48′E"
                  required
                  value={this.state.phone}
                  onChange={this.onChangePhone}
                  name="phone"
              />
            </div>

            <div className="form-group">
              <Tooltip fullname="The extent/measurement of the piece of land in which the touristguide is spread out" placement="right-start">
                <label htmlFor="gender">Gender</label>
              </Tooltip>
              <input
                  type="number"
                  className="form-control"
                  id="gender"
                  placeholder="3169"
                  required
                  value={this.state.gender}
                  onChange={this.onChangeGender}
                  name="gender"
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
                  required
                  placeholder="2,100 meters above sea level"
                  value={this.state.race}
                  onChange={this.onChangeRace}
                  name="race"
              />
            </div>

            <div className="form-group">
              <Tooltip fullname="The average languages of the air as indicated by a properly exposed thermometer during a given time period" placement="right-start">
              <label htmlFor="languages">Languages</label>
              </Tooltip>
              <input
                  type="text"
                  className="form-control"
                  id="languages"
                  required
                  placeholder="13 °C (55 °F)"
                  value={this.state.languages}
                  onChange={this.onChangeLanguages}
                  name="languages"
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
                  required
                  placeholder="+94 112 278 549"
                  value={this.state.skills}
                  onChange={this.onChangeSkills}
                  name="skills"
              />
            </div>

            <div className="form-group">
              <Tooltip fullname="The sum of money which has to be paid before you enter the touristguide" placement="right-start">
              <label htmlFor="address">Address</label>
              </Tooltip>
              <input
                  type="text"
                  className="form-control"
                  id="address"
                  required
                  placeholder="LKR 550"
                  value={this.state.address}
                  onChange={this.onChangeAddress}
                  name="address"
              />
            </div>

            <div className="form-group">
              <Tooltip fullname="The sum of money which has to be paid before you enter the touristguide" placement="right-start">
                <label htmlFor="address">Availability</label>
              </Tooltip>
              <input
                  type="text"
                  className="form-control"
                  id="availability"
                  required
                  placeholder="LKR 550"
                  value={this.state.availability}
                  onChange={this.onChangeAvailibility}
                  name="availability"
              />
            </div>


            <Tooltip fullname="The tourist guide details entered above will be saved in the database after this button is clicked" placement="right-start">
            <button onClick={this.saveTouristGuide} className="submitBtn">
              Add Tourist Guide
            </button>
            </Tooltip>
          </div>
        )}
      </div>
    );
  }
}
