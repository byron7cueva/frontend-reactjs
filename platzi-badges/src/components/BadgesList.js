import React from "react";
import { Link } from "react-router-dom";

import "./styles/BadgesList.css";

import BadgesListItem from "./BadgesListItem";

function BadgesList(props) {
  let badges = props.badges;
  let { query, setQuery, filterBadges } = useSearchBadges(badges);

  if (filterBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={event => {
              setQuery(event.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={event => {
            setQuery(event.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filterBadges.map(badge => {
          return (
            <li key={badge.id} className="BadgesListItem mb-2">
              <Link
                to={`/badges/${badge.id}`}
                className="text-reset text-decoration-none w-100"
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function useSearchBadges(badges) {
  let [query, setQuery] = React.useState("");
  let [filterBadges, setfilterBadges] = React.useState(badges);

  //Memoriza resultados, ejecuta la funcion siempre y cuando los parametros cambien
  //de valos y si se repiten estos ya estan memorizados y se devuelven
  React.useMemo(() => {
    //Funcion a ejecutar
    let result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setfilterBadges(result);
  }, [badges, query]); //Parametros utilizados para devolver el resultado y que se van a validar si cambian
  return { query, setQuery, filterBadges };
}

export default BadgesList;
