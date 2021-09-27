import React, { Component, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import profilepic from "../../images/user.png";
import '../../styles/Profile.css';
// import backimg from "../../images/1223.jpg"


const initialState = {
    fullname: "",
    email: "",
    phone: "",
    country: "",
    noOfAdultTravellers: "",
    noOfChildTravellers: "",
    date: "",
    errors: {},
}
class UpdateProfile extends Component {

   
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {

        var hasErrors = this.validation(this.state);
        console.log("haserrors: "+ hasErrors);

        if (hasErrors) {
            return;
        }
        e.preventDefault();
        this.sendDataToBackend(e);
    }

        sendDataToBackend = (event) => {

            var email = window.sessionStorage.getItem("logged_user"); //store loguser email in session storage

            const payload = Object.fromEntries(new FormData(event.target).entries());


            const url = "http://localhost:8085/tourists/update-profile/" + email;

            let config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            }

            axios.put(url, payload, config)
                .then((res) => {
                    if (res.status == 200) {
                        console.log(res.data)
                        alert("Profile updated successfully")
                        window.location = window.location.origin + "/profile";
                    } else {
                        console.log(res.data.error);
                        alert("Failed to update profile")
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        };

        componentDidMount() {
            // this.retrieveExpenses();
            var email = window.sessionStorage.getItem("logged_user"); //store loguser email in session storage

            if (email && email.length > 0) {
                this.getProfile(email);
            }
        }
    
        getProfile(email) {
            const { searchTitle, page, pageSize } = this.state;
            // const params = this.getRequestParams(searchTitle, page, pageSize);
    
            axios.get(`http://localhost:8085/tourists/profile/${email}`)
            .then((res) => {
                console.log("Tourists ");
                console.log(res.data.data.tourist);

                this.setState({
                    fullname: res.data.data.tourist.fullname,
                    email: res.data.data.tourist.email,
                    phone: res.data.data.tourist.phone,
                    country: res.data.data.tourist.country,
                    noOfAdultTravellers: res.data.data.tourist.noOfAdultTravellers,
                    noOfChildTravellers: res.data.data.tourist.noOfChildTravellers,
                    date: res.data.data.tourist.date
                  });

            })
            .catch((e) => {
                console.error(e);
            })

        }

        validation = (values) => {

            var errors = {};

            if (!values.fullname) {
                errors.fullname = "Name is required."
            }

            if (!values.phone) {
                errors.phone = "Phone number is required."
            } else if (values.phone.length != 10 || !/^[0-9]+$/.test(values.phone)) {
                errors.phone = "Phone number is invalid."
            }

            if (!values.date) {
                errors.date = "Date is required."
            }


            this.setState({ errors: errors })
            return Object.keys(errors).length > 0;
        };


        render() {
            return (
                <div className="backdrop">
                    <div className="app-wrapper_pro_IT19177106" style={{marginTop: "100px", padding:"50px 100px"}}>


                        <div>
                            <h2 className="title_IT19177106 ">Update Profile</h2>
                        </div>

                        <div className="image_ava">

                            <img className="imeg_IT19177106" src={profilepic} alt="profile pic" />

                        </div>

                        <div className="row" style={{width: "450px", marginRight:"-89px", marginLeft:"-89px"}}>
                            <div className="col">
                                <form className="form-wrapper" onSubmit={this.onSubmit}>
                                    <div className="name_IT19177106 input-container_IT19177106">
                                        <label htmlFor="fullname" className="form-label col">Name</label>
                                        <input
                                            id="fullname"
                                            className="input_IT19177106"
                                            placeholder="Full Name"
                                            type="text"
                                            name="fullname"
                                            value={this.state.fullname}
                                            onChange={this.onChange}
                                        />
                                        {this.state.errors.fullname && <p className="error_IT19177106">{this.state.errors.fullname}</p>}
                                    </div>
                                    <div className="email_IT19177106 input-container_IT19177106">
                                        <label htmlFor="email" className="form-label col">Email</label>
                                        <input
                                            id="email"
                                            className="input_IT19177106"
                                            disabled="disabled"
                                            placeholder="Email"
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />

                                    </div>
                                    <div className="phone_IT19177106 input-container_IT19177106">
                                        <label htmlFor="phone" className="form-label col">Contact Number</label>
                                        <input
                                            id="phone"
                                            className="input_IT19177106"
                                            placeholder="Phone"
                                            type="tel"
                                            name="phone"
                                            value={this.state.phone}
                                            onChange={this.onChange}
                                        />
                                        {this.state.errors.phone && <p className="error_IT19177106">{this.state.errors.phone}</p>}
                                    </div>
                                    <div className="role_IT19177106 input-container_IT19177106">
                                        <label htmlFor="country" className="form-label col">Country</label>
                                        <input
                                            id="country"
                                            className="input_IT19177106"
                                            disabled="disabled"
                                            placeholder="Country"
                                            type="text"
                                            name="country"
                                            value={this.state.country}
                                            onChange={this.onChange}
                                        />

                                    </div>

                                    <div className="status_IT19177106 input-container_IT19177106">
                                        {/* <i className="zmdi zmdi-time"></i> */}
                                        <label htmlFor="noOfAdultTravellers" className="form-label col">No of Adult Travellers</label>
                                        <input
                                            id="noOfAdultTravellers"
                                            className="input_IT19177106"
                                            placeholder=""
                                            type="Number"
                                            name="noOfAdultTravellers"
                                            value={this.state.noOfAdultTravellers}
                                            onChange={this.onChange}
                                        />

                                    </div>

                                    <div className="comment_IT19177106 input-container_IT19177106">
                                        <label htmlFor="noOfChildTravellers" className="form-label col">No of Child Travellers</label>
                                        <input
                                            id="noOfChildTravellers"
                                            className="input_IT19177106"
                                            placeholder=""
                                            type="Number"
                                            name="noOfChildTravellers"
                                            value={this.state.noOfChildTravellers}
                                            onChange={this.onChange}
                                        />

                                    </div>
                                    <div className="comment_IT19177106 input-container_IT19177106">
                                        <label htmlFor="date" className="form-label col">Arrival Date</label>
                                        <input
                                            id="date"
                                            className="input_IT19177106"
                                            placeholder="date"
                                            type="date"
                                            name="date"
                                            value={this.state.date}
                                            onChange={this.onChange}
                                        />
                                        {this.state.errors.date && <p className="error_IT19177106">{this.state.errors.date}</p>}
                                    </div>
                                    <div className="row">
                                        
                                            <button className="submitpro_IT19177106 ">Update</button>
                                            


                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>

                </div>
            )

        }

    };


    export default UpdateProfile;