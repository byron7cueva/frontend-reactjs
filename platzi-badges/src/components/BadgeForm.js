import React from "react";

class BadgeForm extends React.Component {
  /*state = {
    firstName: "",
    jobTitle: "Designer"
  };*/

  /*handleChange = event => {
    //console.log({ value: event.target.value, name: event.target.name });
    this.setState({
      //Tomando el nombre del input
      [event.target.name]: event.target.value
    });
  };*/

  handleClick(event) {
    console.log("Button was clicked");
  }

  handleSubmit = event => {
    //Detener que el formulario se envie
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <button
            type="submit"
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default BadgeForm;
