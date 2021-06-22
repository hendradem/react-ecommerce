import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions";
import { Row, Col, Badge, Image, Table, Form, Button } from "react-bootstrap";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: {},
      productImage: [],
      activeProductImage: null,
      productQty: 1,
      showLoginModal: false,
      hideModal: false,
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

  qtyOnChange = (e) => {
    this.setState({ productQty: +e.target.value });
    let stock = this.state.productDetail.stock;

    if (+e.target.value <= 1) {
      console.log(+e.target.value);
      this.setState({ productQty: 1 });
    }
    if (+e.target.value >= stock) {
      console.log(+e.target.value);
      this.setState({ productQty: stock });
    }
  };

  onAddToCart = () => {
    const { productDetail, productQty } = this.state;
    if (!this.props.username) {
      alert("login dulu");
    } else {
      let obj = {
        id: productDetail.id,
        name: productDetail.name,
        image: productDetail.images[0],
        price: productDetail.price,
        qty: productQty,
        stock: productDetail.stock,
      };

      this.props.addToCart(this.props.id, obj);
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
                    <i className="fas fa-star text-warning"></i> 3.4
                  </Badge>
                  <Badge
                    variant="light"
                    className="text-success"
                    style={style.badgeOrders}
                  >
                    <i className="fas fa-shopping-bag text-success"></i> 49 sold
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
                    <a href="/">read more</a>
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
                      onChange={(e) => this.qtyOnChange(e)}
                    />
                    <Button
                      variant="light"
                      style={style.productQtyBtn}
                      onClick={this.qtyOnPlus}
                    >
                      +
                    </Button>
                    <Button
                      block
                      variant="primary"
                      className="ml-2"
                      style={style.addToCartBtn}
                      onClick={this.onAddToCart}
                    >
                      Add to cart
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
    backgroundColor: "#fff",
    marginBottom: "200px",
    marginTop: "100px",
    padding: "20px",
    border: "1px solid #F9FAFB",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
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
    borderRadius: "5px",
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
    border: "1px solid #eaeaea",
    borderRadius: "5px",
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
    marginTop: "70px",
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
  addToCartBtn: {
    fontSize: "14px",
    fontWeight: "500",
  },

  // modal
  myModal: {
    border: "none",
    boxShadow: "none",
    padding: "0",
  },
  modalHeader: {
    // height: "100px",
  },
};

const mapStateToProps = (state) => {
  return {
    username: state.userReducer.username,
    id: state.userReducer.id,
  };
};
export default connect(mapStateToProps, { addToCart })(ProductDetail);
