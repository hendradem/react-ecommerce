import React from "react";
import { Card, Button, Badge, Tooltip } from "react-bootstrap";
import product from "../../assets/product/mbp.jpg";

class Product extends React.Component {
  render() {
    return (
      <Card style={style.productCard}>
        <div style={style.cardTopAction}>
          <Badge variant="danger" style={style.discountBadge}>
            10% Off
          </Badge>
        </div>
        <div style={style.cardImageWrapper}>
          <Card.Img style={style.cardImage} variant="top" src={product} />
        </div>
        <Button variant="default" style={style.addToWishlistBtn}>
          <i class="far fa-heart"></i>
        </Button>
        <Card.Body className="p-2 pb-2">
          <p style={style.productTitle}>Macbook pro 2021</p>
          <p style={style.productPrice}>Rp 21.000.000</p>
          <div style={style.productQuickDetail}>
            <Badge variant="light" style={style.badgeRating}>
              <i class="fas fa-star text-warning"></i> 3.4
            </Badge>
            <Badge
              variant="light"
              className="text-success"
              style={style.badgeOrders}
            >
              <i class="fas fa-shopping-bag text-success"></i> 49 orders
            </Badge>
            <Badge
              variant="light"
              className="text-default"
              style={style.badgeReviews}
            >
              31 reviews
            </Badge>
          </div>
          <div style={style.productCardFooter}>
            <Button
              variant="primary"
              className="mr-1"
              style={style.addToCartBtn}
              block
            >
              add to card <i className="fas fa-cart-plus ml-1"></i>
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

const style = {
  productCard: {
    border: "none",
    width: "250px",
    boxSizing: "border-box",
    marginBottom: "100px",
    boxShadow: "0 4px 2px rgba(0, 0, 0, 0.01), 0 2px 2px 0 rgba(0, 0, 0, 0.06)",
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
  productTitle: {
    fontSize: "16px",
    marginBottom: "0",
    fontWeight: "500",
    color: "#3A4047",
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
  },
  addToCartBtn: {
    fontSize: "12px",
    fontWeight: "600",
    marginTop: "20px",
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

export default Product;
