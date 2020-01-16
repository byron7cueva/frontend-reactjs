import React from "react";

import "./styles/BadgesList.css";
import twitterImage from "../images/twitter.svg";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id} className="BadgesListItem mb-2">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-3">
                    <img
                      src={badge.avatarUrl}
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
