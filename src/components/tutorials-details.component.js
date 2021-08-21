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
                  {tutorial.title}
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
                <label><strong>Title :</strong></label>{" "}
                <label style={{textIndent: "100px"}}>{currentTutorial.hotelName}</label>
              </div>
              <div>
                <label><strong>Description :</strong></label>{" "}
                <label style={{textIndent: "45px"}}>{currentTutorial.description}</label>
              </div>
              <div>
                <label><strong>City :</strong></label>{" "}
                <label style={{textIndent: "102px"}}>{currentTutorial.city}</label>
                {/*{currentTutorial.published ? "Published" : "Pending"}*/}
              </div>
              <div>
                <label><strong>Coordinates :</strong></label>{" "}
                <label style={{textIndent: "43px"}}>{currentTutorial.coordinates}</label>
              </div>
              <div>
                <label><strong>Area (ha) :</strong></label>{" "}
                <label style={{textIndent: "63px"}}>{currentTutorial.area}</label>
              </div>
              <div>
                <label><strong>Altitude :</strong></label>{" "}
                <label style={{textIndent: "70px"}}>{currentTutorial.altitude}</label>
              </div>
              <div>
                <label><strong>Temperature :</strong></label>{" "}
                <label style={{textIndent: "35px"}}>{currentTutorial.temperature}</label>
              </div>
              <div>
                <label><strong>Contact :</strong></label>{" "}
                <label style={{textIndent: "65px"}}>{currentTutorial.contact}</label>
              </div>
              <div>
                <label><strong>Entrance Fees :</strong></label>{" "}
                <label style={{textIndent: "65px"}}>{currentTutorial.entranceFees}</label>
              </div>
              <div>
                <label><strong>ID / Visa Requirement :</strong></label>{" "}
                <label style={{textIndent: "100px"}}>{currentTutorial.visaRequirement}</label>
              </div>
              <Link
                to={"/tutorials/" + currentTutorial.id}
                className="submitBtnGreen">
                Edit
              </Link> <br/><br/>
            </div>

            ) : (
            <div>
              <br />
              <p>Click on a destination to view more details</p>
            </div>
          )}
        </div>
  </div>
    );
  }
}
