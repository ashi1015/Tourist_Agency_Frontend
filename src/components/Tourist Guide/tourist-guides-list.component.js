import React, { Component } from "react";
import TouristGuideDataService from "../services/touristguide.service";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import images from '../images/touristguide1.jpg';


export default class TouristGuidesListComponent extends Component {
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
      touristGuides: [],
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
      params["fullname"] = searchFullname;
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

    TouristGuideDataService.getAll(params)
      .then((response) => {
        const { touristGuides, totalPages } = response.data;

        this.setState({
          touristGuides: touristGuides,
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

  setActiveDestination(touristguide, index) {
    this.setState({
      currentDestination: touristguide,
      currentIndex: index,
    });
  }

  setCurrentDestination(touristguide, index) {
    this.setState({
      currentDestination: touristguide,
      currentIndex: index,
    });
  }

  removeAllDestinations() {
    TouristGuideDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteDestination() {
    TouristGuideDataService.delete(this.state.currentDestination.id)
        .then(response => {
          console.log(response.data);
          this.props.history.push('/touristGuides')
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
      touristGuides,
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
              placeholder="Search by fullname"
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
                <th>Full Name</th>
                <th>NIC</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Gender</th>
                <th>Race</th>
                <th>Languages</th>
                <th>Address</th>
                <th>Availability</th>
                <th style={{width: "1150px"}}>Action</th>
              </tr>
            </thead>
            <tbody>


            {touristGuides && touristGuides.map((touristguide, index) => (
                <tr>
                  <td>{touristguide.fullname}</td>
                  <td>{touristguide.nic}</td>
                  <td>{touristguide.email}</td>
                  <td>{touristguide.phone}</td>
                  <td>{touristguide.gender}</td>
                  <td>{touristguide.race}</td>
                  <td>{touristguide.languages}</td>
                  <td>{touristguide.address}</td>
                  <td>{touristguide.availability}</td>
                  {/*<td>{touristguide.published ? "Published" : "Pending"}</td>*/}
                  <td>
                    <Link to={"/touristGuides/" + touristguide.id} type="button" style={{fontWeight: "bold", fontSize: "13px"}} className="btn btn-success btn-sm"> Edit </Link>
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

      <Link to={"/add/"} type="button" style={{textAlign: "center"}} className="submitBtnYellow"  >
        Add New Tourist Guide
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
