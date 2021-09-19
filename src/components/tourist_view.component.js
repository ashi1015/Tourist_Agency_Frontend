import React, { Component } from "react";
import HotelDataService from "../services/hotel.service";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import destination1 from '../images/destination1.jpg'

export default class TouristView extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveTutorials = this.retrieveTutorials.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.removeAllTutorials = this.removeAllTutorials.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

        this.state = {
            hotels: [],
            currentTutorial: null,
            currentIndex: -1,
            searchTitle: "",

            page: 1,
            count: 0,
            pageSize: 3,
        };

        this.pageSizes = [3, 6, 9];
    }

    componentDidMount() {
        this.retrieveTutorials();
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

        return params;
    }

    retrieveTutorials() {
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
        this.retrieveTutorials();
        this.setState({
            currentTutorial: null,
           
        });
    }

    setActiveTutorial(hotel, index) {
        this.setState({
            currentTutorial: hotel,
         
        });
    }

    removeAllTutorials() {
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
                this.retrieveTutorials();
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
                this.retrieveTutorials();
            }
        );
    }

    render() {
        const {
            searchTitle,
            hotels,
            currentTutorial,
            currentIndex,
            page,
            count,
            pageSize,
        } = this.state;

        return (
            <div >
                <div className="col-md-12">

                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by title"
                            value={searchTitle}
                            onChange={this.onChangeSearchTitle} />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.retrieveTutorials} >
                                Search
                            </button>
                        </div>
                    </div>

                </div>

                <div className="col-md-12">

                    <h4>Tourist List</h4>


                </div><br/><br/>

                <div className="col-md-12">

                    {hotels &&
                    hotels.map((hotel, index) => (

                    <div className="card" style={{display: 'flex', flexDirection: 'row'}} style={{width: "18rem"}}>
                        <img className="card-img-top" src="../images/h1.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className={ "card-title " + (index === currentIndex ? "active" : "")}
                                onClick={() => this.setActiveTutorial(hotel, index)}
                                key={index}>
                                {hotel.hotelName}
                            </h5>
                            <p className="card-text">Some quick example text to build on the card title and make up
                            the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>

                        </div>

                    </div>  ))} <br/><br/>


                </div>


                <div className="col-md-12">

                    <div className="startP">

                        {"Items per Page: "}
                        <select className="select" onChange={this.handlePageSizeChange} value={pageSize}>
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
                        />
                    </div>

                </div>


                <br/><br/><br/><br/>
                <div className="col-md-12">
                    {currentTutorial ? (
                        <div>
                            <div>
                                <label><strong>Title :</strong></label>{" "}
                                <label style={{textIndent: "100px"}}>{currentTutorial.hotelName}</label>
                            </div>
                            <div>
                                <label><strong>Description :</strong></label>{" "}
                                <label style={{textIndent: "50px"}}>{currentTutorial.description}</label>
                            </div>
                            <div>
                                <label><strong>City :</strong></label>{" "}
                                {currentTutorial.city}
                                {/*{currentTutorial.published ? "Published" : "Pending"}*/}
                            </div>
                            <div>
                                <label><strong>Coordinates :</strong></label>{" "}
                                <label>{currentTutorial.coordinates}</label>
                            </div>
                            <div>
                                <label><strong>Area (ha) :</strong></label>{" "}
                                {currentTutorial.area}
                            </div>
                            <div>
                                <label><strong>Altitude :</strong></label>{" "}
                                {currentTutorial.altitude}
                            </div>
                            <div>
                                <label><strong>Temperature :</strong></label>{" "}
                                {currentTutorial.temperature}
                            </div>
                            <div>
                                <label><strong>Contact :</strong></label>{" "}
                                {currentTutorial.contact}
                            </div>
                            <div>
                                <label><strong>ID / Visa Requirement :</strong></label>{" "}
                                {currentTutorial.visaRequirement}
                            </div>
                            <Link
                                to={"/hotels/" + currentTutorial.id}
                                className="badge badge-warning">
                                Edit
                            </Link> <br/><br/><br/><br/>
                        </div>

                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Tutorial...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
