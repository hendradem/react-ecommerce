import React from "react";
import HeaderCarousel from "../component/home/headerCarousel";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div style={style.header}>
          <div className="container p-0">
            <HeaderCarousel></HeaderCarousel>
          </div>
        </div>
        <div className="container"></div>
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
};

export default HomePage;
