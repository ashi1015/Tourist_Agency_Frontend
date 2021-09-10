import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import DestinationDataService from "../services/destination.service";

export default class DestinationsListComponent extends Component {
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

          <h2 style={{marginLeft: "13px"}} className="adminHeading">List of Destinations</h2>

          <nav >
            <ol style={{backgroundColor: "white"}} className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Admin</a></li>
              <li className="breadcrumb-item active" aria-current="page">List of Destinations</li>
            </ol>
          </nav> <br/>

          <div className="col-md-12">

            <div className="input-group mb-3">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Search by destination name"
                  value={searchTitle}
                  onChange={this.onChangeSearchTitle} />
              <div className="input-group-append">
                <button
                    className="btn btn-info"
                    style={{paddingLeft: "50px", paddingRight: "50px"}}
                    type="button"
                    onClick={this.retrieveDestinations} >
                  Search
                </button>
              </div>
            </div>


          </div>
          <div classname = "tableContainer">

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
                <th style={{width: "1000px"}}>Action</th>
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
                    {/*<td>{destination.published ? "Published" : "Pending"}</td>*/}
                    <td>
                      <Link to={"/destinations/" + destination.id} type="button" style={{fontWeight: "bold", fontSize: "13px"}} className="btn btn-success btn-sm"> Edit </Link>

                        <button className= "btn btn-info btn-sm"
                              style={{fontWeight: "bold", marginLeft: "10px", fontSize: "13px"}}
                              key={index}>
                        Add Image</button>
                    </td>
                  </tr>
              ))}
              </tbody>
            </table><br/>

          </div>

          <br/>

          <div className="row" style ={{marginLeft: "220px"}}>
            {"Items per Page : "}
            <select className="select" style ={{marginLeft: "50px", marginTop: "-4px"}}
                 onChange={this.handlePageSizeChange} value={pageSize}>
              {this.pageSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
              ))}
            </select>

            <Pagination
                style ={{marginLeft: "200px", marginTop: "-11px"}}
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


          <div className="col-md-12">

            <Link to={"/add/"} type="button" style={{textAlign: "center"}} className="submitBtnYellow"  >
              Add New Destination
            </Link>

            <button
                className="submitBtnRed"
                onClick={this.removeAllDestinations} >
              Remove All
            </button>
          </div>

        </div>
    );
  }
}
