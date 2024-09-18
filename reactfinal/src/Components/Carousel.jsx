import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import prenda1 from "../assets/Img/Ojecto1.jpg"
import prenda2 from "../assets/Img/Ojecto2.jpg"
import prenda3 from "../assets/Img/Ojecto3.jpg"
import "../Styles/Carucel.css"


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
    activeIndex={index}
    onSelect={handleSelect}
    className="custom_carousel"
  >
    <Carousel.Item>
      <img className="d-block w-100" src={prenda1} alt="****" />
      <Carousel.Caption>
        <h3>**</h3>
        <p>***</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={prenda2} alt="***" />
      <Carousel.Caption>
        <h3>***</h3>
        <p>******</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={prenda3}
        alt="***"
      />
      <Carousel.Caption>
        <h3>*****</h3>
        <p>******</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={prenda1}
        alt="****"
      />
      <Carousel.Caption>
        <h3>****</h3>
        <p>*****</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
  );
}

export default ControlledCarousel;