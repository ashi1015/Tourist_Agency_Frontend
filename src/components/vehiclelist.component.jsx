import React, { Component } from "react";
import VehicleDataService from "../services/vehicle.service";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import images from '../images/touristguide1.jpg';


export default class VehicleListComponent extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchFullname = this.onChangeSearchFullname.bind(this);
    this.retrieveDestinations = this.retrieveDestinations.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveDestination = this.setActiveDestination.bind(this);
    this.setCurrentDestination = this.setCurrentDestination.bind(this);
    this.removeAllDestinations = this.removeAllDestinations.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePageSizeChange = this.handlePageSizeChange.bind(this);

    this.state = {
      vehicles: [],
      currentDestination: null,
      currentIndex: -1,
      searchFullname: "",

      page: 1,
      count: 0,
      pageSize: 3,
    };

    this.pageSizes = [3, 6, 9];
  }

  componentDidMount() {
    this.retrieveDestinations();
  }

  onChangeSearchFullname(e) {
    const searchFullname = e.target.value;

    this.setState({
      searchFullname: searchFullname,
    });
  }

  getRequestParams(searchFullname, page, pageSize) {
    let params = {};

    if (searchFullname) {
      params["vehicleNo"] = searchFullname;
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
    const { searchFullname, page, pageSize } = this.state;
    const params = this.getRequestParams(searchFullname, page, pageSize);

    VehicleDataService.getAll(params)
      .then((response) => {
        const { vehicles, totalPages } = response.data;

        this.setState({
          vehicles: vehicles,
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

  setActiveDestination(vehicle, index) {
    this.setState({
      currentDestination: vehicle,
      currentIndex: index,
    });
  }

  setCurrentDestination(vehicle, index) {
    this.setState({
      currentDestination: vehicle,
      currentIndex: index,
    });
  }

  removeAllDestinations() {
    VehicleDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteDestination() {
    VehicleDataService.delete(this.state.currentDestination.id)
        .then(response => {
          console.log(response.data);
          this.props.history.push('/vehicles')
        })
        .catch(e => {
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
      searchFullname,
      vehicles,
      currentDestination,
      currentIndex,
      page,
      count,
      pageSize,
    } = this.state;

    return (

    <div className="col-md-12">

        <h2 style={{marginLeft: "13px"}} className="adminHeading">List of Vehicles</h2>

        <nav >
          <ol style={{backgroundColor: "white"}} className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Admin</a></li>
            <li className="breadcrumb-item active" aria-current="page">List of Vehicles</li>
          </ol>
        </nav> <br/>

      <div className="col-md-12">

        <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Vehicle ID, Loading Capacity or Seating Capacity"
              value={searchFullname}
              onChange={this.onChangeSearchFullname} />
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
        <div className="tableContainer">

          <br/>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Vehicle Number</th>
                <th>Seating</th>
                <th>Loading</th>
                <th>Fee</th>
                <th>Driver</th>
                <th>AC</th>
                <th>Availability</th>
                <th style={{width: "1150px"}}>Action</th>
              </tr>
            </thead>
            <tbody>


            {vehicles && vehicles.map((vehicle, index) => (
                <tr>
                  <td>{vehicle.vehicleNo}</td>
                  <td>{vehicle.seating}</td>
                  <td>{vehicle.loading}</td>
                  <td>{vehicle.fee}</td>
                  <td>{vehicle.driver}</td>
                  <td>{vehicle.ac}</td>
                  <td>{vehicle.availability}</td>
                  {/*<td>{vehicle.published ? "Published" : "Pending"}</td>*/}
                  <td>
                    <Link to={"/updateVehicle/" + vehicle.id} type="button" style={{fontWeight: "bold", fontSize: "13px"}} className="btn btn-success btn-sm"> Edit </Link>

                  </td>
                </tr>
            ))}
            </tbody>
          </table><br/>

        </div>

      <br/>

      <div className="row" style ={{marginLeft: "220px"}}>
            {"Items per Page: "}
            <select className="select" style ={{marginLeft: "50px", marginTop: "-4px"}} onChange={this.handlePageSizeChange} value={pageSize}>
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

      <Link to={"/addVehicle/"} type="button" style={{textAlign: "center"}} className="submitBtnYellow"  >
        Add New Vehicle
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
