import React from "react";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";

import Chateau from "../assets/carousel/chateau.jpeg";
import Patio from "../assets/carousel/patio.jpeg";
import Patio2 from "../assets/carousel/patio2.jpeg";
import Tasting from "../assets/carousel/tasting_room.jpeg";
import Vinyard from "../assets/carousel/vinyard.jpeg";
import Barel from "../assets/carousel/wine_barel.jpeg";

function HomeImages() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const images = [Chateau, Patio, Patio2, Tasting, Vinyard, Barel];

  const imageSet = [];
  for (let i = 0; i < images.length; i += 3) {
    imageSet.push(images.slice(i, i + 3));
  }

  return (
    <div style={{ width: "100%", height: "400px", margin: "100px 0" }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {imageSet.map((set, i) => (
          <Carousel.Item key={i}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {set.map((image, j) => (
                <img
                  key={j}
                  src={image}
                  alt=""
                  style={{ height: "400px", width: "30%" }}
                />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeImages;
