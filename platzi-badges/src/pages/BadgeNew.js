import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      twitter: ""
    }
  };

  handleChange = event => {
    //Primer
    /*const nextForm = this.state.form;
    nextForm[event.target.name] = event.target.value;
    this.setState({
      form: nextForm
    });*/

    //Segunda forma
    this.setState({
      form: {
        ...this.state.form, //Añadimos los valores que tenia el formulario anteriormente
        [event.target.name]: event.target.value //Y añadimes o sobrescribimos solo una propiedad
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                avatarUrl="https://s.gravatar.com/avatar/fc867ad3e9d68fcf9f9eb2d721d5c28f?s=160"
              />
            </div>
            <div className="col-6">
              <BadgeForm
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

export default BadgeNew;
