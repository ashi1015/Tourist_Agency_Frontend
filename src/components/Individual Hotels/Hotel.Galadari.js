import React, { Component } from "react";
import { Alert } from 'react-alert'
import { Link } from "react-router-dom";
import img1 from '../../images/cuisine.jpg'
import img2 from '../../images/a5.jpg'
import img3 from '../../images/features.jpg'
import img4 from '../../images/h10.png'
import img5 from '../../images/h5.jpg'
import img6 from '../../images/h11.jpg'
import img7 from '../../images/h9.jpg'



export default class Galadari extends Component {
    constructor(props) {
        super(props);

        // this.booked = this.booked.bind(this);

        this.state = {
          tutorials: []
            
        }
    }
   
    render() {

        return (
            <div>

                <div class="card bg-dark text-white">
                    <img style={{height: "300px"}} src={img7} class="card-img" alt="..."></img>
                    <div class="card-img-overlay">
                        <h3 style={{textAlign: "center", paddingTop: "80px"}} class="card-title">Hotel Galadari</h3>
                        <h5 style={{textAlign: "center"}}>We value Your Safety</h5>
                    </div>
                </div>

                <div>
                    <div>
                    <br></br>
                    <br/><br/>

                <div className="col-md-12">
                    <div>
                        <div>
                            {/* <label><strong>Description : </strong></label>{" "} */}
                            <label style={{textIndent: "100px", fontSize: "18px"}}><strong>The finest star class hotel in Sri Lanka with the best of dinning, accommodation and entertainment facilities.
                            This 450 roomed beauty is located facing the foaming ripples of the Indian Ocean and remains to be one of the best hotels in Sri Lanka. 
                            </strong></label>
                            <br></br>
                            <br/><br/>
                        </div>
                        <div>
                            <label><strong>Price Range :</strong></label>{" "}
                            <label style={{textIndent: "20px"}}>Rs. 2500.00 - Rs. 5000.00</label>
                        </div>
                        <div>
                            <label><strong>Mobile :</strong></label>{" "}
                            <label style={{textIndent: "55px"}}>0762154452</label>
                            {/* {retrieveTutorials.city} */}
                            
                        </div>
                        <div>
                            <label><strong>email :</strong></label>{" "}
                            <label style={{textIndent: "65px"}}>ghsales@galadari.lk</label>
                            {/* <label>{retrieveTutorials.coordinates}</label> */}
                        </div>
                        <div>
                            <label><strong>Address    :</strong></label>{" "}
                            <label style={{textIndent: "45px"}}>64 Lotus Road, Colombo 1,Sri Lanka</label>
                            {/* {retrieveTutorials.area} */}
                        </div>
                        <br></br>
                        <br/><br/>


                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100">
                                <img src={img1} class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Top Amenities</h5>
                                    <p class="card-text">Gym</p>
                                    <p class="card-text">Swimming Pool</p>
                                    <p class="card-text">Bathtub</p>
                                </div>
                               
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                <img src={img2} class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Top Room Features</h5>
                                    <p class="card-text">A/C</p>
                                    <p class="card-text">Mini Tub</p>
                                    <p class="card-text">Hair Dryers</p>
                                </div>
                               
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                <img src={img3} class="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Most Popular Cuisines</h5>
                                    <p class="card-text">Milk Rice and Lunumiris</p>
                                    <p class="card-text">kottu</p>
                                    <p class="card-text">Lasaigna</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            <br></br>
                            <div>
                                <button 
                                class="btn btn-success" 
                                style={{marginLeft: "30%", width: "380px"}}>Book Now</button>
                                    
                            </div>
                        </div>
                        <br></br><br></br><br></br>
                    </div>

                    </div>
                    
                </div>
               
         </div>
         
        );
    }
}

