import React from "react";
import Slider from "react-slick";
import "./Static.css";
import Explore from "./Explore";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      BACK
    </div>
  );
}

export default function Static() {
  const slider = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const products = [
    {
      id: 1,
      image: "https://img.lovepik.com/free-png/20210928/lovepik-girl-studying-office-at-home-online-png-image_401680925_wh1200.png",
    },
    {
      id: 2,
      image: "https://img.lovepik.com/free-png/20210928/lovepik-girl-studying-office-at-home-online-png-image_401680925_wh1200.png",
    }
    // Add other product objects here...
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0px" }}>
        REACT-SLICK CAROUSEL
      </h1>

      <div style={{ margin: 20 }}>
        <button onClick={() => slider?.current?.slickPrev()}>Prev</button>
        <button
          style={{ marginLeft: 20 }}
          onClick={() => slider?.current?.slickNext()}
        >
          Next
        </button>
      </div>

      <Slider ref={slider} {...settings}>
        {products.map((item, index) => {
          return <Explore key={index}  item={item} />;
        })}
      </Slider>
    </div>
  );
}

