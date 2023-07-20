import React from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import "./Explore.css";
import logo from '../Images/logo.png'

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

const products = [
  {
    id: 1,
    image: "https://img.lovepik.com/free-png/20210928/lovepik-girl-studying-office-at-home-online-png-image_401680925_wh1200.png",
  },
  {
    id: 2,
    image: "https://static.vecteezy.com/system/resources/thumbnails/008/845/913/small/online-courses-with-students-sitting-on-books-pile-with-laptops-notebooks-png.png",
  },
  {
    id: 3,
    image: "https://img.lovepik.com/free-png/20210928/lovepik-girl-studying-office-at-home-online-png-image_401680925_wh1200.png",
  },
  {
    id: 4,
    image: "https://img.lovepik.com/free-png/20210928/lovepik-girl-studying-office-at-home-online-png-image_401680925_wh1200.png",
  },
  {
    id: 5,
    image: "https://img.lovepik.com/free-png/20210928/lovepik-girl-studying-office-at-home-online-png-image_401680925_wh1200.png",
  },
  {
    id: 6,
    image: "https://img.lovepik.com/free-png/20210928/lovepik-girl-studying-office-at-home-online-png-image_401680925_wh1200.png",
  }
  // Add other product objects here...
];

export default function Explore() {
  const growingslider = React.useRef(null);
  const managingslider = React.useRef(null);
  const softskillslider = React.useRef(null);

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

  return (
        <div className='explore-container'>
        <div className='header_explorer'>
          <h1 style={{ display: 'flex' }}>Explore Assets</h1>
        </div>
        <hr />
        <div className='main-container'>
          <div className='growing'>
            <div className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>Growing In The Profession</h3>
              <div style={{ margin: 20 }}>
                <button onClick={() => growingslider?.current?.slickPrev()}
                  className="prev">
                  Prev</button>
                <button
                  style={{ marginLeft: 20 }}
                  onClick={() => growingslider?.current?.slickNext()}
                  className="next"
                >
                  Next
                </button>
              </div>
            </div>
            <Slider ref={growingslider} {...settings}>
              {products.map((item, index) => {
                return (
                  <div key={index}>
                    <Card
                      style={{
                        width: 300,
                        height: 300,
                        border: "1px solid rgb(49, 54, 61)",
                        color: "rgba(255, 255, 255, 0.5)",

                      }}
                    >
                      <Card.Img variant="top" src={item.image} onError={(e) => e.target.style.display = "none"} />
                      <Card.Body>
                        <Card.Title>Card {item.id}</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the...
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className='Managing'>
            {/* <h3>Managing The Profession</h3> */}
            <div className='growing'>
              <div className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3>Managing The Profession</h3>
                <div style={{ margin: 20 }}>
                  <button onClick={() => managingslider?.current?.slickPrev()} className="prev">Prev</button>
                  <button
                    style={{ marginLeft: 20 }}
                    onClick={() => managingslider?.current?.slickNext()} className="next"
                  >
                    Next
                  </button>
                </div>
              </div>
              <Slider ref={managingslider} {...settings}>
                {products.map((item, index) => {
                  return (
                    <div key={index}>
                      <Card
                        style={{
                          width: 300,
                          height: 300,
                          border: "1px solid rgb(49, 54, 61)",
                          color: "rgba(255, 255, 255, 0.5)",

                        }}
                      >
                        <Card.Img variant="top" src={item.image} onError={(e) => e.target.style.display = "none"} />
                        <Card.Body>
                          <Card.Title>Card {item.id}</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the...
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </Slider>
            </div>

          </div>
          <div className='Managing'>
            {/* <h3>Managing The Profession</h3> */}
            <div className='growing'>
              <div className="title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3>Soft Skill for project Management</h3>
                <div style={{ margin: 20 }}>
                  <button onClick={() => softskillslider?.current?.slickPrev()} className="prev">Prev</button>
                  <button
                    style={{ marginLeft: 20 }}
                    onClick={() => softskillslider?.current?.slickNext()} className="next"
                  >
                    Next
                  </button>
                </div>
              </div>
              <Slider ref={softskillslider} {...settings}>
                {products.map((item, index) => {
                  return (
                    <div key={index}>
                      <Card
                        style={{
                          width: 300,
                          height: 300,
                          border: "1px solid rgb(49, 54, 61)",
                          color: "rgba(255, 255, 255, 0.5)",

                        }}
                      >
                        <Card.Img variant="top" src={item.image} onError={(e) => e.target.style.display = "none"} />
                        <Card.Body>
                          <Card.Title>Card {item.id}</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the...
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </Slider>
            </div>
          
          </div>
        </div>
        <div className="footer">
           <a href="#">About us</a>
           <a href="#">Privacy Policy</a>
           <img src={logo} style={{textAlign:'center'}}/>
           <p>We Love to Here from You</p>
        </div>
        <div className="footerosmosis">
        <footer className="osmosislearn" >
          @2023 Osmosis Learn
        </footer>
        </div>
        
      </div>
  );
}
