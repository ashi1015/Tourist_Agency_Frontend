import React, { Component} from 'react';
import DestinationDataService from "../services/destination.service";
import titlebackground from "../images/destination1.jpg"

class IndividualDestinationDetailsComponent extends Component {
    constructor(props){
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeCoordinates = this.onChangeCoordinates.bind(this);
        this.onChangeArea = this.onChangeArea.bind(this);
        this.onChangeAltitude = this.onChangeAltitude.bind(this);
        this.onChangeTemperature = this.onChangeTemperature.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onChangeEntranceFees = this.onChangeEntranceFees.bind(this);
        this.onChangeVisaRequirement = this.onChangeVisaRequirement.bind(this);
        this.getDestination = this.getDestination.bind(this);

        this.state = {
            currentDestination: {
                id: null,
                title: "",
                description: "",
                city : "",
                coordinates : "",
                area : "",
                altitude : "",
                temperature : "",
                contact : "",
                entranceFees : "",
                visaRequirement : "",
                published: false
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getDestination(this.props.match.params.id);
    }

    onChangeTitle(e) {
        const title = e.target.value;

        this.setState(function(prevState) {
            return {
                currentDestination: {
                    ...prevState.currentDestination,
                    title: title
                }
            };
        });
    }

    onChangeDescription(e) {
        const description = e.target.value;

        this.setState(prevState => ({
            currentDestination: {
                ...prevState.currentDestination,
                description: description
            }
        }));
    }

    onChangeCity(e) {
        const city = e.target.value;

        this.setState(prevState => ({
            currentDestination: {
                ...prevState.currentDestination,
                city: city
            }
        }));
    }

    onChangeCoordinates(e) {
        const coordinates = e.target.value;

        this.setState(prevState => ({
            currentDestination: {
                ...prevState.currentDestination,
                coordinates: coordinates
            }
        }));
    }

    onChangeArea(e) {
        const area = e.target.value;

        this.setState(prevState => ({
            currentDestination: {
                ...prevState.currentDestination,
                area: area
            }
        }));
    }

    onChangeAltitude(e) {
        const altitude = e.target.value;

        this.setState(prevState => ({
            currentDestination: {
                ...prevState.currentDestination,
                altitude: altitude
            }
        }));
    }

    onChangeTemperature(e) {
        const temperature = e.target.value;

        this.setState(prevState => ({
            currentDestination: {
                ...prevState.currentDestination,
                temperature: temperature
            }
        }));
    }

    onChangeContact(e) {
        const contact = e.target.value;

        this.setState(prevState => ({
            currentDestination: {
                ...prevState.currentDestination,
                contact: contact
            }
        }));
    }

    onChangeEntranceFees(e) {
        const entranceFees = e.target.value;

        this.setState(prevState => ({
            currentDestination: {
                ...prevState.currentDestination,
                entranceFees: entranceFees
            }
        }));
    }

    onChangeVisaRequirement(e) {
        const visaRequirement = e.target.value;

        this.setState(prevState => ({
            currentDestination: {
                ...prevState.currentDestination,
                visaRequirement: visaRequirement
            }
        }));
    }

    getDestination(id) {
        DestinationDataService.get(id)
            .then(response => {
                this.setState({
                    currentDestination: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }


    render() {

        const { currentDestination } = this.state;

        return (
            <div>

                {currentDestination ? (

                    <div class="container2">
                        <div class="introduction">
                            <h1 class="title2">{currentDestination.title}</h1>
                            <img class="detinationimg2" src={titlebackground}/>
                        </div>

                        <br/>

                        <div class="details">

                            <p class="generaldesc">{currentDestination.description}</p>

                            <table class="recordDetailsTab">
                                <br/>
                                <tr>
                                    <td class="recordtitle">City </td>
                                    <td class="recordvalue">{currentDestination.city}</td>
                                </tr>
                                <tr>
                                    <td className="recordtitle">Coordinates</td>
                                    <td className="recordvalue">{currentDestination.coordinates}</td>
                                </tr>
                                <tr>
                                    <td className="recordtitle">Area (ha)</td>
                                    <td className="recordvalue">{currentDestination.area}</td>
                                </tr>
                                <tr>
                                    <td className="recordtitle">Altitude</td>
                                    <td className="recordvalue">{currentDestination.altitude}</td>
                                </tr>
                                <tr>
                                    <td className="recordtitle">Temperature</td>
                                    <td className="recordvalue">{currentDestination.temperature}</td>
                                </tr>
                                <tr>
                                    <td className="recordtitle">Contact Number</td>
                                    <td className="recordvalue">{currentDestination.contact}</td>
                                </tr>
                                <tr>
                                    <td className="recordtitle">Entrance Fees</td>
                                    <td className="recordvalue">{currentDestination.entranceFees}</td>
                                </tr>
                                <tr>
                                    <td className="recordtitle">ID/Visa Requirement</td>
                                    <td className="recordvalue">{currentDestination.visaRequirement}</td>
                                </tr>
                                <br/>
                            </table>
                            <br/><br/>

                        </div>
                        <br/>

                    </div>

                ) : (
                    <div>
                        <br />
                        <p>Please click on a Destination...</p>
                    </div>
                )}
            </div>
        )
    }

}

export default IndividualDestinationDetailsComponent;