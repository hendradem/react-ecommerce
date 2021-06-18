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
import { Link, Redirect } from "react-router-dom";

import heroImage from "../../assets/loginhero4.png";

// state management
import { registerAction } from "../../redux/actions";
import { connect } from "react-redux";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showConfirmPassword: false,
      emailEmpty: [false, ""],
      usernameEmpty: [false, ""],
      passwordEmpty: [false, ""],
      password2Empty: [false, ""],
    };
  }

  onRegister = (e) => {
    e.preventDefault();
    let userRegisterData = {
      email: this.refs.email.value,
      username: this.refs.username.value,
      password: this.refs.password.value,
      confirmPassword: this.refs.confirmpassword.value,
    };

    let obj = {
      email: userRegisterData.email,
      username: userRegisterData.username,
      password: userRegisterData.password,
      role: "user",
    };

    if (userRegisterData.email == "") {
      this.setState({ emailEmpty: [true, "Email is required"] });
    }
    if (userRegisterData.username == "") {
      this.setState({ usernameEmpty: [true, "Username is required"] });
    }
    if (userRegisterData.password == "") {
      this.setState({ passwordEmpty: [true, "Password is required"] });
    }
    if (userRegisterData.confirmPassword == "") {
      this.setState({ password2Empty: [true, "Password is required"] });
    } else {
      return this.props.registerAction(obj);
    }
  };

  render() {
    if (this.props.registerSuccess) {
      return <Redirect to="/login" delay={2000} />;
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
                <div className="form-title mb-4">
                  <h2>Welcome to OnlineShop!</h2>
                  <Form.Text muted>
                    Plese fill form below to register your account
                  </Form.Text>
                </div>
                <hr />

                {/* success register alert */}
                <Alert show={this.props.registerSuccess} variant="success">
                  <strong>Success,</strong> Register success!
                </Alert>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    ref="email"
                    isInvalid={this.state.emailEmpty[0]}
                    onChange={(e) => {
                      this.setState({ emailEmpty: [false, ""] });
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.emailEmpty[1]}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    ref="username"
                    isInvalid={this.state.usernameEmpty[0]}
                    onChange={(e) => {
                      this.setState({ usernameEmpty: [false, ""] });
                    }}
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
                    isInvalid={this.state.passwordEmpty[0]}
                    onChange={(e) => {
                      this.setState({ passwordEmpty: [false, ""] });
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.passwordEmpty[1]}
                  </Form.Control.Feedback>

                  {!this.state.passwordEmpty[0] ? (
                    <a
                      onClick={() => {
                        this.setState({
                          showPassword: !this.state.showPassword,
                        });
                      }}
                      className="search-icon"
                      style={style.showMyPasswordButton}
                    >
                      {this.state.showPassword ? (
                        <i class="fas fa-eye-slash"></i>
                      ) : (
                        <i class="fas fa-eye"></i>
                      )}
                    </a>
                  ) : (
                    <></>
                  )}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control
                    type={this.state.showConfirmPassword ? "text" : "password"}
                    placeholder="Password"
                    ref="confirmpassword"
                    isInvalid={this.state.password2Empty[0]}
                    onChange={(e) => {
                      this.setState({ password2Empty: [false, ""] });
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {this.state.password2Empty[1]}
                  </Form.Control.Feedback>
                  {!this.state.password2Empty[0] ? (
                    <a
                      onClick={() => {
                        this.setState({
                          showConfirmPassword: !this.state.showConfirmPassword,
                        });
                      }}
                      className="search-icon"
                      style={style.showMyPasswordButton}
                    >
                      {this.state.showConfirmPassword ? (
                        <i class="fas fa-eye-slash"></i>
                      ) : (
                        <i class="fas fa-eye"></i>
                      )}
                    </a>
                  ) : (
                    <></>
                  )}
                </Form.Group>

                <div style={style.regForgetPass} className="mt-4">
                  <Form.Text as={Link} to="/login" muted>
                    I have my account
                  </Form.Text>
                </div>

                <Button
                  variant="default"
                  type="submit"
                  style={style.authButton}
                  block
                  onClick={this.onRegister}
                >
                  create my account
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
    width: "60%",
  },
  thirdLogin: {
    display: "flex",
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

  loginFormWrapper: {
    width: "50%",
  },

  regForgetPass: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    textDecoration: "none",
    fontSize: "13px",
  },
  authButton: {
    backgroundColor: "#4F46E5",
    color: "#fff",
  },
};

const mapStateToProps = (state) => {
  return {
    registerSuccess: state.userReducer.successRegister,
    registerFailed: state.userReducer.errorRegister,
  };
};

export default connect(mapStateToProps, { registerAction })(RegisterPage);
