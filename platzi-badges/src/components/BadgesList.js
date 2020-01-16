import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";
import twitterImage from "../images/twitter.svg";

import Gravatar from "./Gravatar";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id} className="BadgesListItem mb-2">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-3">
                    <Gravatar
                      email={badge.email}
                      className="BadgesListItem__avatar"
                      alt="Avatar"
                    />
                  </div>
                  <div className="col-9">
                    <p className="mb-0 font-weight-bold">
                      {badge.firstName} {badge.lastName}
                    </p>
                    <p className="mb-0 text-primary">
                      <img src={twitterImage} alt="Twitter" /> @{badge.twitter}
                    </p>
                    <small className="mb-0">{badge.jobTitle}</small>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
