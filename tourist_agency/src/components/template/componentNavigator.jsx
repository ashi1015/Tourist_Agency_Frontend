import React, { Component} from 'react';
import axios from 'axios';
import "./css/componentNavigator.css";
import titlebackground from "./images/R.jpg"

class componentNavigator extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div class="container">

                <div class="Title_container">
                    <img class="componentTitle_image" src={titlebackground} alt="componentImage"/>
                    <div class="componentTitle_text">COMPONENT TITLE</div>   
                </div>

                <div class="component_actions">

                    <span class="action_button_container">
                        <span class="action_button_img">
                            <img class="action_button_img" src={titlebackground}/>
                        </span>
                        <span class="action_button_text">
                            <h2 class="action_button_text">Add /Name</h2>
                        </span>                               
                   </span>

                   <span class="action_button_container">
                        <span class="action_button_img">
                            <img class="action_button_img" src={titlebackground}/>
                        </span>
                        <span class="action_button_text">
                            <h2 class="action_button_text">View & Update /Name</h2>
                        </span>                               
                   </span>

                   <div class="action_button_container">
                        <div class="action_button_img">
                            <img class="action_button_img" src={titlebackground}/>
                        </div>
                        <div class="action_button_text">
                            <h2 class="action_button_text">View & Update /Name</h2>
                        </div>                               
                   </div>

                   <div class="action_button_container">
                        <div class="action_button_img">
                            <img class="action_button_img" src={titlebackground}/>
                        </div>
                        <div class="action_button_text">
                            <h2 class="action_button_text">View /Name Details</h2>
                        </div>                               
                   </div>

                   <div class="action_button_container">
                        <div class="action_button_img">
                            <img class="action_button_img" src={titlebackground}/>
                        </div>
                        <div class="action_button_text">
                            <h2 class="action_button_text">Generate Report</h2>
                        </div>                               
                   </div>

                </div>

            </div>
        )
    }

}

export default componentNavigator;