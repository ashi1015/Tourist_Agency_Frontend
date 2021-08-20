import React, { Component} from 'react';
import axios from 'axios';
import cssfile from "../template/css/form.css";

const initialState = {
    guideID: '',
    fullname: '',
    nic: '',
    email: '',
    phone: '',
    gender: '',
    race: '',
    languages: '',
    skills: '',
    address: '',
    availability: 'Yes'
}

class addTouristGuide extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;   
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        let touristguide = {
          guideID: this.state.guideId,
          fullname: this.state.fullname,
          nic: this.state.nic,
          email: this.state.email,
          phone: this.state.phone,
          gender: this.state.gender,
          race: this.state.race,
          languages: this.state.languages,
          skills: this.state.skills,
          address: this.state.address,
          availability: this.state.availability,
        };
        console.log('DATA TO SEND', touristguide)
        axios.post('http://localhost:3000/touristguide/addtouristguide', touristguide)
        .then(response => {
          alert('Guide Data successfully inserted')
        })
        .catch(error => {
          console.log(error.message);
          alert(error.message)
        })
    }

   

    render() {
        return (
            <div class="container">

                <form onSubmit={this.onSubmit} className="adminform">
                 
                    <h2 class="formtitle">ADD TOURIST GUIDE</h2>

                    <table class="formtable">
                        <tr>
                            <td class="fieldname"><h3 class="labeltext">Tourist Guide ID:</h3></td>
                            <td class="inputfields"><input class="inputvalues" type="text" name="guideId"/></td>
                        </tr>
                        <tr>
                            <td class="fieldname"><h3 class="labeltext">Full Name:</h3></td>
                            <td class="inputfields"><input class="inputvalues" type="text" name="fullname"/></td>
                        </tr>
                        <tr>
                            <td class="fieldname"><h3 class="labeltext">NIC No:</h3></td> 
                            <td class="inputfields"><input class="inputvalues" type="text" name="nic"/></td>
                        </tr>
                        <tr>
                            <td class="fieldname"><h3 class="labeltext">E-mail:</h3></td> 
                            <td class="inputfields"><input class="inputvalues" type="text" name="email"/></td>
                        </tr>
                        <tr>
                            <td class="fieldname"><h3 class="labeltext">Phone Number:</h3></td> 
                            <td class="inputfields"><input class="inputvalues" type="text" name="phone"/></td>
                        </tr>
                        <tr>
                            <td class="fieldname"><h3 class="labeltext">Gender:</h3></td>
                            <td class="inputfields"><input class="inputvalues" type="text" name="gender"/></td>
                        </tr>
                        <tr>
                            <td class="fieldname"><h3 class="labeltext">Race:</h3></td>
                            <td class="inputfields"><input class="inputvalues" type="text" name="race"/></td>
                        </tr>
                        <tr>
                            <td class="fieldname"><h3 class="labeltext">Languages:</h3></td>
                            <td class="inputfields"><input class="inputvalues" type="text" name="languages"/></td>
                        </tr>
                        <tr>
                            <td class="fieldname"><h3 class="labeltext">Skills:</h3></td>
                            <td class="inputfields"><input class="inputvalues" type="text" name="skills"/></td>
                        </tr>
                        <tr>
                            <td class="fieldname"><h3 class="labeltext">Address:</h3></td>
                            <td class="inputfields"><input class="inputvalues" type="text" name="address"/></td>
                        </tr>
                    </table>

                    <button type="submit" className="submitBtn">Submit</button>
                        
                </form>

            </div>

            )
        }
    
    }
    
export default addTouristGuide;