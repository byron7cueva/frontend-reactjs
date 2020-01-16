import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import logo from "../images/logo.png";

import CharacterCard from "./CharacterCard";
import Loading from "./Loading";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        info: {},
        results: []
      },
      page: 1,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.error) {
      return this.error.message;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <img src={logo} alt="Rick and Morty" />
          </div>
        </div>
        <ul className="row list-unstyled">
          {this.state.data.results.map(character => {
            return (
              <li key={character.id} className="col-6 col-sm-4 col-md-3 mb-2">
                <CharacterCard character={character} />
              </li>
            );
          })}
        </ul>
        <div className="container mb-2 text-center">
          {this.state.loading && <Loading />}
          {!this.state.loading && this.state.data.info.next && (
            <button onClick={this.handleClick} className="btn btn-primary">
              Cargar más..
            </button>
          )}
        </div>
      </div>
    );
  }

  handleClick = () => {
    this.fetchData();
  };

  async fetchData() {
    this.setState({ loading: true, error: null });

    try {
      let response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.page}`
      );
      let data = await response.json();

      this.setState({
        page: this.state.page + 1,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        loading: false
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }
}

export default App;
