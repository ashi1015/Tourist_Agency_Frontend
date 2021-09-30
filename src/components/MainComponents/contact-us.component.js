import React, { Component } from "react";
import { Link } from "react-router-dom";
import destination1 from '../../images/destination1.jpg'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import addDestination from '../../images/addDestination.png'
import destinationDetails from '../../images/destinationDetails.png'
import generateDestinationReport from '../../images/generateDestinationReport.png'
import updateDestinations from '../../images/updateDestinations.png'

export default class ContactUsComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (

            <div>

                <div className="heading">
                    <h1 className="contactUsHeading">Get in touch</h1><br/>
                    <p className="contactUsHeadingP">Want to get in touch? We'd love to hear you. Here's how you can reach us...</p>
                    <br/>
                </div>


                <div className="row">
                    <div className="column">
                        <div className="card border-light mb-3" style={{width: "28rem", marginTop:"-50px"}}>
                            <div className="card-body text-dark">
                                <img className="card-img-top" src={destination1} style={{width: "55px", height: "55px"}} alt="Card image cap" />
                                <p>Talk to us</p>
                                <p><br/><b>Landline :</b>+94 332 274 589
                                <br/><b>Mobile :</b>+94 773 454 221
                                <br/><b>Fax :</b>+94 332 245 966
                                <br/><b>Email :</b>angency@travel.lk</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card border-light mb-3" style={{width: "48rem", marginTop:"-50px"}}>
                            <div className="card-body text-info">
                                <img className="card-img-top" src={destination1} style={{width: "55px", height: "55px"}} alt="Card image cap" />
                                <p>Locate us</p>
                                <p><b>Address : </b>No: 520, <br/> 8th lane, <br/> Queens Road, <br/> Colombo 05</p>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
