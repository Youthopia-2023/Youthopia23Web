import React, { Component } from "react";
import Youthopia from "../../assets/youthopia.png";
import "./SignUp.css";
import star1 from "../../assets/Star 4.svg";
import star2 from "../../assets/Group 6647.svg";
import star3 from "../../assets/Star 4.svg";
import line from "../../assets/Line 4.svg";
import ellipse from "../../assets/Ellipse.svg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      isDitStudent: false,
      collegeName: "",
      sapId: "",
      branch: "",
      year: "",
      password: "",
      identityProofImage: null,
      identityProofNumber: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCollegeChange = (event) => {
    const college = event.target.value;
    this.setState({ college });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="signUp-container">
          <img className="youthopia-logo" src={Youthopia}></img>
          <div className="signUp">
            <img src={star1} alt="star-1" className="star-1"></img>
            <img src={star2} alt="star-2" className="star-2"></img>
            <img src={star3} alt="star-3" className="star-3"></img>
            <img src={line} alt="line" className="line-4"></img>
            <img src={ellipse} alt="ellipse" className="ellipse"></img>
          </div>
          <div className="signup-form">
            <h2>Sign Up</h2>
            <form>
              <div className="name">
                <div className="input-container">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="input-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="isDitStudent"
                  checked={this.state.isDitStudent}
                  onChange={this.handleInputChange}
                />
                <label htmlFor="isDitStudent">
                  Are you from DIT?
                </label>
              </div>

              {this.state.isDitStudent ? (
                <div className="dit-details">
                  <div className="input-container">
                    <label htmlFor="sapId">SAP ID</label>
                    <input
                      type="text"
                      name="sapId"
                      value={this.state.sapId}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="branch">Branch</label>
                    <input
                      type="text"
                      name="branch"
                      value={this.state.branch}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="year">Year</label>
                    <input
                      type="text"
                      name="year"
                      value={this.state.year}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              ) : (
                <div className="non-dit-details">
                  <div className="input-container">
                    <label htmlFor="collegeName">College Name</label>
                    <input
                      type="text"
                      name="collegeName"
                      value={this.state.collegeName}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="identityProofImage">
                      Identity Proof Image
                    </label>
                    <input
                      type="file"
                      name="identityProofImage"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="identityProofNumber">
                      Identity Proof Number
                    </label>
                    <input
                      type="text"
                      name="identityProofNumber"
                      value={this.state.identityProofNumber}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="branchyear">
                    <div className="input-container">
                      <label htmlFor="branch">Branch</label>
                      <input
                        type="text"
                        name="branch"
                        value={this.state.branch}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="input-container">
                      <label htmlFor="year">Year</label>
                      <input
                        type="text"
                        name="year"
                        value={this.state.year}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="input-container">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default SignUpForm;
