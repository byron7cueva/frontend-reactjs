import React from "react";

import "./styles/BadgeEdit.css";
import header from "../images/platziconf-logo.svg";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";

import api from "../api";

class BadgeEdit extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      twitter: ""
    },
    loading: true,
    error: null
  };

  handleChange = event => {
    this.setState({
      form: {
        ...this.state.form, //Añadimos los valores que tenia el formulario anteriormente
        [event.target.name]: event.target.value //Y añadimes o sobrescribimos solo una propiedad
      }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      let data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit__hero-image img-fluid"
            src={header}
            alt="logo"
          />
        </div>

        <div className="container mb-4">
          {this.state.error && (
            <div className="row">
              <div className="col-8 offset-2">
                <div className="alert alert-danger">
                  {this.state.error.message}
                </div>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                twitter={this.state.form.twitter || "twitter"}
                email={this.state.form.email || "EMAIL"}
                avatarUrl="https://s.gravatar.com/avatar/fc867ad3e9d68fcf9f9eb2d721d5c28f?s=160"
              />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
