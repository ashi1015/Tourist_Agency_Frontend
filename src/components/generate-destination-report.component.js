import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import DestinationDataService from "../services/destination.service";
import {Link} from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";


class GenerateDestinationReportComponent extends Component {

    constructor(props) {
        super(props);
        this.retrieveDestinations = this.retrieveDestinations.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveDestination = this.setActiveDestination.bind(this);
        this.setCurrentDestination = this.setCurrentDestination.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
        this.onChangeName = this.onChangeName.bind(this);


        this.state = {
            destinations: [],
            currentDestination: null,
            currentIndex: -1,

            page: 1,
            count: 0,
            pageSize: 3,

            name: 'name',
            receiptId: '',
            price1: '',
            price2: '',
        };
        this.pageSizes = [3, 6, 9];

    }

    componentDidMount() {
        this.retrieveDestinations();
    }

    onChangeName(e) {
        const name = e.target.value;

        this.setState(function(prevState) {
            return {
                currentDestination: {
                    ...prevState.currentDestination,
                    name: name
                }
            };
        });
    }

    getRequestParams(searchTitle, page, pageSize) {
        let params = {};

        if (searchTitle) {
            params["title"] = searchTitle;
        }

        if (page) {
            params["page"] = page - 1;
        }

        if (pageSize) {
            params["size"] = pageSize;
        }

        return params;
    }

    retrieveDestinations() {
        const { searchTitle, page, pageSize } = this.state;
        const params = this.getRequestParams(searchTitle, page, pageSize);

        DestinationDataService.getAll(params)
            .then((response) => {
                const { destinations, totalPages } = response.data;

                this.setState({
                    destinations: destinations,
                    count: totalPages,
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });

    }

    refreshList() {
        this.retrieveDestinations();
        this.setState({
            currentDestination: null,
            currentIndex: -1,
        });
    }

    setActiveDestination(destination, index) {
        this.setState({
            currentDestination: destination,
            currentIndex: index,
        });
    }

    setCurrentDestination(destination, index) {
        this.setState({
            currentDestination: destination,
            currentIndex: index,
        });
    }

    handlePageChange(event, value) {
        this.setState(
            {
                page: value,
            },
            () => {
                this.retrieveDestinations();
            }
        );
    }

    handlePageSizeChange(event) {
        this.setState(
            {
                pageSize: event.target.value,
                page: 1
            },
            () => {
                this.retrieveDestinations();
            }
        );
    }

    //handleChange = ({ target: { value, name }}) => this.setState({ [name]: value })

    handleChange = ({ target: { value, name }}) =>
        this.setState(prevState => ({
            [name]: {
                ...prevState.value,
                [name]: value
            }
        }));


    createAndDownloadPdf = () => {
        axios.post('http://localhost:8085/create-pdf', this.state)
            .then(() => axios.get('http://localhost:8085/fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'newPdf.pdf');
            })
    }



    render() {

        let {
            destinations,
            searchTitle,
            currentDestination,
            currentIndex,
            page,
            count,
            pageSize,
        } = this.state;

        return (
            <div className="App">

                <div className="tableContainer">

                    <br/>
                    <table className="table">
                        <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Mean Temperature</th>
                            <th>Entrance Fees</th>
                            <th>Contact Number</th>
                            <th>Identity Card / Visa Requirement</th>
                        </tr>
                        </thead>
                        <tbody>


                        {destinations && destinations.map((destination, index) => (
                            <tr>
                                <td>{destination.title}</td>
                                <td>{destination.city}</td>
                                <td>{destination.temperature}</td>
                                <td>{destination.entranceFees}</td>
                                <td>{destination.contact}</td>
                                <td>{destination.visaRequirement}</td>


                            <input type="text" placeholder="Name" name="name" value={destination.title} onChange={this.onChangeName}/>
                            <input type="text" placeholder="Receipt ID" name="receiptId" value={destination.city} onChange={this.handleChange} />
                            <input type="text" placeholder="Price 1" name="price1" value={destination.temperature} onChange={this.handleChange} />
                            <input type="text" placeholder="Price 2" name="price2" value={destination.entranceFees} onChange={this.handleChange} />
                            </tr>

                        ))}



                        <button onClick={this.createAndDownloadPdf}>Download PDF</button>

                        </tbody>
                    </table>
                    <br/>

                </div>

                <br/>



            </div>



        );
    }
}

export default GenerateDestinationReportComponent;
