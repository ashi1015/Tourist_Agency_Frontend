import React, { Component} from 'react';
import axios from 'axios';
//import cssfile from "../template/css/adminListView.css";


class adminListGuides extends Component {
    constructor(props){
        super(props);

        this.state = {
            touristguides: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/touristguide/retrieveallguides')
        .then(response => {
          this.setState({ touristguides: response.data.data });
        })
      }

    render() {
        return (
            <div class="container">

                <table className="table">
                            <thead className="thead-dark">
                            <tr>
                                <th>Tourist Guide ID</th>
                                <th>Full Name</th>
                                <th>NIC No</th>
                                <th>E-mail</th>
                                <th>Phone</th>
                                <th>Gender</th>
                                <th>Race</th>
                                <th>Languages</th>
                                <th>Address</th>
                                <th>Availability</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>


                            {this.state.touristguides && this.state.touristguides.map((guide, index) => (
                                <tr>
                                <td>{guide.guideId}</td>
                                <td>{guide.fullname}</td>
                                <td>{guide.nic}</td>
                                <td>{guide.email}</td>
                                <td>{guide.phone}</td>
                                <td>{guide.gender}</td>
                                <td>{guide.race}</td>
                                <td>{guide.languages}</td>
                                <td>{guide.skills}</td>
                                <td>{guide.languages}</td>
                                <td>{guide.availability}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table><br/>

            </div>

            )
        }
    
    }
    
export default adminListGuides;