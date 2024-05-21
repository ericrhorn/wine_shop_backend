import React from "react";
import RegistrationForm from "./RegistrationForm";

const WineClub = (props) => {
  const { setIsLoggedin } = props;

  return (
    <>
      <div id="container" style={{ height: "" }}>
        <div style={{width: '60%', margin:'auto'}}>
          <RegistrationForm setIsLoggedin={setIsLoggedin} />
        </div>
      </div>
    </>
  );
};

export default WineClub;
