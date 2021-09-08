import React, { Component } from "react";
import homeImg from '../../images/home.jpg'


export default class Home extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (

            <div>
                <img src={homeImg} class="card-img" alt="..."></img>
               
            </div>
        );
    }
}
