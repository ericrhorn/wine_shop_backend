import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

const UserList = (props) => {
  const [userList, setUserList] = useState([]);
  const { _id } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/showUsers")
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => console.log(err.data));
  }, [_id]);
  return (
    <div>
      <h2>Wine Club Members</h2>
      <table className="md:border-spacing-4">
        <thead>
          <tr>
            <th className="p-4 border border-black bg-slate-200">User Name</th>
            <th className="p-4 border border-black bg-slate-200 hidden sm:table-cell">
              User Email
            </th>
            {/* Hide on smaller screens */}
            <th className="p-4 border border-black bg-slate-200 hidden lg:table-cell">
              User Role
            </th>
            <th className="p-4 border border-black bg-slate-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, idx) => (
            <tr key={idx}>
              <td className="p-4 border border-slate-700">
                {user.firstName} {user.lastName}
              </td>
              <td className="p-4 border border-slate-700 hidden sm:table-cell">
                {user.email}
              </td>
              {/* Hide on smaller screens */}
              <td className="p-4 border border-slate-700 hidden lg:table-cell">
                {user.isAdmin || user.isManager ? "Admin" : "Regular User"}
              </td>
              <td className="p-4 border border-slate-700 flex flex-col md:flex-row">
                <div className="md:mr-2">
                  <Button variant="outlined">Edit</Button>
                </div>
                <div className="md:mr-2 md:mt-0">
                  <Button color="error" variant="outlined">
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
