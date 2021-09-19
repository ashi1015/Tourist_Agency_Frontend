import React, { Component } from "react";
import HotelDataService from "../services/hotel.service";
import Select from 'react-select'

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeDOR = this.onChangeDOR.bind(this);
    this.onChangeRegFee = this.onChangeRegFee.bind(this);
    this.onChangePriceRange = this.onChangePriceRange.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAmenity1 = this.onChangeAmenity1.bind(this);
    this.onChangeAmenity2 = this.onChangeAmenity2.bind(this);
    this.onChangeAmenity3 = this.onChangeAmenity3.bind(this);
    this.onChangeFeature1 = this.onChangeFeature1.bind(this);
    this.onChangeFeature2 = this.onChangeFeature2.bind(this);
    this.onChangeFeature3 = this.onChangeFeature3.bind(this);
    this.onChangeCuisine1 = this.onChangeCuisine1.bind(this);
    this.onChangeCuisine2 = this.onChangeCuisine2.bind(this);
    this.onChangeCuisine3 = this.onChangeCuisine3.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      hotelName: "",
      description: "",
      address : "",
      date_of_registration : "",
      registrationFee : "",
      priceRange : "",
      contactNo : "",
      email : "",
      amenity1: "",
      amenity2: "",
      amenity3: "",
      feature1: "",
      feature2: "",
      feature3: "",
      cuisine1: "",
      cuisine2: "",
      cuisine3: "",
      published: false,
      submitted: false,

    
    };
  }

  onChangeTitle(e) {
    this.setState({
      hotelName: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  onChangeDOR(e) {
    this.setState({
      date_of_registration: e.target.value
    });
  }

  onChangeRegFee(e) {
    this.setState({
      registrationFee: e.target.value
    });
  }

  onChangePriceRange(e) {
    this.setState({
      priceRange: e.target.value
    });
  }

  onChangeContact(e) {
    this.setState({
      contactNo: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeAmenity1(e) {
    this.setState({
      amenity1: e.target.value
    });
  }
  onChangeAmenity2(e) {
    this.setState({
      amenity2: e.target.value
    });
  }
  onChangeAmenity3(e) {
    this.setState({
      amenity3: e.target.value
    });
  }


  onChangeFeature1(e) {
    this.setState({
      feature1: e.target.value
    });
  }
  onChangeFeature2(e) {
    this.setState({
      feature2: e.target.value
    });
  }
  onChangeFeature3(e) {
    this.setState({
      feature3: e.target.value
    });
  }

  onChangeCuisine1(e) {
    this.setState({
      cuisine1: e.target.value
    });
  }
  onChangeCuisine2(e) {
    this.setState({
      cuisine2: e.target.value
    });
  }
  onChangeCuisine3(e) {
    this.setState({
      cuisine3: e.target.value
    });
  }


  saveTutorial() {
    var data = {
      hotelName: this.state.hotelName,
      description: this.state.description,
      address: this.state.address,
      date_of_registration: this.state.date_of_registration,
      registrationFee: this.state.registrationFee,
      priceRange: this.state.priceRange,
      contactNo: this.state.contactNo,
      email: this.state.email,
      amenity1: this.state.amenity1,
      amenity2: this.state.amenity2,
      amenity3: this.state.amenity3,
      feature1: this.state.feature1,
      feature2: this.state.feature2,
      feature3: this.state.feature3,
      cuisine1: this.state.cuisine1,
      cuisine2: this.state.cuisine2,
      cuisine3: this.state.cuisine3
    };

    HotelDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          hotelName: response.data.hotelName,
          description: response.data.description,
          address: response.data.address,
          date_of_registration: response.data.date_of_registration,
          registrationFee: response.data.registrationFee,
          priceRange: response.data.priceRange,
          contactNo: response.data.contactNo,
          email: response.data.email,
          amenity1: response.data.amenity1,
          amenity2: response.data.amenity2,
          amenity3: response.data.amenity3,
          feature1: response.data.feature1,
          feature2: response.data.feature2,
          feature3: response.data.feature3,
          cuisine1: response.data.cuisine1,
          cuisine2: response.data.cuisine2,
          cuisine3: response.data.cuisine3,
          published: response.data.published,
          submitted: true
        });
        console.log(response.data);
        alert('Hotel Added!');
      })
      .catch(e => {
        console.log(e);
        alert(e.message);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      hotelName: "",
      description: "",
      address : "",
      date_of_registration : "",
      registrationFee : "",
      priceRange : "",
      contactNo : "",
      email : "",
      amenity1: "",
      amenity2: "",
      amenity3: "",
      feature1: "",
      feature2: "",
      feature3: "",
      cuisine1: "",
      cuisine2: "",
      cuisine3: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            {/* <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button> */}
          </div>
        ) : (
          <div>

            <h2 className="adminHeading">Add Hotels</h2>

            <nav >
            <ol style={{backgroundColor: "white", marginLeft: "-15px"}} className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Admin</a></li>
            <li className="breadcrumb-item active" aria-current="page">Add Hotels</li>
            </ol>
            </nav> <br/>

            <div className="form-group">
              <label htmlFor="hotelName">Hotel Name</label>
              <input
                type="text"
                className="form-control"
                id="hotelName"
                placeholder="Agaya Hotel"
                required
                value={this.state.hotelName}
                onChange={this.onChangeTitle}
                name="hotelName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
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
              <label htmlFor="address">Address</label>
              <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Nuwara Eliya"
                  required
                  value={this.state.address}
                  onChange={this.onChangeAddress}
                  name="address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="date_of_registration">Date Of Registration</label>
              <input
                  type="text"
                  className="form-control"
                  id="date_of_registration"
                  placeholder="21.06.2021"
                  required
                  value={this.state.date_of_registration}
                  onChange={this.onChangeDOR}
                  name="date_of_registration"
              />
            </div>

            <div className="form-group">
              <label htmlFor="area">Registration Fee (Rs.)</label>
              <input
                  type="number"
                  className="form-control"
                  id="registrationFee"
                  placeholder="3500.00"
                  required
                  value={this.state.registrationFee}
                  onChange={this.onChangeRegFee}
                  name="registrationFee"
              />
            </div>

            <div className="form-group">
              <label htmlFor="priceRange">Price Range</label>
              <input
                  type="text"
                  className="form-control"
                  id="priceRange"
                  required
                  placeholder="Rs. 2500.00 - Rs. 5000.00"
                  value={this.state.priceRange}
                  onChange={this.onChangePriceRange}
                  name="priceRange"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input
                  type="number"
                  className="form-control"
                  id="contactNo"
                  required
                  placeholder="+94 112 278 549"
                  value={this.state.contactNo}
                  onChange={this.onChangeContact}
                  name="contactNo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  placeholder="abc@gmail.com"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                  name="email"
              />
            </div>

            <br></br>
            <div className="form-group">
              <label style={{marginLeft: "40%"}}><strong>Top 3 Amenities</strong></label>
              <br></br>
              <label htmlFor="amenity1">Amenity 1</label>
              <input
                  type="text"
                  className="form-control"
                  id="amenity1"
                  required
                  placeholder="Gym"
                  value={this.state.amenity1}
                  onChange={this.onChangeAmenity1}
                  name="amenity1"
              />

              <br></br>
              <label htmlFor="amenity1">Amenity 2</label>
              <input
                  type="text"
                  className="form-control"
                  id="amenity2"
                  required
                  placeholder="Swimming Pool"
                  value={this.state.amenity2}
                  onChange={this.onChangeAmenity2}
                  name="amenity2"
              />

              <br></br>
              <label htmlFor="amenity3">Amenity 3</label>
              <input
                  type="text"
                  className="form-control"
                  id="amenity3"
                  required
                  placeholder="Spa"
                  value={this.state.amenity3}
                  onChange={this.onChangeAmenity3}
                  name="amenity3"
              />
            </div>

            <br></br>
            <div className="form-group">
              <label  style={{marginLeft: "40%"}}><strong>Top 3 Room Features</strong></label>
              <br></br>
              <label htmlFor="feature1">Feature 1</label>
              <input
                  type="text"
                  className="form-control"
                  id="feature1"
                  required
                  placeholder="A/C"
                  value={this.state.feature1}
                  onChange={this.onChangeFeature1}
                  name="feature1"
              />

              <br></br>
              <label htmlFor="feature2">Feature 2</label>
              <input
                  type="text"
                  className="form-control"
                  id="feature2"
                  required
                  placeholder="Bathrobes"
                  value={this.state.feature2}
                  onChange={this.onChangeFeature2}
                  name="feature2"
              />

              <br></br>
              <label htmlFor="amenity1">Feature 3</label>
              <input
                  type="text"
                  className="form-control"
                  id="feature3"
                  required
                  placeholder="Bathtub"
                  value={this.state.feature3}
                  onChange={this.onChangeFeature3}
                  name="feature3"
              />
            </div>
            

            <br></br>
            <div className="form-group">
              <label  style={{marginLeft: "40%"}}><strong>Most Popular Cuisines</strong></label>
              <br></br>
              <label htmlFor="feature1">Cuisine 1</label>
              <input
                  type="text"
                  className="form-control"
                  id="cuisine1"
                  required
                  placeholder="Milk rice and Lunumiris"
                  value={this.state.cuisine1}
                  onChange={this.onChangeCuisine1}
                  name="cuisine1"
              />

              <br></br>
              <label htmlFor="feature2">Cuisine 2</label>
              <input
                  type="text"
                  className="form-control"
                  id="cuisine2"
                  required
                  placeholder="Kottu"
                  value={this.state.cuisine2}
                  onChange={this.onChangeCuisine2}
                  name="cuisine1"
              />

              <br></br>
              <label htmlFor="amenity1">Cuisine 3</label>
              <input
                  type="text"
                  className="form-control"
                  id="cuisine3"
                  required
                  placeholder="Lasaigna"
                  value={this.state.cuisine3}
                  onChange={this.onChangeCuisine3}
                  name="cuisine3"
              />
            </div>


            <button onClick={this.saveTutorial} className="submitBtn">
              Add Hotel
            </button>
          </div>
        )}
      </div>
    );
  }
}
