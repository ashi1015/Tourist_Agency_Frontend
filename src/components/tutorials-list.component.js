import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import image from '../images/destination1.jpg';


export default class TutorialsList extends Component {
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

  deleteTutorial() {
    TutorialDataService.delete(this.state.currentTutorial.id)
        .then(response => {
          console.log(response.data);
          this.props.history.push('/tutorials')
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

    <div className="col-md-12">

        <h2 style={{marginLeft: "13px"}} className="adminHeading">List of Hotels</h2>

        <nav >
          <ol style={{backgroundColor: "white"}} className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Admin</a></li>
            <li className="breadcrumb-item active" aria-current="page">List of Hotels</li>
          </ol>
        </nav> <br/>

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
                className="btn btn-info"
                style={{paddingLeft: "30px", paddingRight: "30px"}}
                type="button"
                onClick={this.retrieveTutorials} >
                Search
              </button>
            </div>
          </div>


        </div>

        <div className="col-md-12">

          <br/>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Hotel</th>
                {/* <th>Address</th> */}
                <th>DOR</th>
                <th>Reg Fee</th>
                {/* <th>Price Range</th> */}
                <th>Contact</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>


            {tutorials && tutorials.map((tutorial, index) => (
                <tr>
                  <td>{tutorial.hotelName}</td>
                  {/* <td>{tutorial.address}</td> */}
                  <td>{tutorial.date_of_registration}</td>
                  <td>{tutorial.registrationFee}</td>
                  {/* <td>{tutorial.priceRange}</td> */}
                  <td>{tutorial.contactNo}</td>
                  <td>{tutorial.email}</td>
                 
                  {/*<td>{tutorial.published ? "Published" : "Pending"}</td>*/}
                  <td>
                    <Link to={"/tutorials/" + tutorial.id} type="button" style={{fontWeight: "bold", fontSize: "13px"}} className="btn btn-success btn-sm"> Update </Link>
                    <button className="btn btn-danger btn-sm" style={{fontWeight: "bold", marginLeft: "10px", fontSize: "13px"}} onClick={this.deleteTutorial}> Delete </button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table><br/>

        </div><br/>

      <div className="col-md-5">
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

      <div className="col-md-12">

  
        <Link to={"/add"} className="submitBtnYellow">Add New Hotel</Link>
   

        <button
            className="submitBtnRed"
            onClick={this.removeAllTutorials} >
          Remove All
        </button>
      </div>

      </div>
    );
  }
}
