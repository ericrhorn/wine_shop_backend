// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// import axios from "axios";
import Button from "@mui/material/Button";

import { useUser } from "../Context/UserContext";

const Dashboard = (props) => {
  const { isLoggedin, user, logout } = useUser();
  // const [user, setUser] = useState(null);
  // const { isLoggedin, setIsLoggedin } = props;
  // console.log("setIsLoggedin:", setIsLoggedin);
  console.log("IsLoggedin:", isLoggedin);

  const [show, setShow] = useState(false);

  const showUpdate = () => {
    setShow("update");
  };
  const showProducts = () => {
    setShow("products");
  };
  const showDashboard = () => {
    setShow("dashboard");
  };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/user/current-user", {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       console.log("current user data", res.data);
  //       setUser(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [isLoggedin]);

  return (
    <>
      {user && (
        <div>
          {/* <h1>Admin Dashboard</h1> */}
          {/* <h4>Welcome, {user.firstName}!</h4> */}

          {/* dashboard container */}
          <div className="flex h-screen flex-col rounded md:flex-row md:overflow-hidden overflow-hidden border-2 m-4">
            <div className="w-full flex-none md:w-64">
              <div className="flex h-full flex-col px-3 py-4 md:px-2">
                <div className="w-full md:h-32 p-2 rounded  bg-blue-600 flex flex-col justify-end">
                  <h2 style={{ color: "white" }}>Wine Shop</h2>
                </div>

                <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 pt-2">
                  <div className=" flex flex-row flex-wrap h-auto p-2 w-full grow rounded-md bg-gray-100 md:block md:space-y-2 justify-center items-center">
                    {/* <h1>hi</h1> */}
                    <Button
                      style={{ width: "200px", margin: "5px" }}
                      variant="outlined"
                      // onClick={showDashboard}
                    >
                      Dashboard
                    </Button>

                    <Link to={`/update/${user._id}`}>
                      <Button
                        style={{ width: "200px", margin: "5px" }}
                        variant="outlined"
                      >
                        Update Info
                      </Button>
                    </Link>

                    <Button
                      style={{ width: "200px", margin: "5px" }}
                      variant="outlined"
                      // onClick={showUsers}
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
                    {/* <Button
                      style={{ width: "200px", margin: "5px" }}
                      variant="outlined"
                    >
                      Wine Club Members
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="dashboardHome overflow-y-auto p-7 md:p-7  w-full">
              <div>
                {/* {show === "update" && <UserUpdate />} */}
                {/* {show === "products" && <NewProducts />}
                  {show !== "users" && show !== "products" && <DashboardInfo />} */}
                <div>
                  <h1>User Dashboard</h1>
                  <h1>Welcome, {user.firstName}!</h1>
                  <p>{user.lastName}</p>
                  <p>{user.email}</p>
                  <p>{user.clubLevel}</p>
                  <p>
                    {user.isAdmin || user.isManager ? "Admin" : "Regular User"}
                  </p>
                  <p>{user._id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
