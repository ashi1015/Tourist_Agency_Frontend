import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="bg-dark" style={{marginTop: "200px", height: "90px", color: "black"}}>
                <footer className = "footer badge bg-dark text-light">

                    <ul className="list-inline" style={{marginTop: "10px"}}>
                        <li className="list-inline-item"><span className="text-muted" style={{marginLeft: "500px"}}>All Rights Reserved 2020 @JavaGuides</span></li>
                        <li className="list-inline-item">
                            <span style={{marginLeft: "40px"}}>Contact Us
                                <figcaption style={{marginLeft: "100px"}}> +94 112 222 333 </figcaption>
                                <figcaption style={{marginLeft: "120px"}}> exploresl@lanka.lk </figcaption>
                                <figcaption style={{marginLeft: "155px"}}> No 05 Galle Rd, Colombo </figcaption>
                            </span>
                        </li>
                        <li className="list-inline-item">
                            <span style={{marginLeft: "20px"}}>Services
                                <figcaption style={{marginLeft: "100px"}}> About Us </figcaption>
                                <figcaption style={{marginLeft: "110px"}}> Contact Us </figcaption>
                                <figcaption style={{marginLeft: "110px"}}> Feedback </figcaption>
                            </span>
                        </li>
                    </ul>
                    {/*<span className="text-muted">All Rights Reserved 2020 @JavaGuides</span>*/}

                    {/*<span style={{marginLeft: "20px"}}>Contact Us*/}
                    {/*    <figcaption style={{marginLeft: "350px"}}> +94 112 222 333 </figcaption>*/}
                    {/*    <figcaption style={{marginLeft: "350px"}}> +94 112 222 334 </figcaption>*/}
                    {/*    <figcaption style={{marginLeft: "370px"}}> exploresl@lanka.lk </figcaption>*/}
                    {/*    <figcaption style={{marginLeft: "405px"}}> No 05 Galle Rd, Colombo </figcaption>*/}
                    {/*</span>*/}

                    {/*<span style={{marginLeft: "50px"}}>Contact Us*/}
                    {/*    <figcaption style={{marginLeft: "450px"}}> +94 112 222 333 </figcaption>*/}
                    {/*    <figcaption style={{marginLeft: "350px"}}> +94 112 222 334 </figcaption>*/}
                    {/*    <figcaption style={{marginLeft: "370px"}}> exploresl@lanka.lk </figcaption>*/}
                    {/*    <figcaption style={{marginLeft: "405px"}}> No 05 Galle Rd, Colombo </figcaption>*/}
                    {/*</span>*/}
                </footer>
            </div>
        )
    }
}

export default FooterComponent