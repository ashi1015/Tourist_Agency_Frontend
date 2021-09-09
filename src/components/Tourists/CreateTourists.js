import React, { Component } from 'react';
import signpic from "../images/signup.png";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CreateTourists.css'
import backimg from "../images/1223.jpg"

const initialState = {
    fullname: "",
    email: "",
    password: "",
    phone: "",
    cpassword: "",
    country: "",
    noOfAdultTravellers: "",
    noOfChildTravellers: "",
    date: "",
    errors: {},
}

class CreateTourists extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        var hasErrors = this.validation(this.state);

        if (hasErrors) {
            return;
        }

        var tourist = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            cpassword: this.state.cpassword,
            country: this.state.country,
            noOfAdultTravellers: this.state.noOfAdultTravellers,
            noOfChildTravellers: this.state.noOfChildTravellers,
            date: this.state.date,
        }
        console.log('DATA TO SEND', tourist);

        axios.post('http://localhost:8030/tourists/register', tourist)
            .then(response => {
                console.log("response");
                console.log(response);
                alert(response.data.message);
            })
            .catch(error => {
                console.log("error.response.data.message");
                console.log(error.response.data.message);
                alert(error.response.data.message)
            })


    }

    validation = (values) => {

        var errors = {};

        if (!values.fullname) {
            errors.fullname = "Name is required."
        }
        if (!values.email) {
            errors.email = "Email is required."
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Email is invalid."
        }
        if (!values.phone) {
            errors.phone = "Phone number is required."
        } else if (values.phone.length != 10 || !/^[0-9]+$/.test(values.phone)) {
            errors.phone = "Phone number is invalid."
        }
        if (!values.country) {
            errors.country = "Country is required."
        }
        if (!values.date) {
            errors.date = "Date is required."
        }
        if (!values.password) {
            errors.password = "Password is required."
        } else if (values.password.length < 5) {
            errors.password = "Password must be more than five characters."
        }
        if (values.cpassword != values.password) {
            errors.cpassword = "Password is not matching."
        }

        this.setState({ errors: errors })
        return Object.keys(errors).length > 0;
    };

    render() {
        return (

            <div className="backdrop" style={{ backgroundImage: `url(${backimg})`, backgroundSize: 'cover' }}>
                <div className="app-wrapper_IT19177106">
                    <div>
                        <h2 className="title_IT19177106">Sign up</h2>
                    </div>

                    <div className="form-container_IT19177106 row">
                        <div className="col">
                            <form className="form-wrapper" onSubmit={this.onSubmit}>
                                <div className="name_IT19177106 input-container_cre_IT19177106">
                                    {/* <label htmlFor="fullname" className="form-label col">Name</label> */}
                                    <i className="zmdi zmdi-account icon"></i>
                                    <input
                                        className="inputcre_IT19177106 col"
                                        placeholder="Full Name"
                                        type="text"
                                        name="fullname"
                                        id="fullname"
                                        value={this.state.fullname}
                                        onChange={this.onChange}
                                    />
                                    {this.state.errors.fullname && <p className="error_IT19177106">{this.state.errors.fullname}</p>}
                                </div>
                                <div className="email_IT19177106 input-container_cre_IT19177106">
                                    <i className="zmdi zmdi-email icon"></i>
                                    {/* <label htmlFor="email" className="form-label col">Email</label> */}
                                    <input
                                        className="inputcre_IT19177106 col"
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                    {this.state.errors.email && <p className="error_IT19177106">{this.state.errors.email}</p>}
                                </div>
                                <div className="phone_IT19177106 input-container_cre_IT19177106">
                                    <i className="zmdi zmdi-phone-in-talk icon"></i>
                                    {/* <label htmlFor="phone" className="form-label col">Contact Number</label> */}
                                    <input
                                        className="inputcre_IT19177106"
                                        placeholder="Phone"
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={this.state.phone}
                                        onChange={this.onChange}
                                    />
                                    {this.state.errors.phone && <p className="error_IT19177106">{this.state.errors.phone}</p>}
                                </div>
                                <div className="livingCountry_IT19177106 input-container_cre_IT19177106">
                                    <i className="zmdi zmdi-pin-drop icon"></i>
                                    {/* <label htmlFor="expenseType" className="form-label col">Country</label> */}
                                    <select className="selectcre_it19177106"
                                        name="country"
                                        value={this.state.country}
                                        onChange={this.onChange}
                                    >
                                        <option value="" disabled selected hidden>Living Country</option>
                                        <option value="Afganistan">Afghanistan</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bonaire">Bonaire</option>
                                        <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                        <option value="Brunei">Brunei</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Canary Islands">Canary Islands</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Republic">Central African Republic</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Channel Islands">Channel Islands</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas Island">Christmas Island</option>
                                        <option value="Cocos Island">Cocos Island</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Cook Islands">Cook Islands</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Cote DIvoire">Cote DIvoire</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Curaco">Curacao</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="East Timor">East Timor</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Falkland Islands">Falkland Islands</option>
                                        <option value="Faroe Islands">Faroe Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="French Guiana">French Guiana</option>
                                        <option value="French Polynesia">French Polynesia</option>
                                        <option value="French Southern Ter">French Southern Ter</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Great Britain">Great Britain</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Hawaii">Hawaii</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong Kong">Hong Kong</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="India">India</option>
                                        <option value="Iran">Iran</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Isle of Man">Isle of Man</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Korea North">Korea North</option>
                                        <option value="Korea Sout">Korea South</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Laos">Laos</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libya">Libya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macau">Macau</option>
                                        <option value="Macedonia">Macedonia</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Midway Islands">Midway Islands</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Nambia">Nambia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherland Antilles">Netherland Antilles</option>
                                        <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                        <option value="Nevis">Nevis</option>
                                        <option value="New Caledonia">New Caledonia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk Island">Norfolk Island</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau Island">Palau Island</option>
                                        <option value="Palestine">Palestine</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Phillipines">Philippines</option>
                                        <option value="Pitcairn Island">Pitcairn Island</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Republic of Montenegro">Republic of Montenegro</option>
                                        <option value="Republic of Serbia">Republic of Serbia</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="St Barthelemy">St Barthelemy</option>
                                        <option value="St Eustatius">St Eustatius</option>
                                        <option value="St Helena">St Helena</option>
                                        <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                        <option value="St Lucia">St Lucia</option>
                                        <option value="St Maarten">St Maarten</option>
                                        <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                                        <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                                        <option value="Saipan">Saipan</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="Samoa American">Samoa American</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Tahiti">Tahiti</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Erimates">United Arab Emirates</option>
                                        <option value="United States of America">United States of America</option>
                                        <option value="Uraguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Vatican City State">Vatican City State</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                        <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                        <option value="Wake Island">Wake Island</option>
                                        <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Zaire">Zaire</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                    {this.state.errors.country && <p className="error_IT19177106">{this.state.errors.country}</p>}
                                </div>

                                <div className="noOfTravellers_IT19177106 input-container_cre_IT19177106">
                                    <i className="zmdi zmdi-accounts-alt icon"></i>
                                    {/* <label htmlFor="noOfAdultTravellers" className="form-label col">No of Travellers</label> */}
                                    <input
                                        type="Number"
                                        className="form-control travellers_IT19177106"
                                        placeholder="noOf Adult Travellers"
                                        id="noOfAdultTravellers"
                                        name="noOfAdultTravellers"
                                        value={this.state.NoOfAdultTravellers}
                                        onChange={this.onChange}
                                    />
                                    <input
                                        type="Number"
                                        className="form-control travellers_IT19177106"
                                        placeholder="No Of Child Travellers"
                                        id="noOfChildTravellers"
                                        name="noOfChildTravellers"
                                        value={this.state.noOfChildTravellers}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="date_IT19177106 input-container_cre_IT19177106">
                                    <i className="zmdi zmdi-calendar icon"></i>
                                    {/* <label htmlFor="date" className="form-label col">Arrival Date</label> */}
                                    <input
                                        type="date"
                                        className="inputcre_IT19177106 form-control col selectcre_it19177106"
                                        id="date"
                                        name="date"
                                        placeholder="Arrival Date"
                                        value={this.state.date}
                                        onChange={this.onChange}>
                                    </input>
                                    {this.state.errors.date && <p className="error_IT19177106">{this.state.errors.date}</p>}
                                </div>

                                <div className="password_IT19177106 input-container_cre_IT19177106">
                                    <i className="zmdi zmdi-lock icon"></i>
                                    {/* <label htmlFor="password" className="form-label col">Password</label> */}
                                    <input
                                        className="inputcre_IT19177106"
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                    {this.state.errors.password && <p className="error_IT19177106">{this.state.errors.password}</p>}
                                </div>

                                <div className="cpassword_IT19177106 input-container_cre_IT19177106">
                                    <i className="zmdi zmdi-lock icon"></i>
                                    {/* <label htmlFor="cpassword" className="form-label col">Comfirm Password</label> */}
                                    <input
                                        className="inputcre_IT19177106"
                                        placeholder="Confirm Password"
                                        type="password"
                                        name="cpassword"
                                        id="cpassword"
                                        value={this.state.cpassword}
                                        onChange={this.onChange}
                                    />
                                    {this.state.errors.cpassword && <p className="error_IT19177106">{this.state.errors.cpassword}</p>}
                                </div>

                                <div>
                                    <button className="submit_IT19177106" >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="signup-image col">
                            <figure>
                                <img className="img_IT19177106" src={signpic} alt="registration pic" />
                            </figure>
                            <Link to="/login" className="login_link">Already registered? Login here</Link>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default CreateTourists;