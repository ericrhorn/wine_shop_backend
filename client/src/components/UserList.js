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
      <table className=" md:border-spacing-4">
        <thead className="">
          <tr>
            <th className="p-4 border border-slate-600">User ID</th>
            <th className="p-4border border-slate-600">User Name</th>
            <th className="p-4 border border-slate-600">User Email</th>
            <th className="p-4 border border-slate-600">User Role</th>
            <th className="p-4 border border-slate-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, idx) => (
            <tr key={idx}>
              <td className="p-4 border border-slate-700">{user._id}</td>
              <td className="p-4 border border-slate-700">
                {user.firstName} {user.lastName}
              </td>
              <td className="p-4 border border-slate-700">{user.email}</td>
              <td className="p-4 border border-slate-700">
                {user.isAdmin || user.isManager ? "Admin" : "Regular User"}
              </td>
              <td className="p-2 border border-slate-700">
                <div className="flex justify-between">
                  <div className="">
                    <Button variant="outlined">
                      Edit
                    </Button>
                  </div>
                  <div className="">
                    <Button color="error" variant="outlined">
                      Delete
                    </Button>
                  </div>
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
