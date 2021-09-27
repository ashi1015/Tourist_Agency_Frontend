import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import profilepic from "../../images/user.png";
import '../../styles/Profile.css';


const Profile = (props) => {

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const getProfile = async (email) => {
            try {
                const { data } = await axios.get(`http://localhost:8085/tourists/profile/${email}`);
                setProfile(data);
                console.log(profile.data.tourist.email);
            } catch (error) {
            }
        };
        var email = window.sessionStorage.getItem("logged_user"); //store loguser email in session storage

        if (email && email.length > 0) {
            getProfile(email);
        }

    }, []);

    //delete tourists profile
    const onSubmit = async (e) => {
        e.preventDefault();
        
        if(window.confirm("Do you really want to delete this profile?")){
            console.log("OK");
            var email = window.sessionStorage.getItem("logged_user"); //store loguser email in session storage
            const { data } = await axios.delete(`http://localhost:8085/tourists/delete-profile/${email}`);
            console.log("DATA:"+ data);
            if(data.data != null){
                window.location = window.location.origin + "/login";
            }
        }else{
            console.log("CANCEL")
        }
        // var hasErrors = this.validation(this.state);
        // console.log("haserrors: " + hasErrors);

        // if (hasErrors) {
        //     return;
        // }
        // e.preventDefault();
        // this.sendDataToBackend(e);
    }

    return (
        <div className="backdrop" >
            <div className="app-wrapper_pro_IT19177106">
                <Link to="/login">Logout</Link>

                <div>
                    <h2 className="title_IT19177106 ">Profile</h2>
                </div>

                <div className="image_ava">

                    <img className="imeg_IT19177106" src={profilepic} alt="profile pic" />

                </div>

                <div className="row">
                    <div className="col">
                        <form className="form-wrapper" onSubmit={onSubmit}>
                            <div className="name_IT19177106 input-container_IT19177106">
                                <label htmlFor="fullname" className="form-label col">Name</label>
                                <input
                                    className="input_IT19177106"
                                    disabled="disabled"
                                    placeholder="Full Name"
                                    type="text"
                                    name="fullname"
                                    value={profile.data && profile.data.tourist ? profile.data.tourist.fullname : ''}
                                />
                            </div>
                            <div className="email_IT19177106 input-container_IT19177106">
                                <label htmlFor="email" className="form-label col">Email</label>
                                <input
                                    className="input_IT19177106"
                                    disabled="disabled"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={profile.data && profile.data.tourist ? profile.data.tourist.email : ''}
                                />
                            </div>
                            <div className="phone_IT19177106 input-container_IT19177106">
                                <label htmlFor="phone" className="form-label col">Contact Number</label>
                                <input
                                    className="input_IT19177106"
                                    disabled="disabled"
                                    placeholder="Phone"
                                    type="tel"
                                    name="phone"
                                    value={profile.data && profile.data.tourist ? profile.data.tourist.phone : ''}
                                />
                            </div>
                            <div className="role_IT19177106 input-container_IT19177106">
                                <label htmlFor="expenseType" className="form-label col">Country</label>
                                <input
                                    className="input_IT19177106"
                                    disabled="disabled"
                                    placeholder="country"
                                    type="text"
                                    name="country"
                                    value={profile.data && profile.data.tourist ? profile.data.tourist.country : ''}
                                />
                            </div>

                            <div className="status_IT19177106 input-container_IT19177106">
                                {/* <i className="zmdi zmdi-time"></i> */}
                                <label htmlFor="noOfAdultTravellers" className="form-label col">No of Adult Travellers</label>
                                <input
                                    className="input_IT19177106"
                                    disabled="disabled"
                                    placeholder="0"
                                    type="text"
                                    name="noOfAdultTravellers"
                                    value={profile.data && profile.data.tourist ? profile.data.tourist.noOfAdultTravellers : ''}
                                />
                            </div>

                            <div className="comment_IT19177106 input-container_IT19177106">
                                <label htmlFor="noOfAdultTravellers" className="form-label col">No of Child Travellers</label>
                                <input
                                    className="input_IT19177106"
                                    disabled="disabled"
                                    placeholder="0"
                                    type="text"
                                    name="noOfChildTravellers"
                                    value={profile.data && profile.data.tourist ? profile.data.tourist.noOfChildTravellers : ''}
                                />
                            </div>
                            <div className="comment_IT19177106 input-container_IT19177106">
                                <label htmlFor="noOfAdultTravellers" className="form-label col">Arrival Date</label>
                                <input
                                    className="input_IT19177106"
                                    disabled="disabled"
                                    placeholder="date"
                                    type="date"
                                    name="date"
                                    value={profile.data && profile.data.tourist ? profile.data.tourist.date : ''}
                                />
                            </div>
                            <div className="row" style={{marginLeft:"-89px",marginRight:"-89px"}}>
                                <Link to="/UpdateProfile">
                                    <button className="submitpro_IT19177106 ">Update</button>
                                </Link>
                                
                                <button style={{justifyContent:'space-around', width:'47%'}}className="submitpro1_IT19177106 ">Delete</button>
                                

                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    )

};

export default Profile;
