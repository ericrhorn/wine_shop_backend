import React from "react";

import Dashboard from "./Dashboard";
import Unauthorized from "../components/Unauthorized";
import AdminDashboard from "../Dashboard/AdminDashboard";
import ManagerDashboard from "../Dashboard/ManagerDashboard";

import { useUser } from "../Context/UserContext";

const MainDashboard = (props) => {
  const { isLoggedin, user } = useUser();
  console.log("IsLoggedin:", isLoggedin);

  function RenderUser() {
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
          <RenderUser />
        </div>
      )}
    </>
  );
};

export default MainDashboard;
