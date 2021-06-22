import React from "react";
import { Alert, Row, Col, Card, Image, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productQty: 1,
    };
  }

  render() {
    return (
      <div className="container mt-5 p-0">
        <div className="cart-wrapper" style={style.cartWrapper}>
          <Row>
            <Col sm={8}>
              <h6>Your cart (4)</h6>

              <Card style={style.productCard}>
                <div style={style.productCardImgWrapper}>
                  <Image
                    style={style.productCardImg}
                    src="https://kickz.akamaized.net/en/media/images/p/1200/WMNS_NIKE_AIR_MAX_90_SLIDE-WHITE_SMOKE_GREY_ROSE_LT_SMOKE_GREY-1.jpg"
                  />
                </div>
                <div style={style.productCardDetailWrapper}>
                  <h5 style={style.productTitle}>
                    NIKE WMNS NIKE AIR MAX 90 SLIDE
                  </h5>
                  <p style={style.productSize}>Size M / Color Blue</p>
                  <p style={style.productPrice}>Rp 1.345.000</p>
                </div>
                <div style={style.productActionBtn}>
                  <Button
                    variant="light"
                    style={style.productQtyBtn}
                    onClick={this.qtyOnMin}
                  >
                    -
                  </Button>
                  <Form.Control
                    type="text"
                    value={this.state.productQty}
                    style={style.productQty}
                    onChange={(e) => this.qtyOnChange(e)}
                  />
                  <Button
                    variant="light"
                    style={style.productQtyBtn}
                    onClick={this.qtyOnPlus}
                  >
                    +
                  </Button>
                  <div>
                    <Button variant="light" size="sm">
                      <i class="fas fa-trash"></i>
                    </Button>
                    <Button variant="light" size="sm">
                      <i class="fas fa-trash"></i>
                    </Button>
                    <Button variant="light" size="sm">
                      <i class="fas fa-trash"></i>
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col sm={4}>
              <Alert variant="success"> Cart page </Alert>
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
    fontSize: "14px",
    marginTop: "5px",
    marginBottom: "0",
  },
  productSize: {
    fontSize: "12px",
    marginTop: "2px",
    marginBottom: "0",
    color: "#9CA3AF",
  },
  productPrice: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#F36E2D",
    marginBottom: "0",
    marginTop: "2px",
  },

  // action btn
  productActionBtn: {
    display: "flex",
    width: "100%",
    height: "30px",
    float: "right",
    backgroundColor: "coral",
  },
  productQty: {
    width: "50px",
    margin: "0 7px",
    border: "1px solid #eaeaea",
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
};

const mapStateToProps = (state) => {
  return {
    cart: state.userReducer.cart,
  };
};

export default connect(mapStateToProps)(Cart);
