import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = (props) => {
  const [user, setUser] = useState(null);
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
          <h1>Welcome, {user.firstName}!</h1>
          <p>{user.lastName}</p>
          <p>{user.email}</p>
          <p>{user.isAdmin ? "Admin" : "Regular User"}</p>
          <p>{user._id}</p>
          {/* Render other user information here */}
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
