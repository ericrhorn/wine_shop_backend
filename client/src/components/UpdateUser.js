import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Box, TextField, Button, MenuItem, Grid } from "@mui/material";

const UpdateUser = (props) => {
  // const [user, setUser] = useState([]);
  const { _id } = useParams();
  const navigate = useNavigate();

  console.log("user id" + _id);
  // const [updateUser, setUpdateUser] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   clubLevel: "",
  //   password: "",
  //   confirmPassword: "",
  //   isAdmin: false,
  //   isManager: false,
  // });
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    clubLevel: "",
    password: "",
    confirmPassword: "",
    isAdmin: false,
    isManager: false,
  });
  const [errs, setErrs] = useState({});

  const wineClubLevels = [
    { value: "Silver", label: "Silver" },
    { value: "Gold", label: "Gold" },
    { value: "Platinum", label: "Platinum" },
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/user/${_id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err.data));
  }, [_id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Clear specific error for the field being changed
    setErrs((prevErrs) => {
      const { [name]: removedError, ...remainingErrors } = prevErrs;
      return remainingErrors;
    });

    // Update user state
    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? !prevUser[name] : value,
    }));
  };


  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/user/update/${_id}`, user)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        navigate("/mainDashboard");
      })
      .catch((err) => {
        console.log("Error updating user", err.response.data);
        if (err.response && err.response.data && err.response.data.errors) {
          setErrs(err.response.data.errors);
        }
      });
  };

  return (
    <>
      {user ? (
        <>
          <div style={{ width: "60%", margin: "auto", display: "grid" }}>
            <div>
              <p>{user._id}</p>
            </div>
            <div>
              <p>{user.firstName}</p>
            </div>
            <div>
              <p>{user.lastName}</p>
            </div>
            <div>
              <p>{user.email}</p>
            </div>
            <div>
              <p>{user.clubLevel}</p>
            </div>
            <div>
              <p>
                {user.isAdmin
                  ? "Admin"
                  : user.isManager
                  ? "Manager"
                  : "Regular User"}
              </p>
            </div>
          </div>
          <div id="container" style={{ height: "" }}>
            <div style={{ width: "60%", margin: "auto" }}>
              <form onSubmit={updateHandler}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  style={{
                    width: "100%",
                    padding: "20px",
                  }}
                >
                  <Grid
                    container
                    spacing={2}
                    direction="column"
                    // justifyContent="center"
                    // alignItems="center"
                    // style={{
                    //   width: "100%",
                    //   padding: "20px",
                    //   border: "1px solid black",
                    // }}
                  >
                    <h4>Become a Wine Club Member</h4>
                    <Grid item container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          style={{ backgroundColor: "white" }}
                          fullWidth
                          // label="First Name"
                          // variant="filled"
                          id="firstName"
                          className="form-control"
                          type="text"
                          name="firstName"
                          value={user.firstName}
                          onChange={handleChange}
                          // value={user.firstName}
                          // onChange={handleChange}
                          error={!!errs.firstName} // Convert errs.email to a boolean value
                          helperText={errs.firstName && errs.firstName.message}
                        />
                        {/* <br />
                {errs.firstName ? (
                  <span className="error-text" style={{ color: "red" }}>
                    {errs.firstName.message}
                  </span>
                ) : null} */}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          style={{ backgroundColor: "white" }}
                          fullWidth
                          id="lastName"
                          className="form-control"
                          type="text"
                          name="lastName"
                          value={user.lastName}
                          onChange={handleChange}
                          // label="Last Name"
                          error={!!errs.lastName} // Convert errs.email to a boolean value
                          helperText={errs.lastName && errs.lastName.message}
                          // variant="filled"
                        />
                        {/* <br />
                {errs.lastName ? (
                  <span className="error-text" style={{ color: "red" }}>
                    {errs.lastName.message}
                  </span>
                ) : null} */}
                      </Grid>
                    </Grid>

                    <Grid item container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          style={{ backgroundColor: "white" }}
                          fullWidth
                          id="email"
                          className="form-control"
                          type="text"
                          name="email"
                          value={user.email}
                          onChange={handleChange}
                          // label="Email"
                          error={!!errs.email} // Convert errs.email to a boolean value
                          helperText={errs.email && errs.email.message}
                          // variant="filled"
                        />
                        {/* <br /> */}
                        {/* {errs.email ? (
                  <span className="error-text" style={{ color: "red" }}>
                    {errs.email.message}
                  </span>
                ) : null} */}
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          style={{ backgroundColor: "white" }}
                          fullWidth
                          id="clubLevel"
                          select
                          label="Wine Club Level"
                          variant="filled"
                          name="clubLevel"
                          className="form-control formInput"
                          onChange={handleChange}
                          value={user.clubLevel}
                          error={!!errs.clubLevel} // Convert errs.email to a boolean value
                          helperText={errs.clubLevel && errs.clubLevel.message}

                          // {...register("clubLevel", {
                          //   required: {
                          //     value: true,
                          //     message: "Please select an option",
                          //   },
                          // })}
                        >
                          <MenuItem value="">Select Wine Club Level</MenuItem>
                          {wineClubLevels.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>

                        {/* {errs.clubLevel && (
                  <span className="errorMessage" style={{ color: "red" }}>
                    {errs.clubLevel.message}
                  </span>
                )} */}
                      </Grid>
                      <Grid item xs={12}>
                        <label>
                          <input
                            type="checkbox"
                            name="isAdmin"
                            checked={user.isAdmin}
                            onChange={handleChange}
                          />
                          Admin
                        </label>
                      </Grid>
                      <Grid item xs={12}>
                        <label>
                          <input
                            type="checkbox"
                            name="isManager"
                            checked={user.isManager}
                            onChange={handleChange}
                          />
                          Manager
                        </label>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      spacing={2}
                      // alignItems="center"
                      // justifyContent="center"
                    >
                      <Grid item>
                        <Button type="submit" variant="contained">
                          Update Wine Club Member
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </div>
          </div>
        </>
      ) : (
        <div className="m-5 flex justify-center items-center h-max">
          <div>
            <h1>User Not Found</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateUser;
