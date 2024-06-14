// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import axios from "axios";
import Button from "@mui/material/Button";
import UserDashboard from "./UserDashboard";
import UserWineClub from "../Users/UserWineClub";

import { useUser } from "../Context/UserContext";

const Dashboard = (props) => {
  const { isLoggedin, user, logout } = useUser();
  console.log("IsLoggedin:", isLoggedin);

  const [show, setShow] = useState(false);

  const showWine = () => {
    setShow("wine");
  };

  const showDashboard = () => {
    setShow("dashboard");
  };

  return (
    <>
      {user && (
        <div>
          {/* dashboard container */}
          <div className="flex h-screen flex-col rounded md:flex-row md:overflow-hidden overflow-hidden border-2 m-4">
            <div className="w-full flex-none md:w-64">
              <div className="flex h-full flex-col px-3 py-4 md:px-2">
                <div className="w-full md:h-32 p-2 rounded  bg-blue-600 flex flex-col justify-end">
                  <h2 style={{ color: "white" }}>Wine Shop</h2>
                </div>
                <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 pt-2">
                  <div className=" flex flex-row flex-wrap h-auto p-2 w-full grow rounded-md bg-gray-100 md:block md:space-y-2 justify-center items-center">
                    <Button
                      style={{ width: "200px", margin: "5px" }}
                      variant="outlined"
                      onClick={showDashboard}
                    >
                      Dashboard
                    </Button>

                    <Button
                      component={Link}
                      to={`/update/${user._id}`}
                      style={{ width: "200px", margin: "5px" }}
                      variant="outlined"
                    >
                      Update Info
                    </Button>

                    <Button
                      style={{ width: "200px", margin: "5px" }}
                      variant="outlined"
                      onClick={showWine}
                    >
                      Wine Club
                    </Button>
                    <Button
                      style={{ width: "200px", margin: "5px" }}
                      variant="outlined"
                      color="error"
                      onClick={logout}
                    >
                      logout
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboardHome overflow-y-auto p-7 md:p-7  w-full">
              <div>
                <h5>Welcome, {user.firstName}!</h5>
              </div>
              <div>
                {show === "wine" && <UserWineClub />}
                {show !== "wine" && <UserDashboard />}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
