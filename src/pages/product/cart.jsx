import React from "react";
import { Row, Col, Card, Image, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteCart } from "../../redux/actions";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limitQty: false,
      productQty: 1,
      productStock: 10,
      price: null,
      totalPrice: null,
    };
  }

  qtyOnChange = (e, currentProductQty, currentProductStock) => {
    // this.setState({ productQty: +e.target.value });
    // let stock = this.state.productStock;

    e.target.value = this.state.productQty;

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

  render() {
    return (
      <div className="container mt-5 p-0">
        <div className="cart-wrapper" style={style.cartWrapper}>
          <Row>
            <Col sm={8}>
              <h6>Your cart ({this.props.cart.length})</h6>
              {this.getCartData()}
            </Col>
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
                    Total: <span className="float-right">Rp 4.530.000</span>
                  </p>
                  <Button variant="primary" block>
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
    marginTop: "8px",
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
    marginTop: "27px",
  },
  cartTotalBody: {
    fontSize: "13px",
    color: "#667085",
  },
};

const mapStateToProps = (state) => {
  return {
    cart: state.userReducer.cart,
    userID: state.userReducer.id,
  };
};

export default connect(mapStateToProps, { deleteCart })(Cart);
