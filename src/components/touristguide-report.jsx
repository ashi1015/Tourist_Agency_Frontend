import React, { Component } from "react";
import axios from "axios";
import { Col, Row } from "reactstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

class TouristGuideReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8085/api/touristGuides").then((response) => {
      this.setState({ guides: response.data.guides });
      console.log(response.data);
    });
  }


  printDocument() {
    const input = document.getElementById("viewtable");
    html2canvas(input).then((canvas) => {
      var imgWidth = 200;
      var pageHeight = 290;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      var position = 0;
      var heightLeft = imgHeight;
      pdf.addImage(imgData, "JPEG", 4, position, imgWidth, imgHeight);
      pdf.save("Tourist Guide List Report.pdf");
    });
  }

  render() {

    const {
      hotels
    } = this.state;

    return (
      <div className="report">
        <Row>
          <Col sm="3"></Col>
          <Col sm="9">
            <h1 className="topicviewOfferreport">Toruist Guide Report</h1>
            <br></br>
            <button
              onClick={this.printDocument}
              style={{
                borderRadius: "3px",
                textAlign: "center",
                width: "300px",
                marginLeft: "650px",
                fontWeight: "bold"
              }}
              variant="contained"
              color="primary"
            >
              <i
                className="fa fa-file-pdf-o fa-lg"
                aria-hidden="true"
                style={{ color: "red" }}
              >
                {" "}
                Generate PDF
              </i>
            </button>
            <br></br>
            <br></br>
            <div id="viewtable">
              <p>Report Date: {new Date().toLocaleString() + ""}</p>
              <h2 style={{ fontWeight: "bold", fontFamily: "serif", width: "500px"}}>
                Registered Tourist Guide List
              </h2>
              <br></br>
              <table className="table">
                <tr
                  style={{
                    backgroundColor: "#afeeee",
                    lineHeight: "30px",
                  }}
                >
                  <th>Toruist Guide Name</th>
                  <th>Language</th>
                  <th>Skills</th>
                </tr>


                {this.state.guides && this.state.guides.map((guide, index) => (
                    <tr
                      key={index}
                      style={{
                        borderBottom: "2px solid #ddd",
                      }}
                    >
                      <td style={{ paddingLeft: "0" }}>{guide.fullname}</td>
                      <td>{guide.languages}</td>
                      <td>{guide.skills}</td>
                      <hr /> <hr />
                    </tr>
                  ))}
              </table>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TouristGuideReport;
