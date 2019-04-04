import React from "react";
import axios from "axios";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    department: ""
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="string"
            name="username"
            value={this.state.username}
            placeholder="username"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.handleChange}
          />
          <input
            type="string"
            name="department"
            value={this.state.department}
            placeholder="department"
            onChange={this.handleChange}
          />
          <button>SIGN UP</button>
        </form>
      </>
    );
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/register", this.state)
      .then(res => {
        console.log(res);
        this.setState({
          username: "",
          password: "",
          department: ""
        });
        this.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default SignUp;
