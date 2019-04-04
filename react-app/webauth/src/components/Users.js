import React from "react";
import axios from "axios";

import axiosWithAuth from "./axiosWithAuth";

class Users extends React.Component {
  state = {
    users: []
  };

  render() {
    return (
      <>
        <h2>List of Users</h2>
        <>
          {this.state.users.map(users => (
            <h3 key={users.id}>
              USERNAME: {users.username} | DEPARTMENT: {users.department}
            </h3>
          ))}
        </>
      </>
    );
  }

  componentDidMount = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/users")
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(error => {
        console.error("USERS ERROR", error);
      });
  };
}

export default Users;
