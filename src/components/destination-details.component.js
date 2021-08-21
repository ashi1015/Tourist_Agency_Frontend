import React, { Component } from "react";
import {Link} from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import DestinationDataService from "../services/destination.service";

export default class DestinationsDetailsComponent extends Component {
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
        <br/>

        <div className="col-md-12">

          <ul className="list-group">
            {destinations &&
            destinations.map((destination, index) => (
                <li className={ "list-group-item " +
                (index === currentIndex ? "active" : "")
                }
                    onClick={() => this.setActiveDestination(destination, index)}
                    key={index}
                >
                  {destination.title}
                </li>
            ))}
          </ul>
          <br/><br/>

        </div>

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

        <br/>
        <div className="col-md-12">
          {currentDestination ? (
              <div>
                <div>
                  <label><strong>Title :</strong></label>{" "}
                  <label style={{float: "right", marginRight: "700px"}}>{currentDestination.title}</label>
                </div>
                <div>
                  <label><strong>Description :</strong></label>{" "}
                  <label style={{float: "right", marginRight: "700px"}}>{currentDestination.description}</label>
                </div>
                <div>
                  <label><strong>City :</strong></label>{" "}
                  <label style={{float: "right", marginRight: "700px"}}>{currentDestination.city}</label>
                  {/*{currentDestination.published ? "Published" : "Pending"}*/}
                </div>
                <div>
                  <label><strong>Coordinates :</strong></label>{" "}
                  <label style={{float: "right", marginRight: "700px"}}>{currentDestination.coordinates}</label>
                </div>
                <div>
                  <label><strong>Area (ha) :</strong></label>{" "}
                  <label style={{float: "right", marginRight: "700px"}}>{currentDestination.area}</label>
                </div>
                <div>
                  <label><strong>Altitude :</strong></label>{" "}
                  <label style={{float: "right", marginRight: "700px"}}>{currentDestination.altitude}</label>
                </div>
                <div>
                  <label><strong>Temperature :</strong></label>{" "}
                  <label style={{float: "right", marginRight: "700px"}}>{currentDestination.temperature}</label>
                </div>
                <div>
                  <label><strong>Contact :</strong></label>{" "}
                  <label style={{float: "right", marginRight: "700px"}}>{currentDestination.contact}</label>
                </div>
                <div>
                  <label><strong>Entrance Fees :</strong></label>{" "}
                  <label style={{float: "right", marginRight: "700px"}}>{currentDestination.entranceFees}</label>
                </div>
                <div>
                  <label><strong>ID / Visa Requirement :</strong></label>{" "}
                  <label style={{float: "right", marginRight: "700px"}}>{currentDestination.visaRequirement}</label>
                </div>
                <Link
                    type="button"
                    to={"/destinations/" + currentDestination.id}
                    className="submitBtnGreen" style={{width: "250px", textAlign: "center"}}>
                  Edit
                </Link> <br/>
              </div>

          ) : (
              <div>
                <br />
                <p>Click on a destination to view more details</p><br/><br/>
              </div>
          )}
        </div>
      </div>
    );
  }
}
