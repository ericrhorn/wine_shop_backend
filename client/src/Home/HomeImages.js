import React, { useState, useEffect } from "react";
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
  const [width, setWidth] = useState(window.innerWidth);
  // console.log(width)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const images = [Chateau, Patio, Patio2, Tasting, Vinyard, Barel];

  const getImageSet = (size) => {
    const sets = [];
    for (let i = 0; i < images.length; i += size) {
      sets.push(images.slice(i, i + size));
    }
    return sets;
  };

  const imageSet = getImageSet(3);
  const imageSetMed = getImageSet(2);
  const imageSetSmall = getImageSet(1);

  return (
    <>
      {width > 1000 ? (
        <div style={{ width: "100%", margin: "100px 0" }}>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {imageSet.map((set, i) => (
              <Carousel.Item key={i}>
                <div className="flex justify-around">
                  {set.map((image, j) => (
                    <img key={j} src={image} alt="" style={{ width: "33%" }} />
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ) : width > 600 ? (
        <div style={{ width: "100%", margin: "50px 0" }}>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {imageSetMed.map((set, i) => (
              <Carousel.Item key={i}>
                <div className="flex justify-around">
                  {set.map((image, j) => (
                    <img key={j} src={image} alt="" style={{ width: "49%" }} />
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ) : (
        <div style={{ width: "100%", margin: "50px 0" }}>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {imageSetSmall.map((set, i) => (
              <Carousel.Item key={i}>
                <div className="flex justify-around">
                  {set.map((image, j) => (
                    <img key={j} src={image} alt="" style={{ width: "90%" }} />
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
}

export default HomeImages;
