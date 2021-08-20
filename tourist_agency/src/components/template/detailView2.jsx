import React, { Component} from 'react';
import axios from 'axios';
import cssfile from "./css/detailView2.css";
import titlebackground from "./images/R.jpg"

class detailView2 extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div class="container">

                <table class="alldetails">
                    <td class="introduction">
                        <img class="imagedesc" src={titlebackground}/>
                        <h3 class="availability" id="yes">AVAILABLE</h3>
                        <h3 class="availability" id="no">UNAVAILABLE</h3>
                    </td>

                    <td class="generaldetails">
                        <h1 class="title">Destination Name</h1>

                        <p class="generaldesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <table class="recordDetailsTab">
                            <tr>
                                <td class="recordtitle"><h3 class="recordtitle">Language</h3></td>
                                <td class="recordvalue">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                            </tr>
                            <tr>
                                <td class="recordtitle"><h3 class="recordtitle">Skills</h3></td>
                                <td class="recordvalue">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                            </tr>
                        </table>
                        
                        <button class="bookBtn" type="submit">Book</button>
                    </td>

                    <td class="contactdetails">
                        <h2 class="subtitle">Contact Details</h2>

                        <table class="recordDetailsTab">
                            <tr>
                                <td class="recordtitle"><h3 class="recordtitle">Email: </h3></td>
                                <td class="recordvalue">test@mail.com</td>
                            </tr>
                            <tr>
                                <td class="recordtitle"><h3 class="recordtitle">Contact: </h3></td>
                                <td class="recordvalue">077222434</td>
                            </tr>
                        </table>
                    </td>
                </table>

            </div>
        )
    }

}

export default detailView2;