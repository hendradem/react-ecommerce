import React from "react";
import { Row, Col, Alert } from "react-bootstrap";

class ProductDetail extends React.Component {
  render() {
    return (
      <div className="container mt-5 p-0">
        <div style={style.productDetailWrapper}>
          <Row>
            <Col></Col>
            <Col>2 of 2</Col>
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
    border: "1px solid #eaeaea",
    boxShadow: "0 4px 2px rgba(0, 0, 0, 0.01), 0 2px 2px 0 rgba(0, 0, 0, 0.06)",
  },
};

export default ProductDetail;
