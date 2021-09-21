import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/aboutUs.css';
import character1 from '../../images/character1.jpg';
import character2 from '../../images/character2.jpg';
import character3 from '../../images/character3.png';
import character4 from '../../images/character4.jpg';
import character5 from '../../images/character5.jpg';
import character6 from '../../images/character6.jpg';


class AboutUs extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (

            <div className="aboutUshole">

                <div className="heading_aboutUs">
                    <h1 className="aboutUsHeading">About Us</h1><br />

                    <br />
                </div>


                <div className="row_aboutUs">
                    <div className="column_aboutUs">
                        <div className="card border-light mb-3" style={{marginTop: "-12px" }}>
                            <div className="card-body text-dark">
                                <br></br>
                                <p className="aboutUsP">OUR STORY.......</p>
                                <br></br>
                                <p className="aboutUsPp"> In 2010, Olanka Travels took flight, piloted by Ravi, our CEO and Founder,
                                    with the main aim of becoming the best personalised travel agent in the world! This one-man show quickly
                                    gathered speed as the team at Olanka grew, fast and wide. Olanka Travels, spearheaded by Ravi, grew faster
                                    by attracting the right people around him. An integral part of our growth lies with listening to our customers
                                    valuable feedback and improving ourselves, where we compete with ourselves everyday!</p>

                                <p className="aboutUsPp"> Sri Lanka was the main and primary destination to conquer. Our
                                    brand started to gain its momentum worldwide as the reliable online travel partner for booking personalised
                                    tours to Sri Lanka. This brought us recognition and fame, from our clientele, who simply loved our genuine services.
                                    Through our customer referrals and online fame, we were able to expand and offer our services to other amazing destinations across the globe!</p>

                                <p className="aboutUsPp"> At present, Olanka Travels is powered by a 200-strong workforce who all share the same belief - that personalised
                                    travel tours are the best way to experience a destination, and taking care of our customers needs by assisting them in every possible way is the most important part of our brand.</p>

                                <p className="aboutUsPp"> We believe in equality for all, and hence our team is now made up of 75% female staff! In addition, by creating countless
                                    opportunities for the younger generation, we contribute to empowering the youth who will take the company to its future.</p>
                                <br></br><br></br><br></br><br></br><br></br><br></br>
                            </div>
                        </div>
                    </div>


                    <div className="column_aboutUs">
                        <div className="card border-light mb-3" style={{marginTop: "-12px" }}>
                            <div className="card-body text-dark">
                                <br></br>
                                <p className="aboutUsP">OUR VISION</p>
                                <br></br>
                                <p className="aboutUsPp">Our vision is to become the global leader in personalised, bespoke tours. Together with our professional, friendly staff we are on the fastest track towards this</p>
                                <br></br>
                                <br></br>
                                <p className="aboutUsP">OUR MISSION</p>
                                <br></br>
                                <p className="aboutUsPp">Our mission at Olanka Travels is to create a memorable, personalised holiday experience for anyone who entrusts us with their vacation. As part of our growth,
                                    we also intend on adding more holiday destinations to our list; which will enable us to serve a larger client base.</p>
                                <br></br>
                                <br></br>
                                <p className="aboutUsP">The Team & Dedication</p>
                                <br></br>
                                <p className="aboutUsPp">Our dynamic and determined team consists of 200 staff members, located around the world in several of our key offices. At Olanka Travels, our team
                                    is our pride and our greatest prize. Our representatives are professional, friendly, energetic and dedicated and will always greet our customers with a genuine, heart-warming smile!</p>
                                <br></br>


                            </div>
                        </div>
                    </div>

                </div>

                <div className="row_aboutUs3" style={{marginLeft:"50px"}}>
                    <div className="column_aboutUs">
                        <div className="card border-light mb-3" >
                            <div className="card-body text-dark">

                                <img className="character1" src={character1} style={{ width: "200px", height: "200px"}} alt="character1" />
                                <p style={{ fontWeight:"bold"  }}>Krish Sonu</p>

                            </div>
                        </div>
                    </div>

                    <div className="column_aboutUs">
                        <div className="card border-light mb-3" >
                            <div className="card-body text-dark">

                                <img className="character2" src={character2} style={{ width: "200px", height: "200px" }} alt="character2" />
                                <p style={{ fontWeight:"bold"  }}>John Crue</p>

                            </div>
                        </div>
                    </div>

                    <div className="column_aboutUs">
                        <div className="card border-light mb-3" >
                            <div className="card-body text-dark">

                                <img className="character3" src={character3} style={{ width: "200px", height: "200px" }} alt="character3" />
                                <p style={{ fontWeight:"bold"  }}>Ann Joy</p>

                            </div>
                        </div>
                    </div>
                    <div className="column_aboutUs">
                        <div className="card border-light mb-3" >
                            <div className="card-body text-dark">
                                <img className="character4" src={character4} style={{ width: "200px", height: "200px" }} alt="character4" />
                                <p style={{ fontWeight:"bold"  }}>Merry Lilie</p>

                            </div>
                        </div>
                    </div>
                    {/*<div className="column_aboutUs">*/}
                    {/*    <div className="card border-light mb-3" >*/}
                    {/*        <div className="card-body text-dark">*/}

                    {/*            <img className="character5" src={character5} style={{ width: "200px", height: "200px" }} alt="character5" />*/}
                    {/*            <p style={{ fontWeight:"bold"  }}>Mecoly Lusy</p>*/}

                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="column_aboutUs">*/}
                    {/*    <div className="card border-light mb-3" >*/}
                    {/*        <div className="card-body text-dark">*/}

                    {/*            <img className="character6" src={character6} style={{ width: "200px", height: "200px" }} alt="character6" />*/}
                    {/*            <p style={{ fontWeight:"bold"  }}>Brayan Lara</p>*/}

                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                </div>
            </div>

        );
    }
}

export default AboutUs;
