import React from "react";
import { Link } from "react-router-dom";
import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";

import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";
import api from "../api";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. constructor()");
    this.state = {
      data: undefined,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    console.log("3. componentDidMount()");
    /*this.timeoutId = setTimeout(() => {
      this.setState({
        data: undefined
      });
    }, 3000);*/

    //Polling
    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDisUpdate()");
    //Imprimierndo los valores que tenia antes
    /*console.log({
      prevProps,
      prevState
    });*/

    //Imprimiendo los valores actuales
    /*console.log({
      props: this.props,
      state: this.state
    });*/
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log("6. componentWillUnmount()");
    //clearTimeout(this.timeoutId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      let data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    console.log("2/4. render()");

    if (this.state.loading && this.state.data === undefined) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badge__container container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
              {this.state.loading && <MiniLoader />}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
