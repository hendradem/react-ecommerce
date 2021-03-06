import React from "react";
import {
  Alert,
  Button,
  Form,
  Row,
  Col,
  Container,
  Image,
} from "react-bootstrap";

// assets
import heroImage from "../../assets/loginhero5.png";

// libraries
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { loginAction } from "../../redux/actions";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      usernameEmpty: [false, ""],
      passwordEmpty: [false, ""],
    };
  }

  onLogin = (e) => {
    e.preventDefault();
    let userLoginData = {
      username: this.refs.username.value,
      password: this.refs.password.value,
    };

    if (userLoginData.username === "") {
      this.setState({ usernameEmpty: [true, "Username is required"] });
    }
    if (userLoginData.password === "") {
      this.setState({ passwordEmpty: [true, "Password is required"] });
    } else {
      this.props.loginAction(userLoginData.username, userLoginData.password);
    }
  };

  render() {
    if (this.props.username) {
      return <Redirect to="/"></Redirect>;
    }
    return (
      <div>
        <Container fluid>
          <Row style={style.loginContainer}>
            <Col style={style.loginHero}>
              <Image
                style={style.loginHeroImage}
                src={heroImage}
                className="animate__fadeInDown"
              ></Image>
            </Col>

            <Col style={style.loginForm}>
              <Form style={style.loginFormWrapper}>
                <Alert
                  show={this.props.loginFailed}
                  variant="danger"
                  dismissible
                >
                  <strong>Login failed,</strong> check your account
                </Alert>
                <div className="form-title mb-4 mt-6">
                  <h2>Welcome back!</h2>
                  <Form.Text muted>Plese login with your account</Form.Text>
                </div>
                <hr />

                <Form.Group controlId="formBasicEmail" hasValidation>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    ref="username"
                    type="text"
                    placeholder="Username"
                    required
                    isInvalid={this.state.usernameEmpty[0]}
                    onChange={(e) =>
                      this.setState({
                        usernameEmpty: [false, ""],
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.usernameEmpty[1]}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type={this.state.showPassword ? "text" : "password"}
                    placeholder="Password"
                    ref="password"
                    required
                    isInvalid={this.state.passwordEmpty[0]}
                    onChange={(e) =>
                      this.setState({
                        passwordEmpty: [false, ""],
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    This form is required
                  </Form.Control.Feedback>
                  {!this.state.passwordEmpty[0] ? (
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                          showPassword: !this.state.showPassword,
                        });
                      }}
                      className="search-icon"
                      style={style.showMyPasswordButton}
                    >
                      {this.state.showPassword ? (
                        <i className="fas fa-eye-slash"></i>
                      ) : (
                        <i className="fas fa-eye"></i>
                      )}
                    </a>
                  ) : (
                    <></>
                  )}
                </Form.Group>

                <div style={style.loginForgetPass} className="mt-4">
                  <Form.Text as={Link} to="/login" muted>
                    Forget password?
                  </Form.Text>
                  <Form.Text as={Link} to="/register" muted>
                    You have no account?
                  </Form.Text>
                </div>

                <Button
                  variant="default"
                  type="submit"
                  style={style.authButton}
                  onClick={this.onLogin}
                  block
                >
                  login
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const style = {
  loginContainer: {
    backgroundColor: "#fff",
    width: "100vw",
    height: "100vh",
  },
  loginWrapper: {
    display: "flex",
    backgroundColor: "yellow",
    flexDirection: "row",
  },
  loginHero: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirections: "row",
    backgroundColor: "#4F46E5",
    color: "#fff",
  },
  loginHeroImage: {
    width: "80%",
  },
  thirdLogin: {
    display: "flex",
  },

  loginFormWrapper: {
    width: "50%",
  },
  loginForm: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  showMyPasswordButton: {
    position: "relative",
    marginTop: "-30px",
    marginRight: "10px",
    float: "right",
    zIndex: "9999",
  },
  showMyPassword: {
    fontSize: "13px",
    marginTop: "4px",
  },

  loginForgetPass: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    textDecoration: "none",
    fontSize: "13px",
  },
  authButton: {
    backgroundColor: "#0275d8",
    color: "#fff",
  },
};

const mapStateToProps = (state) => {
  return {
    loginFailed: state.userReducer.errorLogin,
    username: state.userReducer.username,
    registerStatus: state.userReducer.successRegister,
  };
};

export default connect(mapStateToProps, { loginAction })(LoginPage);
