import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import logo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";

class Home extends React.Component {
  render() {
    return (
      <div className="Home d-flex align-items-center">
        <div className="container align-items-center">
          <div className="row">
            <div className="col-5">
              <img src={logo} alt="logo" className="img-fluid" />
              <h4 className="text-uppercase mt-2">Print your badges</h4>
              <p>The easiest way to manage you conference</p>
              <div className="container-fluid text-center">
                <Link to="/badges" className="btn btn-primary">
                  Start now
                </Link>
              </div>
            </div>
            <div className="col-7">
              <img src={astronauts} alt="logo" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
