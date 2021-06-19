import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import product from "../../assets/product/mbp.jpg";

class HomeProductList extends React.Component {
  render() {
    return (
      <Card style={style.productCard}>
        <div style={style.cardTopAction}>
          <Badge variant="danger" style={style.discountBadge}>
            10% Off
          </Badge>
          <Button variant="default" style={style.cardLoveBtn}>
            <i class="far fa-heart"></i>
          </Button>
        </div>
        <Card.Img style={style.cardImage} variant="top" src={product} />
        <Card.Body className="p-1 mt-2">
          <Card.Title style={style.cardTitle}>Macbook pro 2021</Card.Title>
          <Card.Text></Card.Text>
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
    padding: "5px",
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
  cardImage: {
    width: "100%",
    borderRadius: "10px",
  },
  cardTitle: {
    fontSize: "14px",
  },
};

export default HomeProductList;
