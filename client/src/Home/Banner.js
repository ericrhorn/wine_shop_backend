// import React from 'react';
// import wineBar from '../assets/wine_bar.jpeg';

// function Banner() {
//   return (
//    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px', width: '100%', overflow: 'hidden', margin: ' 0 0 50px'}}>
//       <img src={wineBar} alt="" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
//     </div>
    
//   )
// }

// export default Banner


import React from 'react';
import wineBar from '../assets/wine_bar.jpeg';
import '../style/banner.css';

function Banner() {
  return (
    <div className="parallax-banner">
      <div className="parallax-background"></div>
    </div>
  );
}

export default Banner;

