import React, { Component } from "react";
import phone from '../images/phone.png'
import location from '../images/location.png'
import map from '../images/map.png'


export default class ContactUsComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="heading">
                    <h1 className="contactUsHeading">Get in touch</h1>
                    <p className="contactUsHeadingP">Want to get in touch? We'd love to hear you. Here's how you can reach us...</p>
                    <br/>
                </div>


                <div style={{marginLeft: "10px"}} className="row">
                    <div className="column">
                        <div className="card border-light mb-3" style={{width: "28rem", marginTop:"-50px"}}>
                            <div className="card-body text-dark">
                                <img className="card-img-top" src={phone} style={{width: "40px", height: "40px", marginTop: "10px", marginLeft: "20px", marginBottom: "30px"}} alt="Card image cap" />
                                <br/>
                                <pre style={{fontWeight: "bolder", fontSize: "20px"}}><b> Talk to us</b></pre>
                                <pre  style={{fontFamily: ""}} >
                                    <b>     Landline  :  </b> +94 332 274 589
                                    <br/><b>     Mobile    :  </b> +94 773 454 221
                                    <br/><b>     Fax       :  </b> +94 332 245 966
                                    <br/><b>     Email     :  </b> angency@travel.lk</pre>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card border-light mb-3" style={{width: "38rem", marginTop:"-50px"}}>
                            <div className="card-body text-dark">
                                <img className="card-img-top" src={location} style={{width: "55px", height: "55px", marginLeft: "20px", marginBottom: "10px"}} alt="Card image cap" />
                                <pre style={{fontWeight: "bolder", fontSize: "20px"}}><b>Locate us</b></pre>
                                <pre><b>  Address : </b>
                                    <br/>     No: 520,
                                    <br/>     8th lane,
                                    <br/>     Queens Road,
                                    <br/>     Colombo 05</pre>
                                <img className="card-img-top" src={map} style={{width: "370px", height: "240px", marginRight: "30px", marginTop: "-180px", float: "right", marginBottom: "10px"}} alt="Card image cap" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
