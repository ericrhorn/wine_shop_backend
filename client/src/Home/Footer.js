import React from "react";
import LoginReg from "../components/LoginReg";

function Footer(props) {

  return (
    <div
      id="footer"
      className="grid grid-cols-1 md:grid-cols-3"
      style={{ backgroundColor: "black", minHeight: "500px" }}
    >
      <div className="flex justify-center items-center">
        <div className="text-white text-center m-4">
          <h4>The Wine Club</h4>
          <p>555-555-5555</p>
          <p>info@thewineclub.com</p>
          <p>
            123 Main Street
            <br />
            Some City, CA 95556
          </p>
        </div>
      </div>
      <div className="border-white md:border-x-2 border-y-2 md:border-y-0 flex justify-center items-center">
        <div className="text-white text-center m-4">
          <h4>Hours</h4>
          <p>
            Monday - Friday: 11am - 9pm
            <br />
            Saturday - Sunday: 11am - 5pm
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="m-auto sm:pt-4">
          <LoginReg />
        </div>
      </div>
    </div>
  );
}

export default Footer;
