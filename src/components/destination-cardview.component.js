import React, { Component } from "react";
import DestinationDataService from "../services/destination.service";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import img from '../images/destination1.jpg'
import map from "../images/map.png";

export default class DestinationCardViewComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveDestinations = this.retrieveDestinations.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveDestination = this.setActiveDestination.bind(this);
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
        const {
            searchTitle,
            destinations,
            currentDestination,
            currentIndex,
            page,
            count,
            pageSize,
        } = this.state;

        return (

            <div >

                {/*
                <div className="card bg-dark text-white">
                    <img style={{height: "300px", width: "100%"}} src={img} className="card-img" alt="..."></img>
                    <div className="card-img-overlay">
                        <h3 style={{textAlign: "center", paddingTop: "80px"}} className="card-title">Top Most
                            Hotels</h3>
                        <h5 style={{textAlign: "center"}}>We value Your Safety</h5>
                    </div>
                </div>
                */}


                <div className="heading">
                    <p className="contactUsHeadingP">CHOOSE YOUR PLACE</p>
                    <h1 className="destinationHeading">Destinations</h1>
                    <br/>
                </div>

                <div className="col-md-12">

                    <br/><br/><br/><br/>

                    <p style={{marginTop: "50px", fontWeight: "bolder", fontSize: "20px"}}>CHOOSE YOUR PLACE</p>
                    <h1 className="destinationHeading2"><b>Explore the Island for Travel</b></h1>
                    <img className="card-img-top" src={img} style={{width: "370px", height: "240px", marginRight: "30px", marginTop: "-165px", float: "right", marginBottom: "80px"}} alt="Card image cap" />

                    <br/><br/>
                    <br/><br/>

                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by destination name"
                            value={searchTitle}
                            onChange={this.onChangeSearchTitle} />
                        <div className="input-group-append">
                            <button
                                type="button"
                                className="btn btn-info"
                                style={{paddingLeft: "25px", paddingRight: "25px"}}
                                onClick={this.retrieveDestinations} >
                                Search
                            </button>
                        </div>

                    </div>

                </div>

                <br/><br/>

                <div className="row" style={{marginLeft: "30px"}}>

                {destinations &&
                destinations.map((destination, index) => (

                            <div className="column3">
                                <div className="card h-100" style={{width: "20rem"}}>
                                    <div className="card-body">
                                        <img src={img} className="card-img-top" alt="..."></img>
                                        <h6 className={ "card-title " + (index === currentIndex ? "active" : "")}
                                            onClick={() => this.setActiveDestination(destination, index)}
                                            key={index}
                                            style={{marginTop: "20px"}}>
                                            {destination.title}
                                        </h6>
                                        <p >{destination.description}</p>
                                        <Link to={"/individualdestinationdetailspage/" + destination.id} type="button" style={{fontWeight: "bold", fontSize: "13px"}} className="btn btn-primary" style={{marginLeft: "25%"}}> More Details </Link>

                                    </div>
                                </div>
                            </div>
                ))}

                </div>


                <br/><br/>

                <div className="row" style ={{marginLeft: "250px"}}>

                    {"Items per Page: "}
                    <select
                        style ={{marginLeft: "50px", marginTop: "-4px"}}
                        className="select"
                        onChange={this.handlePageSizeChange}
                        value={pageSize}>
                        {this.pageSizes.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>

                    <Pagination
                        className="pagination"
                        count={count}
                        page={page}
                        siblingCount={1}
                        boundaryCount={1}
                        variant="outlined"
                        shape="rounded"
                        onChange={this.handlePageChange}
                        style ={{marginLeft: "200px", marginTop: "-11px"}}
                    />
                </div>


                <br/><br/><br/>

            </div>
        );
    }
}
