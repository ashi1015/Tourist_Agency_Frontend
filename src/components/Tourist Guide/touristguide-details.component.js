import React, { Component } from "react";
import TouristGuideDataService from "../services/touristguide.service";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";

export default class DestinationsDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchFullname = this.onChangeSearchFullname.bind(this);
    this.retrieveDestinations = this.retrieveDestinations.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveDestination = this.setActiveDestination.bind(this);
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
      searchFullname,
      touristGuides,
      currentDestination,
      currentIndex,
      page,
      count,
      pageSize,
    } = this.state;

    return (

      <div >

        <h2 style={{marginLeft: "13px"}} className="adminHeading">Destination Details</h2>

        <nav >
          <ol style={{backgroundColor: "white"}} className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Admin</a></li>
            <li className="breadcrumb-item active" aria-current="page">Destination Details</li>
          </ol>
        </nav><br/>

        <div className="col-md-12">

          <div className="input-group mb-3"  style={{width: "70%", marginLeft: "15%" }}>
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
        <br/>

        <div className="col-md-12">

          <ul className="list-group">
            {touristGuides &&
              touristGuides.map((touristguide, index) => (
                <li className={ "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveDestination(touristguide, index)}
                  key={index}
                >
                  {touristguide.fullname}
                </li>
              ))}
          </ul>
          <br/><br/>

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

        <br/>
        <div className="col-md-12">
          {currentDestination ? (
            <div>
              <div>
                <label><strong>Fullname :</strong></label>{" "}
                <label>{currentDestination.fullname}</label>
              </div>
              <div>
                <label><strong>Nic :</strong></label>{" "}
                <label>{currentDestination.nic}</label>
              </div>
              <div>
                <label><strong>Email :</strong></label>{" "}
                <label>{currentDestination.email}</label>
                {/*{currentDestination.published ? "Published" : "Pending"}*/}
              </div>
              <div>
                <label><strong>Phone :</strong></label>{" "}
                <label>{currentDestination.phone}</label>
              </div>
              <div>
                <label><strong>Gender (ha) :</strong></label>{" "}
                <label>{currentDestination.gender}</label>
              </div>
              <div>
                <label><strong>Race :</strong></label>{" "}
                <label>{currentDestination.race}</label>
              </div>
              <div>
                <label><strong>Languages :</strong></label>{" "}
                <label>{currentDestination.languages}</label>
              </div>
              <div>
                <label><strong>Skills :</strong></label>{" "}
                <label>{currentDestination.skills}</label>
              </div>
              <div>
                <label><strong>Entrance Fees :</strong></label>{" "}
                <label>{currentDestination.address}</label>
              </div>
              <div>
                <label><strong>ID / Visa Requirement :</strong></label>{" "}
                <label>{currentDestination.availability}</label>
              </div>
              <Link
                  type="button"
                to={"/touristGuides/" + currentDestination.id}
                className="submitBtnGreen" style={{width: "250px", textAlign: "center"}}>
                Edit
              </Link> <br/><br/>
            </div>

            ) : (
            <div>
              <br />
              <p>Click on a touristguide to view more details</p>
            </div>
          )}
        </div>
  </div>
    );
  }
}
