import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = (props) => {
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

  // Render user data only when user is not null
  return (
    <>
      {user && (
        <div>
          <h1>User Dashboard</h1>
          <h1>Welcome, {user.firstName}!</h1>
          <p>{user.lastName}</p>
          <p>{user.email}</p>
          <p>{user.clubLevel}</p>
          <p>{user.isAdmin || user.isManager ? "Admin" : "Regular User"}</p>
          <p>{user._id}</p>
          {/* Render other user information here */}
        </div>
      )}
    </>
  );
};

export default Dashboard;
