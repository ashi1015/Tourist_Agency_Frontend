import React, { Component } from "react";
import HotelDataService from "../../services/hotel.service";

export default class HotelUpdate extends Component {
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

    this.getHotel = this.getHotel.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateHotel = this.updateHotel.bind(this);
    this.deleteHotel = this.deleteHotel.bind(this);

    this.state = {
      currentHotel: {
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
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getHotel(this.props.match.params.id);
  }

  onChangeTitle(e) {
    const hotelName = e.target.value;

    this.setState(function(prevState) {
      return {
        currentHotel: {
          ...prevState.currentHotel,
          hotelName: hotelName
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentHotel: {
        ...prevState.currentHotel,
        description: description
      }
    }));
  }

  onChangeAddress(e) {
    const address = e.target.value;

    this.setState(prevState => ({
      currentHotel: {
        ...prevState.currentHotel,
        address: address
      }
    }));
  }

  onChangeDOR(e) {
    const date_of_registration = e.target.value;

    this.setState(prevState => ({
      currentHotel: {
        ...prevState.currentHotel,
        date_of_registration: date_of_registration
      }
    }));
  }

  onChangeRegFee(e) {
    const registrationFee = e.target.value;

    this.setState(prevState => ({
      currentHotel: {
        ...prevState.currentHotel,
        registrationFee: registrationFee
      }
    }));
  }

  onChangePriceRange(e) {
    const priceRange = e.target.value;

    this.setState(prevState => ({
      currentHotel: {
        ...prevState.currentHotel,
        priceRange: priceRange
      }
    }));
  }

  onChangeContact(e) {
    const contactNo = e.target.value;

    this.setState(prevState => ({
      currentHotel: {
        ...prevState.currentHotel,
        contactNo: contactNo
      }
    }));
  }

  onChangeEmail(e) {
    const email = e.target.value;

    this.setState(prevState => ({
      currentHotel: {
        ...prevState.currentHotel,
        email: email
      }
    }));
  }

  onChangeAmenity1(e) {
    const amenity1 = e.target.value;

    this.setState(prevState => ({
      currentHotel: {
        ...prevState.currentHotel,
        amenity1: amenity1
      }
    }));
  }


  onChangeAmenity2(e) {
    const amenity2 = e.target.value;

    this.setState(prevState => ({
      currentHotel: {
        ...prevState.currentHotel,
        amenity2: amenity2
      }
    }));
  }

  onChangeAmenity3(e) {
    const amenity3 = e.target.value;

    this.setState(prevState => ({
      currentHotel: {
        ...prevState.currentHotel,
        amenity3: amenity3
      }
    }));
  }

  onChangeFeature1(e) {
    const feature1 = e.target.value;

    this.setState(prevState => ({
      currentHotel: {
        ...prevState.currentHotel,
        feature1: feature1
      }
    }));
  }

  onChangeFeature2(e) {
    const feature2 = e.target.value;

    this.setState(prevState => ({
      currentHotel: {
        ...prevState.currentHotel,
        feature2: feature2
      }
    }));
  }

  onChangeFeature3(e) {
    const feature3 = e.target.value;

    this.setState(prevState => ({
      currentHotel: {
        ...prevState.currentHotel,
        feature3: feature3
      }
    }));
  }

  onChangeCuisine1(e) {
    const cuisine1 = e.target.value;

    this.setState(prevState => ({
      currentHotel: {
        ...prevState.currentHotel,
        cuisine1: cuisine1
      }
    }));
  }

  onChangeCuisine2(e) {
    const cuisine2 = e.target.value;

    this.setState(prevState => ({
      currentHotel: {
        ...prevState.currentHotel,
        cuisine2: cuisine2
      }
    }));
  }

  onChangeCuisine3(e) {
    const cuisine3 = e.target.value;

    this.setState(prevState => ({
      currentHotel: {
        ...prevState.currentHotel,
        cuisine3: cuisine3
      }
    }));
  }

  getHotel(id) {
    HotelDataService.get(id)
      .then(response => {
        this.setState({
          currentHotel: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentHotel.id,
      hotelName: this.state.currentHotel.hotelName,
      description: this.state.currentHotel.description,
      published: status
    };

    HotelDataService.update(this.state.currentHotel.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentHotel: {
            ...prevState.currentHotel,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateHotel() {
    HotelDataService.update(
      this.state.currentHotel.id,
      this.state.currentHotel
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The hotel was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteHotel() {    
    HotelDataService.delete(this.state.currentHotel.id)
      .then(response => {
        console.log(response.data);
        alert("Hotel Deleted!")
        this.props.history.push('/hotels')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentHotel } = this.state;

    return (
      <div>
        {currentHotel ? (
          <div className="edit-form">
            <h4>Hotel</h4>
            <form>

              <div className="form-group">
                <label htmlFor="hotelName">Hotel Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="hotelName"
                  value={currentHotel.hotelName}
                  onChange={this.onChangeTitle}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentHotel.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Address</label>
                <input
                    type="text"
                    className="form-control"
                    id="address"
                    value={currentHotel.address}
                    onChange={this.onChangeAddress}
                />
              </div>

              <div className="form-group">
                <label htmlFor="date_of_registration">Date Of Registration</label>
                <input
                    type="text"
                    className="form-control"
                    id="date_of_registration"
                    value={currentHotel.date_of_registration}
                    onChange={this.onChangeDOR}
                />
              </div>

              <div className="form-group">
                <label htmlFor="registrationFee">Registration Fee</label>
                <input
                    type="text"
                    className="form-control"
                    id="registrationFee"
                    value={currentHotel.registrationFee}
                    onChange={this.onChangeRegFee}
                />
              </div>

              <div className="form-group">
                <label htmlFor="priceRange">Price Range</label>
                <input
                    type="text"
                    className="form-control"
                    id="priceRange"
                    value={currentHotel.priceRange}
                    onChange={this.onChangePriceRange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactNo">Contact Number</label>
                <input
                    type="text"
                    className="form-control"
                    id="contactNo"
                    value={currentHotel.contactNo}
                    onChange={this.onChangeContact}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={currentHotel.email}
                    onChange={this.onChangeEmail}
                />
              </div>

              <div className="form-group">
                <label htmlFor="amenity1">Amenity 1</label>
                <input
                    type="text"
                    className="form-control"
                    id="amenity1"
                    value={currentHotel.amenity1}
                    onChange={this.onChangeAmenity1}
                />
              </div>

              <div className="form-group">
                <label htmlFor="amenity2">Amenity 2</label>
                <input
                    type="text"
                    className="form-control"
                    id="amenity2"
                    value={currentHotel.amenity2}
                    onChange={this.onChangeAmenity2}
                />
              </div>

              <div className="form-group">
                <label htmlFor="amenity3">Amenity 3</label>
                <input
                    type="text"
                    className="form-control"
                    id="amenity3"
                    value={currentHotel.amenity3}
                    onChange={this.onChangeAmenity3}
                />
              </div>

              <div className="form-group">
                <label htmlFor="amenity3">Amenity 3</label>
                <input
                    type="text"
                    className="form-control"
                    id="amenity3"
                    value={currentHotel.amenity3}
                    onChange={this.onChangeAmenity3}
                />
              </div>

              <div className="form-group">
                <label htmlFor="amenity3">Amenity 3</label>
                <input
                    type="text"
                    className="form-control"
                    id="amenity3"
                    value={currentHotel.amenity3}
                    onChange={this.onChangeAmenity3}
                />
              </div>

              <div className="form-group">
                <label htmlFor="amenity3">Amenity 3</label>
                <input
                    type="text"
                    className="form-control"
                    id="amenity3"
                    value={currentHotel.amenity3}
                    onChange={this.onChangeAmenity3}
                />
              </div>

              <div className="form-group">
                <label htmlFor="feature1">Room Feature 1</label>
                <input
                    type="text"
                    className="form-control"
                    id="feature1"
                    value={currentHotel.feature1}
                    onChange={this.onChangeFeature1}
                />
              </div>

              <div className="form-group">
                <label htmlFor="feature2">Room Feature 2</label>
                <input
                    type="text"
                    className="form-control"
                    id="feature2"
                    value={currentHotel.feature2}
                    onChange={this.onChangeFeature2}
                />
              </div>

              <div className="form-group">
                <label htmlFor="feature3">Room Feature 3</label>
                <input
                    type="text"
                    className="form-control"
                    id="feature3"
                    value={currentHotel.feature3}
                    onChange={this.onChangeFeature3}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cuisine1">Popular Cuisine 1</label>
                <input
                    type="text"
                    className="form-control"
                    id="cuisine1"
                    value={currentHotel.cuisine1}
                    onChange={this.onChangeCuisine1}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cuisine2">Popular Cuisine 2</label>
                <input
                    type="text"
                    className="form-control"
                    id="cuisine2"
                    value={currentHotel.cuisine2}
                    onChange={this.onChangeCuisine2}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cuisine3">Popular Cuisine 3</label>
                <input
                    type="text"
                    className="form-control"
                    id="cuisine3"
                    value={currentHotel.cuisine3}
                    onChange={this.onChangeCuisine3}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentHotel.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentHotel.published ? (
              <button
                style={{width: "120px", fontSize: "13px", marginLeft: "350px",  marginRight: "50px"}}
                className="btn btn-warning"
                onClick={() => this.updatePublished(false)}>
                UnPublish
              </button>
            ) : (
              <button
                style={{width: "120px", fontSize: "13px", marginRight: "50px"}}
                className="btn btn-warning"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}




            <button
              style={{width: "120px", fontSize: "13px", marginRight: "50px"}}
              className="btn btn-danger"
              onClick={this.deleteHotel}
            >
              Delete
            </button>

            <button
              style={{width: "120px", fontSize: "13px"}}
              type="submit"
              className="btn btn-primary"
              onClick={this.updateHotel}
            >
              Update
            </button>
            <p>{this.state.message}</p>
            <br/><br/>
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
