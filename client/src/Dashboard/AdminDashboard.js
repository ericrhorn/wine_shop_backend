import React, { useState } from "react";
// import axios from "axios";

import Button from "@mui/material/Button";

import UserList from "../Users/UserList";
import NewProducts from "../Products/NewProducts";
// import MainDashboard from "./MainDashboard";
import DashboardInfo from "./DashboardInfo";

import { useUser } from "../Context/UserContext";


const AdminDashboard = (props) => {
  const { user } = useUser();
  // const { user, logout } = useUser();
  // const [user, setUser] = useState(null);
  // const [userList, setUserList] = useState([]);
  // const { _id } = props;
  // const { isLoggedin } = props;

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/user/current-user", {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setUser(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [isLoggedin]);

  const [show, setShow] = useState(false);

  const showUsers = () => {
    setShow("users");
  };
  const showProducts = () => {
    setShow("products");
  };
  const showDashboard = () => {
    setShow("dashboard");
  };

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
                      onClick={showDashboard}
                    >
                      Dashboard
                    </Button>
                    <Button
                      style={{ width: "200px", margin: "5px" }}
                      variant="outlined"
                      onClick={showProducts}
                    >
                      Products
                    </Button>
                    <Button
                      style={{ width: "200px", margin: "5px" }}
                      variant="outlined"
                      onClick={showUsers}
                    >
                      Wine Club Members
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
                {show === "users" && <UserList />}
                {show === "products" && <NewProducts />}
                {show !== "users" && show !== "products" && <DashboardInfo />}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
