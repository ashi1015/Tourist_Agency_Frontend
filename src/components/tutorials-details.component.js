import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";

export default class TutorialsDetails extends Component {
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
      tutorials: [],
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

    if (page) {
      params["page"] = page - 1;
    }

    if (pageSize) {
      params["size"] = pageSize;
    }

    return params;
  }

  retrieveTutorials() {
    const { searchTitle, page, pageSize } = this.state;
    const params = this.getRequestParams(searchTitle, page, pageSize);

    TutorialDataService.getAll(params)
      .then((response) => {
        const { tutorials, totalPages } = response.data;

        this.setState({
          tutorials: tutorials,
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
      currentIndex: -1,
    });
  }

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index,
    });
  }

  removeAllTutorials() {
    TutorialDataService.deleteAll()
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
      tutorials,
      currentTutorial,
      currentIndex,
      page,
      count,
      pageSize,
    } = this.state;

    return (

      <div >

        <h2 style={{marginLeft: "13px"}} className="adminHeading">Hotel Details</h2>

        <nav >
          <ol style={{backgroundColor: "white"}} className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Admin</a></li>
            <li className="breadcrumb-item active" aria-current="page">Hotel Details</li>
          </ol>
        </nav><br/>

        <div className="col-md-12">

          <div className="input-group mb-3"  style={{width: "70%", marginLeft: "15%" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle} />
            <div className="input-group-append">
              <button
                  className="btn btn-info"
                  style={{paddingLeft: "50px", paddingRight: "50px"}}
                type="button"
                onClick={this.retrieveTutorials} >
                Search
              </button>
            </div>
          </div>

        </div>
        <br/>

        <div className="col-md-12">

          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li className={ "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.hotelName}
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
          {currentTutorial ? (
            <div>
              <div>
                <label><strong>Hotel :</strong></label>{" "}
                <label style={{textIndent: "200px"}}>{currentTutorial.hotelName}</label>
              </div>
              <div>
                <label><strong>Description :</strong></label>{" "}
                <label style={{textIndent: "5px"}}>{currentTutorial.description}</label>
              </div>
              <div>
                <label><strong>Address :</strong></label>{" "}
                <label style={{textIndent: "172px"}}>{currentTutorial.address}</label>
                {/*{currentTutorial.published ? "Published" : "Pending"}*/}
              </div>
              <div>
                <label><strong>Date Of Registration :</strong></label>{" "}
                <label style={{textIndent: "80px"}}>{currentTutorial.date_of_registration}</label>
              </div>
              <div>
                <label><strong>Registration Fee (Rs.) :</strong></label>{" "}
                <label style={{textIndent: "75px"}}>{currentTutorial.registrationFee}</label>
              </div>
              <div>
                <label><strong>Price Range :</strong></label>{" "}
                <label style={{textIndent: "145px"}}>{currentTutorial.priceRange}</label>
              </div>
              <div>
                <label><strong>Contact :</strong></label>{" "}
                <label style={{textIndent: "175px"}}>{currentTutorial.contactNo}</label>
              </div>
              <div>
                <label><strong>email :</strong></label>{" "}
                <label style={{textIndent: "190px"}}>{currentTutorial.email}</label>
              </div>
              <div>
                <label><strong>Top amenity 1 :</strong></label>{" "}
                <label style={{textIndent: "125px"}}>{currentTutorial.amenity1}</label>
              </div>
              <div>
                <label><strong>Top amenity 2 :</strong></label>{" "}
                <label style={{textIndent: "125px"}}>{currentTutorial.amenity2}</label>
              </div>
              <div>
                <label><strong>Top amenity 3 :</strong></label>{" "}
                <label style={{textIndent: "125px"}}>{currentTutorial.amenity3}</label>
              </div>
              <div>
                <label><strong>Top Room Feature 1 :</strong></label>{" "}
                <label style={{textIndent: "80px"}}>{currentTutorial.feature1}</label>
              </div>
              <div>
                <label><strong>Top Room Feature 2 :</strong></label>{" "}
                <label style={{textIndent: "80px"}}>{currentTutorial.feature2}</label>
              </div>
              <div>
                <label><strong>Top Room Feature 3 :</strong></label>{" "}
                <label style={{textIndent: "80px"}}>{currentTutorial.feature3}</label>
              </div>
              <div>
                <label><strong>Popular Cuisine 1 :</strong></label>{" "}
                <label style={{textIndent: "100px"}}>{currentTutorial.cuisine1}</label>
              </div>
              <div>
                <label><strong>Popular Cuisine 2 :</strong></label>{" "}
                <label style={{textIndent: "100px"}}>{currentTutorial.cuisine2}</label>
              </div>
              <div>
                <label><strong>Popular Cuisine 3:</strong></label>{" "}
                <label style={{textIndent: "100px"}}>{currentTutorial.cuisine3}</label>
              </div>
              <br></br>
              <br></br>
              <Link
                style= {{marginLeft: "40%"}}
                to={"/tutorials/" + currentTutorial.id}
                className="submitBtnGreen">
                Edit
              </Link> <br/><br/>
            </div>

            ) : (
            <div>
              <br />
              <p>Click on a Hotel to view more details</p>
            </div>
          )}
        </div>
  </div>
    );
  }
}
