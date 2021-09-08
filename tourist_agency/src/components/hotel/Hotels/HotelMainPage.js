import React, { Component } from "react";
import img1 from '../../images/h7.jpg'
import img2 from '../../images/h2.jpg'
import img3 from '../../images/h4.jpg'
import img4 from '../../images/h10.png'
import img5 from '../../images/h5.jpg'
import img6 from '../../images/h11.jpg'
import img7 from '../../images/h9.jpg'


export default class HotelMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels:[]
        }
    }

//retrieving data from db
// componentDidMount(){
//     axios.get(`http://localhost:8085/api/tutorials/`)
//         .then(response => {
//             console.log({hotels : response.data.data})
//             this.setState({hotels : response.data.data})
//         })
//     }



    render() {
        return (
            <div>

                <div class="card bg-dark text-white">
                <img style={{height: "300px"}} src={img4} class="card-img" alt="..."></img>
                <div class="card-img-overlay">
                    <h3 style={{textAlign: "center", paddingTop: "80px"}} class="card-title">Top Most Hotels</h3>
                    <h5 style={{textAlign: "center"}}>We value Your Safety</h5>
                </div>
                </div>
                <div className="container">
                <br></br>
                <br></br>
                <br></br>
                {/* {this.state.hotels.length > 0 && this.state.hotels.map((item, index1) => ( */}
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                            <img src={img1} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                            <h5 class="card-title">Hotel Galadari</h5>
                                <p class="card-text" style={{fontSize: "14px"}}>The finest star class hotel in Sri Lanka with the best of dinning, accommodation and entertainment facilities.
                                This 450 roomed beauty is located facing the foaming ripples of the Indian Ocean and remains to be one of the best hotels in Sri Lanka. 
                                </p>
                                <a href="/Galadari" className="btn btn-primary" style={{marginLeft: "30%"}}>See Details</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 1 mins ago</small>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                            <img src={img2} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Marino Beach Colombo</h5>
                                <p class="card-text" style={{fontSize: "14px"}}>Marino Beach Colombo has a restaurant, outdoor swimming pool, a fitness center and bar in Colombo. 
                                Clean and comfortable rooms entertainment, they have a mall inside hotel with various shops and VR games, 9D cinema and more Food was very tasty. 
                                Professional staff.
                                </p>
                                <a href="" className="btn btn-primary" style={{marginLeft: "30%"}}>See Details</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 2 mins ago</small>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                            <img src={img3} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Jetwing Hotel</h5>
                                <p class="card-text" style={{fontSize: "14px"}}>Jetwing Hotels Limited is a Sri Lankan hotel chain.
                                 Jetwing was founded in the 1970s by Herbert Cooray when he purchased the Blue Oceanic Hotel in Negombo from its Swedish owner Vingressor and renamed it Jetwing. 
                                 Cooray founded Jetwing Travels in 1981
                                </p>
                                <a href="" className="btn btn-primary" style={{marginLeft: "30%"}}>See Details</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* ))} */}


                    <br></br>
                    <br></br>
                    <br></br>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100">
                            <img src={img5} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                            <h5 class="card-title">Hotel Himaya</h5>
                                <p class="card-text" style={{fontSize: "14px"}}>Nestled within 10 acres of exquisitely landscaped grounds, Hotel Himalaya is conveniently located 8 km away from the Tribhuban International Airport and only 2 km from the Kathmandu city centre.
                                 We have always been an ideal haven for business and leisure travelers alike, offering resort ambience with an intimate touch.
                                </p>
                                <a href="" className="btn btn-primary" style={{marginLeft: "30%"}}>See Details</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 1 mins ago</small>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                            <img src={img6} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Hilton Hotel</h5>
                                <p class="card-text" style={{fontSize: "14px"}}>Hilton Worldwide Holdings Inc.,
                                 formerly Hilton Hotels Corporation, is an American multinational hospitality company that manages and franchises a broad portfolio of hotels and resorts. 
                                 Founded by Conrad Hilton in May 1919, the corporation is now led by Christopher J. 
                                Nassetta.
                                </p>
                                <a href="" className="btn btn-primary" style={{marginLeft: "30%"}}>See Details</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 2 mins ago</small>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                            <img src={img7} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Shangrila Hotel</h5>
                                <p class="card-text" style={{fontSize: "14px"}}>Shangri-La Hotel, Colombo is delighted to welcome you to the enchanting capital of Sri Lanka - a precious jewel in the Indian Ocean,
                                 with a glittering cultural heritage and a long, proud history. An exciting new dining and social scene has come to life around the hotel's outstanding group of restaurants and bars,
                                 and the exclusive Horizon Club Lounge is the largest of its kind in Colombo.
                                </p>
                                <a href="" className="btn btn-primary" style={{marginLeft: "30%"}}>See Details</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>



                </div>
         </div>
        );
    }
}

