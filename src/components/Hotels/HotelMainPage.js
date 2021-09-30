/**
 * Hotels Card Views
 * Display all the hotels published
 * Working Fine
 */

import React, { Component } from "react";
import HotelDataService from "../../services/hotel.service";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import img from "../../images/h1.jpg";
import img2 from "../../images/h5.jpg";


export default class HotelMainPage extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveHotels = this.retrieveHotels.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveHotel = this.setActiveHotel.bind(this);
        this.removeAllHotels = this.removeAllHotels.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

        this.state = {
            hotels: [],
            currentHotel: null,
            currentIndex: -1,
            searchTitle: "",

            page: 1,
            count: 0,
            pageSize: 3,
        };

        this.pageSizes = [3, 6, 9];
    }

    componentDidMount() {
        this.retrieveHotels();
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
            params["hotelName"] = searchTitle;
        }

        if (page) {
            params["page"] = page - 1;
        }

        if (pageSize) {
            params["size"] = pageSize;
        }

        return params;
    }

    retrieveHotels() {
        const { searchTitle, page, pageSize } = this.state;
        const params = this.getRequestParams(searchTitle, page, pageSize);

        HotelDataService.getAll(params)
            .then((response) => {
                const { hotels, totalPages } = response.data;

                this.setState({
                    hotels: hotels,
                    count: totalPages,
                });
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveHotels();
        this.setState({
            currentHotel: null,
            currentIndex: -1,
        });
    }

    setActiveHotel(hotel, index) {
        this.setState({
            currentHotel: hotel,
            currentIndex: index,
        });
    }

    removeAllHotels() {
        HotelDataService.deleteAll()
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
                this.retrieveHotels();
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
                this.retrieveHotels();
            }
        );
    }

    render() {
        const {
            searchTitle,
            hotels,
            currentHotel,
            currentIndex,
            page,
            count,
            pageSize,
        } = this.state;

        return (

            <div >


                <div className="heading">
                    <p className="hotelMainHeading">BEST HOTELS IN SRI LANKA</p>
                    {/* <h1 className="destinationHeading">Hotels</h1> */}
                    <br/>
                </div>

                <div className="col-md-12">

                    <br/><br/><br/><br/>

                    <p style={{marginTop: "50px", fontWeight: "bolder", fontSize: "20px"}}>Choose Your Hotel</p>
                    <h1 className="destinationHeading2"><b>Explore the Island for Travel</b></h1>
                    <img className="card-img-top" src={img2} style={{width: "370px", height: "240px", marginRight: "30px", marginTop: "-165px", float: "right", marginBottom: "80px"}} alt="Card image cap" />

                    <br/><br/>
                    <br/><br/>

                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Hotel name"
                            value={searchTitle}
                            onChange={this.onChangeSearchTitle} />
                        <div className="input-group-append">
                            <button
                                type="button"
                                className="btn btn-info"
                                style={{paddingLeft: "25px", paddingRight: "25px"}}
                                onClick={this.retrieveHotels} >
                                Search
                            </button>
                        </div>

                    </div>

                </div>

                <br/><br/>

                <div className="row" style={{marginLeft: "30px"}}>

                    {hotels &&
                    hotels.map((hotel, index) => (

                        <div className="column3">
                            <div className="card h-100" style={{width: "20rem"}}>
                                <div className="card-body">
                                    <img src={img} className="card-img-top" alt="..."></img>
                                    <h6 className={ "card-title " + (index === currentIndex ? "active" : "")}
                                        onClick={() => this.setActiveHotel(hotel, index)}
                                        key={index}
                                        style={{marginTop: "20px"}}>
                                        {hotel.hotelName}
                                    </h6>
                                    <p >{hotel.description}</p>
                                    <Link to={"/i/" + hotel.id} type="button" style={{fontWeight: "bold", fontSize: "13px"}} className="btn btn-primary" style={{marginLeft: "25%"}}> More Details </Link>

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