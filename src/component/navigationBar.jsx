import React from "react";
import {
  Navbar,
  Button,
  Form,
  Nav,
  Dropdown,
  Image,
  Badge,
} from "react-bootstrap";

// assets
import { LOGO } from "../assets";
import avatar from "../assets/avatar2.png";

// libraries
import { Link } from "react-router-dom";

// state management
import { connect } from "react-redux";
import { loginAction, logoutAction } from "../redux/actions";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogedIn: false,
      categoryVisibility: false,
    };
  }

  render() {
    console.log(this.props.cart);
    return (
      <div>
        <Navbar style={style.navbar} variant="light" fixed="top">
          <div className="container">
            <Navbar.Brand
              target="_blank"
              href="https://www.freepik.com/free-photos-vectors/logo'%3ELogo"
            >
              <Image src={LOGO.default} style={style.navbarLogo}></Image>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link style={style.navbarLink} as={Link} to={"/"}>
                home
              </Nav.Link>
              <Nav.Link
                style={style.navbarLink}
                href=""
                onClick={() => {
                  this.setState({
                    categoryVisibility: !this.state.categoryVisibility,
                  });
                }}
              >
                categories
              </Nav.Link>
              <Form.Control
                type="text"
                placeholder="cari iphone x"
                className="ml-3"
                style={style.searchForm}
              />
            </Nav>
            <Form inline>
              {this.props.username ? (
                <>
                  <Button variant="default" className="mr-1">
                    <i
                      className="fas fa-shopping-cart"
                      style={style.navIcon}
                    ></i>
                    <Badge variant="danger" style={style.badgeCart}>
                      {this.props.cart.length}
                    </Badge>
                  </Button>

                  <Button variant="default" className="mr-1">
                    <i className="fas fa-bell" style={style.navIcon}></i>
                  </Button>
                  <Button variant="default" className="mr-1">
                    <i className="fas fa-envelope" style={style.navIcon}></i>
                  </Button>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="default"
                      style={style.navUserButton}
                      id="dropdown-basic"
                    >
                      <Image src={avatar} width="35"></Image>
                      <span style={style.navUserName}>Ade Mahendra</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="mt-2" style={style.dropdownMenu}>
                      <Dropdown.Item style={style.dropdownItem} href="#">
                        <i className="fas fa-user mr-2"></i> profile
                      </Dropdown.Item>
                      <Dropdown.Item style={style.dropdownItem} href="#">
                        <i className="fas fa-heart mr-2"></i> wishlists
                      </Dropdown.Item>
                      <Dropdown.Item style={style.dropdownItem} href="#">
                        <i className="fas fa-history mr-2"></i> history
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item style={style.dropdownItem}>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={this.props.logoutAction}
                          block
                        >
                          logout
                        </Button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <div style={style.navAuthButton} className="nav-auth-button">
                  <Button
                    as={Link}
                    to={"/login"}
                    variant="primary"
                    className="mr-1"
                    style={style.navLoginButton}
                  >
                    login
                  </Button>

                  <Button
                    as={Link}
                    to={"/register"}
                    variant="primary"
                    className="mr-1"
                    style={style.navRegButton}
                  >
                    register
                  </Button>
                </div>
              )}
            </Form>
          </div>
        </Navbar>
        {this.state.categoryVisibility ? (
          <div style={style.category}>
            <div className="container">
              <a href="/" style={style.categoryItem}>
                <i className="fas fa-shopping-basket"></i> All categories
              </a>
              <a href="/" style={style.categoryItem}>
                <i className="fas fa-home"></i> Home living
              </a>
              <a href="/" style={style.categoryItem}>
                <i className="fas fa-mobile-alt"></i> Handphone
              </a>
              <a href="/" style={style.categoryItem}>
                <i className="fas fa-laptop"></i> Computer
              </a>
              <a href="/" style={style.categoryItem}>
                <i className="fas fa-pencil-ruler"></i> Stationary
              </a>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

const style = {
  category: {
    width: "100%",
    height: "50px",
    backgroundColor: "#fff",
    marginTop: "50px",
    position: "fixed",
    zIndex: "99",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #eaeaea",
  },
  categoryItem: {
    textDecoration: "none",
    color: "#424242",
    backgroundColor: "#eaeaea",
    padding: "5px",
    borderRadius: "6px",
    fontSize: "14px",
    fontWeight: "500",
    marginRight: "5px",
  },
  badgeCart: {
    borderRadius: "5px",
    border: "2px solid #fff",
    position: "absolute",
    marginTop: "10px",
    marginLeft: "-5px",
    fontSize: "10px",
  },
  navbar: {
    padding: "2px",
    backgroundColor: "#fff",
    borderBottom: "1px solid #F9FAFB",
  },
  navbarLogo: {
    height: "30px",
  },
  searchForm: {
    padding: "10px",
  },
  navbarLink: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#475569",
  },
  navIcon: {
    color: "#9CA3AF",
  },
  navRegButton: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#fff",
    backgroundColor: "#0275d8",
    border: "none",
    padding: "10px 15px",
  },
  navLoginButton: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#0275d8",
    backgroundColor: "#fff",
    border: "2px solid #0275d8",
    padding: "8px 10px",
  },
  navUserButton: {
    backgroundColor: "#F3F4F6",
    padding: "3px 5px",
    paddingRight: "10px",
    margin: "3px",
    borderRadius: "8px",
  },
  navUserName: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#475569",
    marginLeft: "8px",
    marginRight: "5px",
  },

  dropdownItem: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#475569",
    padding: "5px 15px",
  },
  dropdownMenu: {
    border: "none",
    position: "absolute",
    marginTop: "50px",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  },

  navAuthButton: {
    margin: "5px",
  },

  // cart
  cartQuickView: {
    width: "200px",
    height: "200px",
    position: "fixed",
    zIndex: "99",
    right: "0",
    marginRight: "470px",
    marginTop: "60px",
    borderRadius: "7px",
    backgroundColor: "#fff",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  },
};

const mapStateToProps = (state) => {
  return {
    username: state.userReducer.username,
    cart: state.userReducer.cart,
  };
};

export default connect(mapStateToProps, { loginAction, logoutAction })(
  NavigationBar
);
