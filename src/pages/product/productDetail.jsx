import React from "react";
import axios from "axios";
import { Row, Col, Badge, Image, Table, Form, Button } from "react-bootstrap";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: {},
      productImage: [],
    };
  }

  componentDidMount() {
    let id = this.props.match.params.productId;
    axios.get(`http://localhost:2000/products/${id}`).then((res) => {
      this.setState({
        productDetail: res.data,
        productImage: res.data.images,
      });
    });
  }

  render() {
    console.log(this.state.productImage);
    return (
      <div className="container mt-5 p-0">
        <div style={style.productDetailWrapper}>
          <Row>
            <Col>
              <div style={style.productImageWrapper}>
                <Image
                  style={style.productImage}
                  src={this.state.productImage[0]}
                ></Image>
              </div>
            </Col>
            <Col>
              <div style={style.productDescriptioWrapper}>
                <h2 style={style.productTitle}>
                  {this.state.productDetail.name}
                </h2>
                <div style={style.productQuickDetail}>
                  <Badge variant="light" style={style.badgeRating}>
                    <i class="fas fa-star text-warning"></i> 3.4
                  </Badge>
                  <Badge
                    variant="light"
                    className="text-success"
                    style={style.badgeOrders}
                  >
                    <i class="fas fa-shopping-bag text-success"></i> 49 sold
                  </Badge>
                  <Badge
                    variant="light"
                    className="text-default"
                    style={style.badgeReviews}
                  >
                    31 reviews
                  </Badge>
                  <h3 style={style.productPrice}>
                    Rp {this.state.productDetail.price}
                  </h3>
                  <p style={style.productDescriptionText}>
                    {this.state.productDetail.description}
                    <a href="">read more</a>
                  </p>

                  <div className="spesification">
                    <Table striped hover size="sm">
                      <tbody>
                        <tr>
                          <td width="60">Model</td>
                          <td>Airmax 2219</td>
                        </tr>
                        <tr>
                          <td>Color</td>
                          <td>Airmax 2219</td>
                        </tr>
                        <tr>
                          <td>Delivery</td>
                          <td>Jakarta</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>

                  <div
                    className="productActionBtn"
                    style={style.productActionBtn}
                  >
                    <Form.Control
                      type="number"
                      value="1"
                      style={style.productQty}
                    />
                    <Button variant="primary">buy now</Button>
                    <Button variant="default" style={style.addToWishlistBtn}>
                      <i class="fas fa-cart-plus"></i>
                    </Button>
                    <Button variant="default" style={style.addToWishlistBtn}>
                      <i class="far fa-heart"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const style = {
  productDetailWrapper: {
    marginTop: "60px",
    backgroundColor: "#fff",
    // border: "1px solid #eaeaea",
    // boxShadow: "0 4px 2px rgba(0, 0, 0, 0.01), 0 2px 2px 0 rgba(0, 0, 0, 0.06)",
  },

  // image
  productImageWrapper: {
    width: "100%",
    backgroundColor: "coral",
  },
  productImage: {
    width: "100%",
  },

  // description
  productDescriptioWrapper: {
    padding: "40px",
  },
  productTitle: {
    fontWeight: "500",
    fontSize: "28px",
  },
  productPrice: {
    fontSize: "24px",
    fontWeight: "600",
    marginTop: "10px",
  },
  badgeReviews: {
    fontWeight: "500",
    backgroundColor: "#fff",
  },
  badgeOrders: {
    fontWeight: "500",
    backgroundColor: "#fff",
  },
  productDescriptionText: {
    marginTop: "10px",
    fontSize: "13px",
    color: "#6B7280",
  },

  // action btn
  productActionBtn: {
    display: "flex",
    position: "absolute",
    bottom: "0",
  },
  productQty: {
    width: "60px",
    marginRight: "10px",
  },
};

export default ProductDetail;
