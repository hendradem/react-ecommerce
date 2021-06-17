import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../assets/carousel/slide1.png";
import slide2 from "../../assets/carousel/slide2.png";

class HeaderCarousel extends React.Component {
  render() {
    return (
      <div style={style.carouselWrapper}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={slide1} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={slide2} alt="First slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

const style = {
  carouselWrapper: {
    borderRadius: "10px",
  },
};

export default HeaderCarousel;
