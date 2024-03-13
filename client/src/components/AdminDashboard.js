import React, { useEffect, useState } from "react";
import axios from "axios";

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
          <h1>Admin Dashboard</h1>
          <h4>Welcome, {user.firstName}!</h4>
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            {/* <div className="w-full flex-none md:w-64">
              <div className="flex h-full flex-col px-3 py-4 md:px-2">
                <div className="w-32 md:w-40"></div>

                <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                  <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                </div>
              </div>
            </div> */}
            <div className="flex-grow md:overflow-y-auto md:p-7">
              <UserList />
            </div>
          </div>

          <div>
            <div>
              <p>{user.lastName}</p>
              <p>{user.email}</p>
              <p>{user.isAdmin || user.isManager ? "Admin" : "Regular User"}</p>
              <p>{user._id}</p>
              {/* Render other user information here */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
