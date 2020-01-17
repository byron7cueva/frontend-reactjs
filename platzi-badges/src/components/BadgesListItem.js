import React from "react";

import twitterImage from "../images/twitter.svg";
import Gravatar from "./Gravatar";

function BadgesListItem(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <Gravatar
            email={props.badge.email}
            className="BadgesListItem__avatar"
            alt="Avatar"
          />
        </div>
        <div className="col-9">
          <p className="mb-0 font-weight-bold">
            {props.badge.firstName} {props.badge.lastName}
          </p>
          <p className="mb-0 text-primary">
            <img src={twitterImage} alt="Twitter" /> @{props.badge.twitter}
          </p>
          <small className="mb-0">{props.badge.jobTitle}</small>
        </div>
      </div>
    </div>
  );
}

export default BadgesListItem;
