import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "../components/Dashboard";
import Unauthorized from "../components/Unauthorized";
import AdminDashboard from "./AdminDashboard";
import ManagerDashboard from "./ManagerDashboard";


const MainDashboard = (props) => {
  const [user, setUser] = useState(null);
  const { isLoggedin, setIsLoggedin } = props;
  console.log("setIsLoggedin:", setIsLoggedin);
  console.log("IsLoggedin:", isLoggedin);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user/current-user", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("current user data", res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoggedin]);

  function RenderUser(){
    if (user.isAdmin) {
      return <AdminDashboard isLoggedin={isLoggedin} />;
    } else if (user.isManager) {
      return <ManagerDashboard isLoggedin={isLoggedin} />;
    } else if (!user.isAdmin || user.isManager) {
      return <Dashboard isLoggedin={isLoggedin} />;
    } else return <Unauthorized isLoggedin={isLoggedin} />;
  }

  return (
    <>
      {user && (
        <div>
          <h1>Hello {user.firstName}</h1>
          <RenderUser />
        </div>
      )}
    </>
  );
};

export default MainDashboard;
