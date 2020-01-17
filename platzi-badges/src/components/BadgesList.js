import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";

import BadgesListItem from "./BadgesListItem";

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
              <Link
                to={`/badges/${badge.id}/edit`}
                className="text-reset text-decoration-none w-100"
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
