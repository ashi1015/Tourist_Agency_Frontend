import React, { Component } from "react";
import VehicleDataService from "../services/vehicle.service";
import {Tooltip} from "@material-ui/core";

export default class UpdateVehicleComponent extends Component {
  constructor(props) {
    super(props);
    this.onChangeVehicleNo = this.onChangeVehicleNo.bind(this);
    this.onChangeSeating = this.onChangeSeating.bind(this);
    this.onChangeLoading = this.onChangeLoading.bind(this);
    this.onChangeFee = this.onChangeFee.bind(this);
    this.onChangeDriver = this.onChangeDriver.bind(this);
    this.onChangeAc = this.onChangeAc.bind(this);
    this.onChangeAvailability = this.onChangeAvailability.bind(this);

    this.getVehicle = this.getVehicle.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateVehicle = this.updateVehicle.bind(this);
    this.deleteVehicle = this.deleteVehicle.bind(this);

    this.state = {
      currentDestination: {
        id: null,
        vehicleNo: "",
        seating: "",
        loading : "",
        fee : "",
        driver : "",
        ac : "",
        availability : "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getVehicle(this.props.match.params.id);
  }

  onChangeVehicleNo(e) {
    const vehicleNo = e.target.value;

    this.setState(function(prevState) {
      return {
        currentDestination: {
          ...prevState.currentDestination,
          vehicleNo: vehicleNo
        }
      };
    });
  }

  onChangeSeating(e) {
    const seating = e.target.value;
    
    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        seating: seating
      }
    }));
  }

  onChangeLoading(e) {
    const loading = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        loading: loading
      }
    }));
  }

  onChangeFee(e) {
    const fee = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        fee: fee
      }
    }));
  }

  onChangeDriver(e) {
    const driver = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        driver: driver
      }
    }));
  }

  onChangeAc(e) {
    const ac = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        ac: ac
      }
    }));
  }

  onChangeAvailability(e) {
    const availability = e.target.value;

    this.setState(prevState => ({
      currentDestination: {
        ...prevState.currentDestination,
        availability: availability
      }
    }));
  }

  getVehicle(id) {
    VehicleDataService.get(id)
      .then(response => {
        this.setState({
          currentDestination: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentDestination.id,
      vehicleNo: this.state.currentDestination.vehicleNo,
      seating: this.state.currentDestination.seating,
      published: status
    };

    VehicleDataService.update(this.state.currentDestination.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentDestination: {
            ...prevState.currentDestination,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateVehicle() {
    VehicleDataService.update(
      this.state.currentDestination.id,
      this.state.currentDestination
    )
      .then(response => {
        console.log(response.data);
        this.props.history.push('/vehiclesList')
        this.setState({
          message: "The vehicle was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
    alert("Vehicle Updated Successfully!");

  }

  deleteVehicle() {
    VehicleDataService.delete(this.state.currentDestination.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/vehicleList')
      })
      .catch(e => {
        console.log(e);
      });
    alert("Vehicle Deleted Successfully!");

  }

  render() {
    const { currentDestination } = this.state;

    return (
      <div>
        {currentDestination ? (
          <div className="edit-form">

            <h2 className="adminHeading">Update Vehicle</h2>

            <nav >
              <ol style={{backgroundColor: "white", marginLeft: "-15px"}} className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Admin</a></li>
                <li className="breadcrumb-item active" aria-current="page">Update Vehicle</li>
              </ol>
            </nav> <br/>

            <form>

              <div className="form-group">
                <Tooltip vehicleNo="The name of the touristguide." placement="right-start">
                <label htmlFor="vehicleNo">Vehicle No:</label>
                </Tooltip>
                <input
                  type="text"
                  className="form-control"
                  id="vehicleNo"
                  value={currentDestination.vehicleNo}
                  onChange={this.onChangeVehicleNo}
                />
              </div>

              <div className="form-group">
                <Tooltip vehicleNo="A brief seating about the touristguide" placement="right-start">
                <label htmlFor="seating">Seating Capacity</label>
                </Tooltip>
                <input
                  type="text"
                  className="form-control"
                  id="seating"
                  value={currentDestination.seating}
                  onChange={this.onChangeSeating}
                />
              </div>

              <div className="form-group">
                <Tooltip vehicleNo="The town in which the touristguide is located" placement="right-start">
                <label htmlFor="seating">Loading Capacity</label>
                </Tooltip>
                <input
                    type="text"
                    className="form-control"
                    id="loading"
                    value={currentDestination.loading}
                    onChange={this.onChangeLoading}
                />
              </div>

              <div className="form-group">
                <Tooltip vehicleNo="The group of numbers used to indicate the position of the touristguide" placement="right-start">
                <label htmlFor="fee">Fee per km</label>
                </Tooltip>
                <input
                    type="text"
                    className="form-control"
                    id="fee"
                    value={currentDestination.fee}
                    onChange={this.onChangeFee}
                />
              </div>

              <div className="form-group">
                <Tooltip vehicleNo="The extent/measurement of the piece of land in which the touristguide is spread out" placement="right-start">
                <label htmlFor="driver">Driver</label>
                </Tooltip>
                <input
                    type="text"
                    className="form-control"
                    id="driver"
                    value={currentDestination.driver}
                    onChange={this.onChangeDriver}
                />
              </div>

              <div className="form-group">
                <Tooltip vehicleNo="The height of the touristguide in relation to sea level or ground level" placement="right-start">
                <label htmlFor="ac">A/C</label>
                </Tooltip>
                <input
                    type="text"
                    className="form-control"
                    id="ac"
                    value={currentDestination.ac}
                    onChange={this.onChangeAc}
                />
              </div>

              <div className="form-group">
                <Tooltip vehicleNo="The height of the touristguide in relation to sea level or ground level" placement="right-start">
                <label htmlFor="ac">Availability</label>
                </Tooltip>
                <input
                    type="text"
                    className="form-control"
                    id="ac"
                    value={currentDestination.availability}
                    onChange={this.onChangeAvailability}
                />
              </div>

            </form>

            <Tooltip vehicleNo="The record of the touristguide shown above will be deleted from the database after this button is clicked" placement="right-start">
            <button
              className="submitBtnRed"
              onClick={this.deleteVehicle}>
              Delete Vehicle
            </button>
            </Tooltip>

            <Tooltip vehicleNo="The touristguide details changed above will be updated in the database after this button is clicked" placement="right-start">
            <button
              type="submit"
              className="submitBtnGreen"
              onClick={this.updateVehicle}>
              Update Vehicle
            </button>
            </Tooltip>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Vehicle...</p>
          </div>
        )}
      </div>
    );
  }
}
