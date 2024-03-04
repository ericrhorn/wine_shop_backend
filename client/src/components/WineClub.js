import React from 'react'
import RegistrationForm from '../components/RegistrationForm'

const WineClub = () => {
  return (
    <>
      <div id="container" style={{ height: "100vh"}}>
        <div>
          WineClub
        </div>
        <div>
          <RegistrationForm />
        </div>
      </div>
    </>
  );
}

export default WineClub