import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions";

class Product extends React.Component {
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
      <div style={style.productCardWrapper}>
        <Card style={style.productCard}>
          <div style={style.cardTopAction}>
            <Badge variant="danger" style={style.discountBadge}>
              10% Off
            </Badge>
          </div>
          <div style={style.cardImageWrapper}>
            <Card.Img
              style={style.cardImage}
              variant="top"
              src={this.props.productImage}
            />
          </div>
          <Button variant="default" style={style.addToWishlistBtn}>
            <i className="far fa-heart"></i>
          </Button>
          <Card.Body
            className="p-2 pb-2"
            style={style.cardBody}
            as={Link}
            to={`/product/${this.props.productId}`}
          >
            <div style={style.productTitleWrapper}>
              <p style={style.productTitle}>
                {this.props.productTitle.toLowerCase()}
              </p>
            </div>
            <p style={style.productPrice}>
              Rp {this.props.productPrice.toLocaleString()}
            </p>
            <div style={style.productQuickDetail}>
              <Badge variant="light" style={style.badgeRating}>
                <i className="fas fa-star text-warning"></i> 3.4
              </Badge>
              <Badge
                variant="light"
                className="text-success"
                style={style.badgeOrders}
              >
                <i className="fas fa-shopping-bag text-success"></i> 49 orders
              </Badge>
              <Badge
                variant="light"
                className="text-default"
                style={style.badgeReviews}
              >
                31 reviews
              </Badge>
            </div>
          </Card.Body>
          <div style={style.productCardFooter}>
            <Button
              variant="primary"
              className="mr-1"
              style={style.addToCartBtn}
              onClick={this.onAddToCart}
              block
            >
              add to card <i className="fas fa-cart-plus ml-1"></i>
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}

const style = {
  productCardWrapper: {
    display: "inline-block",
  },
  productCard: {
    border: "none",
    width: "215px",
    marginRight: "10px",
    boxSizing: "border-box",
    marginBottom: "100px",
    boxShadow: "0 4px 2px rgba(0, 0, 0, 0.01), 0 2px 2px 0 rgba(0, 0, 0, 0.06)",
  },
  cardBody: {
    textDecoration: "none",
  },
  cardTopAction: {
    position: "absolute",
    width: "88%",
    margin: "10px",
  },
  discountBadge: {
    fontSize: "10px",
    padding: "6px",
  },
  cardLoveBtn: {
    position: "absolute",
    float: "right",
    right: "0",
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "1px 5px",
  },
  cardImageWrapper: {
    height: "150px",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  productTitleWrapper: {
    height: "40px",
    width: "150px",
  },
  productTitle: {
    fontSize: "14px",
    marginBottom: "0",
    fontWeight: "500",
    color: "#3A4047",
    textDecoration: "none",
    lineHeight: "1.4",
  },
  productQuickDetail: {
    fontSize: "14px",
    marginTop: "0",
  },
  badgeRating: {},
  badgeReviews: {
    fontWeight: "normal",
    backgroundColor: "#fff",
  },
  badgeOrders: {
    fontWeight: "normal",
    backgroundColor: "#fff",
  },
  productPrice: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#F36E2D",
    marginBottom: "0px",
    marginTop: "3px",
  },

  productCardFooter: { margin: "10px" },
  addToCartBtn: {
    fontSize: "12px",
    fontWeight: "600",
  },
  addToWishlistBtn: {
    padding: "6px 8px",
    fontSize: "12px",
    fontWeight: "600",
    borderRadius: "6px",
    position: "absolute",
    right: "0",
    marginTop: "135px",
    marginRight: "10px",
    backgroundColor: "#fff",
    boxShadow:
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  },
};

export default connect(null, { addToCart })(Product);
