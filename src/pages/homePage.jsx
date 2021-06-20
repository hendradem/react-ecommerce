import React from "react";
import HeaderCarousel from "../component/home/headerCarousel";
import axios from "axios";
import Product from "../component/product/product";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeProducts: [],
    };
  }
  componentDidMount = () => {
    axios.get("http://localhost:2000/products").then((res) => {
      this.setState({ homeProducts: res.data });
    });
  };
  showHomeProduct = () => {};
  render() {
    return (
      <div>
        <div style={style.header}>
          <div className="container p-0">
            <HeaderCarousel></HeaderCarousel>
          </div>
        </div>
        <div className="container p-0">
          <div
            className="product-list mb-2"
            style={style.homeProductListHeader}
          >
            <h6>Special for you today</h6>
            <a href="">see more</a>
          </div>
          <div>
            <Product />
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  header: {
    width: "100%",
    height: "400px",
    backgroundColor: "#fff",
    paddingTop: "70px",
    position: "relative",
  },
  homeProductListHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
};

export default HomePage;
