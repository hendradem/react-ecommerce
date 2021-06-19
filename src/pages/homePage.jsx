import React from "react";
import HeaderCarousel from "../component/home/headerCarousel";
import axios from "axios";
import HomeProductList from "../component/product/homeProductList";

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
          <div className="product-list" style={style.homeProductListHeader}>
            <h5>For you</h5>
            <a href="">see more</a>
          </div>
          <div>
            <HomeProductList />
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
  },
  homeProductListHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
};

export default HomePage;
