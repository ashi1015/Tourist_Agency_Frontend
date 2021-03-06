import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

   
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="#">SPM Project</a> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav" style={{height:'65px', fontSize:'20px' , fontStyle:'bold'}}>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/expenses">Expenses</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" href="/create-tourist">Create Tourist</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Sign In</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Profile">Profile</a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

//export class components
export default Navbar;
