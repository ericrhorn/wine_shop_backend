import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; // Make sure to import the search icon


const UserList = (props) => {
  const [userList, setUserList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const { _id } = props;

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/showUsers")
      .then((res) => {
        setUserList(res.data);
      })
      .catch((err) => console.log(err.data));
  }, [_id]);

const filteredUserList = userList.filter((user) => 
  `${user.firstName} ${user.lastName} ${user.email} `
  .toLowerCase()
  .includes(searchTerm.toLowerCase())
);

const handleSearchChange = (e) => {
  setSearchTerm(e.target.value);
}


  return (
    <div className="w-full">
      <h2>Wine Club Members</h2>
      <div className="py-4">
        <form action="">
          <TextField
            id="searchField"
            className="form-control rounded-lg"
            type="text"
            name="search"
            label="Search"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </div>
      <table className="text-sm table-auto rounded-lg  w-full border border-slate-700  ">
        <thead>
          <tr>
            {/* <th className="p-4 border border-black bg-slate-200 hidden md:table-cell">
              id
            </th> */}
            <th className="p-2 bg-slate-100">User Name</th>
            <th className="p-2 bg-slate-100 hidden lg:table-cell">
              User Email
            </th>
            <th className="p-2 bg-slate-100 hidden sm:table-cell">Wine Club</th>
            {/* Hide on smaller screens */}
            <th className="p-2 bg-slate-100 hidden lg:table-cell">User Role</th>
            <th className="p-2 bg-slate-100">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {filteredUserList.map((user, idx) => (
            <tr key={idx} className="border border-slate-700">
              {/* <td className="p-2 border border-slate-700 hidden lg:table-cell">
                {user._id}
              </td> */}
              <td className="p-2 ">
                {user.firstName} {user.lastName}
              </td>
              <td className="p-2  hidden lg:table-cell">{user.email}</td>
              <td className="p-2  hidden sm:table-cell">{user.clubLevel}</td>
              {/* Hide on smaller screens */}
              <td className="p-2 hidden lg:table-cell">
                {user.isAdmin
                  ? "Admin"
                  : user.isManager
                  ? "Manager"
                  : "Regular User"}
              </td>
              <td className="p-2 flex flex-row">
                <div className="md:mr-2">
                  <Link to={`/update/${user._id}`}>
                    <Button size="small" variant="outlined">
                      Edit
                    </Button>
                  </Link>
                </div>
                <div className="md:mr-2 md:mt-0">
                  <Link>
                    <Button color="error" size="small" variant="outlined">
                      Delete
                    </Button>
                  </Link>
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
