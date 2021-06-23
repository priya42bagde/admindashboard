import React from "react";
import { withRouter } from "react-router-dom";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      err: ""
    };
    this.login = this.login.bind(this);
  }
  login(e) {
    e.preventDefault();
    var username = e.target.elements.username.value;
    var password = e.target.elements.password.value;
    if (username && password) {
      this.props.history.push("/welcome/" + username);
    } else {
      this.setState((er) => {
        return { err: "Invalid" };
      });
    }
  }
  render() {
    return (
      <div style={{flex: 5}}>
        <h1>Wanted to explore Admin Dashboard !!</h1>
        <h2>Mandatory to Login first to explore on various sections.</h2>
        <br/>
        <br/>
        <hr/>
        <br/>
        <h3>Login</h3>
        <span style={{ color: "red" }}>
          {this.state.err !== "" ? this.state.err : ""}
        </span>
        <form method="post" onSubmit={this.login.bind(this)}>
          Username: <input type="text" name="username" />
          Password: <input type="password" name="password" />
          <button type="submit" value="Login">
            Login Please
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);
