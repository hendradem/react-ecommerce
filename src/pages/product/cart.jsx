import React from "react";
import {
  Row,
  Col,
  Card,
  Image,
  Button,
  Form,
  Modal,
  InputGroup,
} from "react-bootstrap";
import { connect } from "react-redux";
import { deleteCart } from "../../redux/actions";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productQty: 1,
      checkoutAuthModal: false,
      passwordError: false,
    };
  }

  getCartData = () => {
    return this.props.cart.map((item, index) => {
      return (
        <Card key={index} style={style.productCard}>
          <div style={style.productCardImgWrapper}>
            <Image style={style.productCardImg} src={item.image} />
          </div>
          <div style={style.productCardDetailWrapper}>
            <h5 style={style.productTitle}>{item.name.toLowerCase()}</h5>
            <p style={style.productSize}>Size M / Color Blue</p>
            <p style={style.productPrice}>
              Rp {(item.price * item.qty).toLocaleString()}
            </p>
          </div>
          <div style={style.productActionBtn}>
            <Form.Control
              type="number"
              className="mr-1"
              value={item.qty}
              style={style.productQty}
              onChange={(e) => this.qtyOnChange(e, item.qty, item.stock)}
            />

            <Button
              variant="light"
              size="sm"
              className="mr-1"
              style={style.btnCardActionBtn}
            >
              <i class="fas fa-heart"></i>
            </Button>
            <Button
              variant="light"
              size="sm"
              style={style.btnCardActionBtn}
              onClick={() => {
                this.onDeleteCart(this.props.userID, index);
              }}
            >
              <i class="fas fa-trash"></i>
            </Button>
          </div>
        </Card>
      );
    });
  };

  qtyOnChange = (e, currentProductQty, currentProductStock) => {
    // this.setState({ productQty: +e.target.value });
    // let stock = this.state.productStock;

    e.target.value = this.state.productQty;
    console.log(e.target.value);

    // if (+e.target.value <= 1) {
    //   this.setState({ limitQty: true });
    // }
    // if (+e.target.value >= currentProductStock) {
    //   this.setState({ productQty: stock });
    //   alert("udah maksimal nih");
    // }
  };

  onDeleteCart = (userID, productID) => {
    this.props.deleteCart(userID, productID);
  };

  checkoutAuth = () => {
    let pass = this.refs.checkoutPass.value;
    let userPass = this.props.userPass;

    if (pass === userPass) {
      this.setState({ passwordError: false });
      setTimeout(() => {
        this.addToOrder();
      }, 1000);
    } else {
      this.setState({ passwordError: true });
    }
  };

  checkoutAuthClose = () => {
    this.setState({ checkoutAuthModal: false });
  };

  addToOrder = () => {
    alert(123);
  };

  render() {
    return (
      <div className="container mt-5 p-0">
        <Modal
          backdrop="static"
          keyboard={false}
          size="sm"
          centered
          show={this.state.checkoutAuthModal}
          onHide={this.checkoutAuthClose}
        >
          <Modal.Body>
            <h4>Verify your identity</h4>

            <InputGroup hasValidation>
              <Form.Control
                type="password"
                ref="checkoutPass"
                placeholder="your password"
                required
                isInvalid={this.state.passwordError}
              />
              <Form.Control.Feedback type="invalid">
                Password doesnt match
              </Form.Control.Feedback>
            </InputGroup>

            <div className="mt-3" style={style.verifyBtn}>
              <Button
                variant="primary"
                className="mr-1"
                style={style.btnCancelVerify}
                onClick={() => {
                  this.setState({ checkoutAuthModal: false });
                }}
              >
                cancel
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  this.checkoutAuth();
                }}
                style={style.btnProcessVerify}
              >
                verify
              </Button>
            </div>
          </Modal.Body>
        </Modal>

        <div className="cart-wrapper" style={style.cartWrapper}>
          <Row>
            <Col sm={8}>{this.getCartData()}</Col>
            <Col sm={4}>
              <Card style={style.cartTotal}>
                <Card.Body style={style.cartTotalBody}>
                  <p className="mb-0">
                    Total price:{" "}
                    <span className="float-right">Rp 4.530.000</span>
                  </p>
                  <p>
                    Discount: <span className="float-right">0%</span>
                  </p>
                  <hr />
                  <p>
                    <strong>Total:</strong>
                    <span
                      className="float-right"
                      style={style.totalPaymentText}
                    >
                      <strong>Rp 4.530.000</strong>
                    </span>
                  </p>
                  <Button
                    block
                    variant="primary"
                    style={style.btnCheckOut}
                    onClick={() => {
                      this.setState({ checkoutAuthModal: true });
                    }}
                  >
                    Checkout
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const style = {
  cartWrapper: {
    backgroundColor: "#fff",
    marginBottom: "200px",
    marginTop: "100px",
    padding: "20px",
    border: "1px solid #F9FAFB",
    // boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },
  productCard: {
    padding: "7px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "8px",
    border: "1px solid #F9FAFB",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  },

  productCardImgWrapper: {
    width: "20%",
    height: "70px",
    borderRadius: "5px",
    marginRight: "10px",
    border: "1px solid #F9FAFB",
  },
  productCardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "5px",
  },

  productCardDetailWrapper: {
    width: "80%",
  },
  productTitle: {
    fontSize: "13px",
    marginTop: "3px",
    marginBottom: "2px",
    color: "#0D111B",
  },
  productSize: {
    fontSize: "11px",
    marginBottom: "0",
    color: "#9CA3AF",
  },
  productPrice: {
    fontSize: "12px",
    fontWeight: "500",
    color: "#4B5563",
    marginBottom: "0",
  },

  // action btn
  productActionBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    marginRight: "20px",
  },
  productQty: {
    width: "50px",
    border: "1px solid #eaeaea",
    height: "30px",
    padding: "3px",
    paddingLeft: "10px",
  },
  productQtyBtn: {
    border: "1px solid #eaeaea",
    backgroundColor: "#fff",
    padding: "0 7px",
  },
  addToCartBtn: {
    fontSize: "14px",
    fontWeight: "500",
  },
  btnCardActionBtn: {
    backgroundColor: "#fff",
    border: "1px solid #eaeaea",
    fontWeight: "500",
    color: "#4B5563",
    fontSize: "12px",
    padding: "5px 10px",
  },

  // cart total
  cartTotal: {
    border: "1px solid #F9FAFB",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
  cartTotalBody: {
    fontSize: "14px",
    color: "#31353b",
  },
  totalPaymentText: {
    color: "#fa591d",
  },
  btnCheckOut: {
    fontWeight: "500",
  },

  // verify modal
  verifyBtn: {
    display: "flex",
  },
  btnCancelVerify: {
    width: "100%",
    fontSize: "14px",
    backgroundColor: "transparent",
    color: "#64748B",
    border: "1.6px solid #94A3B8",
  },
  btnProcessVerify: {
    width: "100%",
    fontSize: "14px",
  },
};

const mapStateToProps = (state) => {
  return {
    cart: state.userReducer.cart,
    userID: state.userReducer.id,
    userPass: state.userReducer.password,
  };
};

export default connect(mapStateToProps, { deleteCart })(Cart);
