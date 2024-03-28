import React, { useEffect, useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";

import UserList from "./UserList";

const AdminDashboard = (props) => {
  const [user, setUser] = useState(null);
  const [userList, setUserList] = useState([]);
  const { _id } = props;
  const { isLoggedin } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/current-user", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoggedin]);

  return (
    <>
      {user && (
        <div>
          {/* <h1>Admin Dashboard</h1> */}
          {/* <h4>Welcome, {user.firstName}!</h4> */}

          {/* dashboard container */}
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden border-2 m-4">
            <div className="w-full flex-none md:w-64">
              <div className="flex h-full flex-col px-3 py-4 md:px-2">
                <div className="w-full md:h-32 p-2 rounded  bg-blue-600 flex flex-col justify-end">
                  <h1 style={{ color: "white" }}>Wine Shop</h1>
                </div>

                <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 pt-2">
                  <div className=" flex flex-row flex-wrap h-auto p-2 w-full grow rounded-md bg-gray-100 md:block md:space-y-2 justify-center items-center">
                    {/* <h1>hi</h1> */}
                    <Button
                      style={{ width: "200px", margin: "5px" }}
                      variant="outlined"
                    >
                      Products
                    </Button>
                    <Button
                      style={{ width: "200px", margin: "5px" }}
                      variant="outlined"
                    >
                      Wine Club Members
                    </Button>
                    <Button
                      style={{ width: "200px", margin: "5px" }}
                      variant="outlined"
                    >
                      Wine Club Members
                    </Button>
                    <Button
                      style={{ width: "200px", margin: "5px" }}
                      variant="outlined"
                    >
                      Wine Club Members
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className=" md:overflow-y-auto md:p-7 bg-white">
              {/* <UserList /> */}
            </div>
          </div>

          {/* <div>
            <div>
              <p>{user.lastName}</p>
              <p>{user.email}</p>
              <p>{user.isAdmin || user.isManager ? "Admin" : "Regular User"}</p>
              <p>{user._id}</p>
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
