import React from 'react'
import RegistrationForm from '../components/RegistrationForm'

const WineClub = (props) => {

  const { setIsLoggedin } = props;

  return (
    <>
      <div id="container" style={{ height: "100vh" }}>
        <div>WineClub</div>
        <div>
          <RegistrationForm
            setIsLoggedin={setIsLoggedin}
          />
        </div>
      </div>
    </>
  );
}

export default WineClub