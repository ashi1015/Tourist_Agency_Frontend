import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import DestinationDataService from "../services/destination.service";

import { Col, Row } from "reactstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default class GenerateDestinationReportComponent extends Component {
    constructor(props) {
        super(props);

        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveDestinations = this.retrieveDestinations.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveDestination = this.setActiveDestination.bind(this);
        this.setCurrentDestination = this.setCurrentDestination.bind(this);
        this.removeAllDestinations = this.removeAllDestinations.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

        this.state = {
            destinations: [],
            currentDestination: null,
            currentIndex: -1,
            searchTitle: "",

            page: 1,
            count: 0,
            pageSize: 3,
        };

        this.pageSizes = [3, 6, 9];
    }

    componentDidMount() {
        this.retrieveDestinations();
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle,
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

    printDocument() {
        const input = document.getElementById("viewtable");
        html2canvas(input).then((canvas) => {
            var imgWidth = 200;
            var pageHeight = 290;
            var imgHeight = (canvas.height * imgWidth) / canvas.width;
            var heightLeft = imgHeight;
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            var position = 0;
            var heightLeft = imgHeight;
            pdf.addImage(imgData, "JPEG", 4, position, imgWidth, imgHeight);
            pdf.save("Offer List Report.pdf");
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

    removeAllDestinations() {
        DestinationDataService.deleteAll()
            .then((response) => {
                console.log(response.data);
                this.refreshList();
            })
            .catch((e) => {
                console.log(e);
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

    render() {

        let {
            searchTitle,
            destinations,
            currentDestination,
            currentIndex,
            page,
            count,
            pageSize,
        } = this.state;

        return (
            <div className="col-md-12">

                <h2 style={{marginLeft: "13px"}} className="adminHeading">Destination Reports</h2>

                <nav >
                    <ol style={{backgroundColor: "white"}} className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Admin</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Generate Report</li>
                    </ol>
                </nav> <br/><br/>

                <div>
                    <Row>
                        <Col>
                            <button
                                onClick={this.printDocument}
                                className="submitBtnYellow"
                                variant="contained"
                                color="primary">
                                <i className="fa fa-file-pdf-o fa-lg"
                                    aria-hidden="true" >
                                    {" "}
                                    Download PDF
                                </i>
                            </button>
                            <br></br>
                            <div id="viewtable">
                                <p style={{float: "right"}}>Date: {new Date().toLocaleString() + ""}</p>
                                <br/><br/>
                                <h3 style={{ fontWeight: "bold"}}>
                                    List of Destinations
                                </h3>
                                <br></br>
                                <table className="table">
                                    <thead className="thead-dark">
                                    <tr
                                        style={{
                                            backgroundColor: "#afeeee",
                                            lineHeight: "50px",
                                        }}>
                                        <th>Name</th>
                                        <th>City</th>
                                        <th>Mean Temperature</th>
                                        <th>Entrance Fees</th>
                                        <th>Contact Number</th>
                                        <th>ID Card / Visa </th>
                                    </tr>
                                    </thead>


                                    {this.state.destinations.length > 0 &&
                                    this.state.destinations.map((item, index) => (
                                        <tr
                                            key={index}
                                            style={{
                                                borderBottom: "2px solid #ddd",
                                                //alignContent: "centre",
                                            }}
                                        >
                                            <td style={{ paddingLeft: "0" }}>{item.title}</td>
                                            <td>{item.city}</td>
                                            <td>{item.temperature}</td>
                                            <td>{item.description}</td>
                                            <td>{item.entranceFees}%</td>
                                            <td>Rs.{item.contact}</td>
                                            <hr /> <hr />
                                        </tr>
                                    ))}
                                </table>
                                <br/><br/><br/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
