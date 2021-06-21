import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Row, Col, Badge, Image, Table, Form, Button } from "react-bootstrap";
import userReducer from "../../redux/reducers/userReducer";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: {},
      productImage: [],
      activeProductImage: null,
      productQty: 1,
    };
  }

  componentDidMount() {
    let id = this.props.match.params.productId;
    axios.get(`http://localhost:2000/products/${id}`).then((res) => {
      this.setState({
        productDetail: res.data,
        productImage: res.data.images,
        activeProductImage: res.data.images[0],
      });
    });
  }

  thumbImageClick = (imageSrc) => {
    this.setState({ activeProductImage: imageSrc });
  };

  qtyOnPlus = () => {
    this.setState({ productQty: this.state.productQty + 1 });
    let stock = this.state.productDetail.stock;
    if (this.state.productQty >= stock) {
      this.setState({ productQty: stock });
    }
  };

  qtyOnMin = () => {
    this.setState({ productQty: this.state.productQty - 1 });
    if (this.state.productQty <= 1) {
      this.setState({ productQty: 1 });
    }
  };

  render() {
    return (
      <div className="container mt-5 p-0">
        <div style={style.productDetailWrapper}>
          <Row>
            <Col>
              <div style={style.productImageWrapper}>
                <Image
                  style={style.productImage}
                  src={this.state.activeProductImage}
                ></Image>
              </div>
              <div style={style.productImageCarouselThumbWrapper}>
                {this.state.productImage.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={style.productImageCarouselThumb}
                      onClick={() => {
                        this.thumbImageClick(item);
                      }}
                    >
                      <Image
                        src={item}
                        style={style.productImageCarouselImg}
                      ></Image>
                    </div>
                  );
                })}
              </div>
            </Col>
            <Col>
              <div style={style.productDescriptioWrapper}>
                <h2 style={style.productTitle}>
                  {this.state.productDetail.name}
                </h2>
                <div style={style.productQuickDetail}>
                  <Badge variant="light" style={style.badgeRating}>
                    {this.state.productDetail.stock} in stock
                  </Badge>
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
                      onChange={(e) =>
                        this.setState({ productQty: +e.target.value })
                      }
                    />
                    <Button
                      variant="light"
                      style={style.productQtyBtn}
                      onClick={this.qtyOnPlus}
                    >
                      +
                    </Button>
                    <Button block variant="primary" className="ml-2">
                      buy now
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
    marginBottom: "200px",
    marginTop: "100px",
    // border: "1px solid #eaeaea",
    // boxShadow: "0 4px 2px rgba(0, 0, 0, 0.01), 0 2px 2px 0 rgba(0, 0, 0, 0.06)",
  },

  // image
  productImageWrapper: {
    width: "100%",
    height: "500px",
  },
  productImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  productImageCarouselThumbWrapper: {
    width: "80%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  productImageCarouselThumb: {
    width: "100px",
    marginTop: "10px",
    marginRight: "10px",
  },
  productImageCarouselImg: {
    width: "100%",
    borderRadius: "5px",
  },

  // description
  productDescriptioWrapper: {
    padding: "20px ",
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
    bottom: "0",
    width: "100%",
    marginTop: "100px",
  },
  productQty: {
    width: "50px",
    margin: "0 7px",
    border: "1px solid #eaeaea",
  },
  productQtyBtn: {
    border: "1px solid #eaeaea",
    backgroundColor: "#fff",
    padding: "0 4px",
  },
};

const mapStateToProps = (state) => {
  return {
    isUserLogedIn: this.userReducer.username,
  };
};

export default connect(mapStateToProps, null)(ProductDetail);
