import React, { Component} from 'react';
import axios from 'axios';
import cssfile from "./css/detailView1.css";
import titlebackground from "./images/R.jpg"

class detailView1 extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div class="container">

                <div class="introduction">
                    <h1 class="title">Destination Name</h1>
                    <img class="detinationimg" src={titlebackground}/>
                </div>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                <div class="details">

                    <p class="generaldesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                    <table class="recordDetailsTab">
                        <tr>
                            <td class="recordtitle"><h3 class="recordtitle">Location</h3></td>
                            <td class="recordvalue">Nuwara Eliya</td>
                        </tr>
                        <tr>
                            <td class="recordtitle"><h3 class="recordtitle">Location</h3></td>
                            <td class="recordvalue">Nuwara Eliya</td>
                        </tr>
                        <tr>
                            <td class="recordtitle"><h3 class="recordtitle">Location</h3></td>
                            <td class="recordvalue">Nuwara Eliya</td>
                        </tr>
                        <tr>
                            <td class="recordtitle"><h3 class="recordtitle">Location</h3></td>
                            <td class="recordvalue">Nuwara Eliya</td>
                        </tr>
                        <tr>
                            <td class="recordtitle"><h3 class="recordtitle">Location</h3></td>
                            <td class="recordvalue">Nuwara Eliya</td>
                        </tr>
                        <tr>
                            <td class="recordtitle"><h3 class="recordtitle">Location</h3></td>
                            <td class="recordvalue">Nuwara Eliya</td>
                        </tr>
                    </table>

                </div>

            </div>
        )
    }

}

export default detailView1;