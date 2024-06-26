import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button, MenuItem, Grid } from "@mui/material";

import { useUser } from "../Context/UserContext";


const RegistrationForm = (props) => {
  const [errs, setErrs] = useState({});
  const { setIsLoggedin } = useUser();

  const navigate = useNavigate();

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

  const wineClubLevels = [
    { value: "Silver", label: "Silver" },
    { value: "Gold", label: "Gold" },
    { value: "Platinum", label: "Platinum" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));

    // Clear specific error for the field being changed
    setErrs((prevErrs) => {
      const { [name]: removedError, ...remainingErrors } = prevErrs;
      return remainingErrors;
    });

    // Update user state
    setUser((prevUser) => {
      const updatedUser = { ...prevUser, [name]: value };

      // Check for password match validation
      if (name === "password" || name === "confirmPassword") {
        if (updatedUser.password !== updatedUser.confirmPassword) {
          setErrs((prevErrs) => ({
            ...prevErrs,
            confirmPassword: { message: "Passwords do not match" },
          }));
        } else {
          setErrs((prevErrs) => {
            const { confirmPassword, ...remainingErrors } = prevErrs;
            return remainingErrors;
          });
        }
      }
      return updatedUser;
    });
  };

  const registerUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/user/register", user, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log("here is the data", res.data);
        setIsLoggedin(true);
        setErrs({});
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/MainDashboard");
      })
      .catch((err) => {
        console.log(err);
        setErrs(err.response.data.errors || {});
      });
  };

  return (
    <>
      <form onSubmit={registerUser}>
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
                  label="First Name"
                  // variant="filled"
                  id="firstName"
                  className="form-control"
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
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
                  label="Last Name"
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
                  label="Email"
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
            </Grid>

            <Grid item container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  fullWidth
                  label="Password"
                  // variant="filled"
                  id="password"
                  className="form-control"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  error={!!errs.password} // Convert errs.email to a boolean value
                  helperText={errs.password && errs.password.message}
                />
                {/* <br />
                {errs.password ? (
                  <span className="error-text" style={{ color: "red" }}>
                    {errs.password.message}
                  </span>
                ) : null} */}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  style={{ backgroundColor: "white" }}
                  fullWidth
                  id="confirmPassword"
                  className="form-control"
                  type="password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleChange}
                  label="Confirm Password"
                  error={!!errs.confirmPassword} // Convert errs.email to a boolean value
                  helperText={
                    errs.confirmPassword && errs.confirmPassword.message
                  }
                  // variant="filled"
                />
                {/* <br />
                {errs.confirmPassword ? (
                  <span className="error-text" style={{ color: "red" }}>
                    {errs.confirmPassword.message}
                  </span>
                ) : null} */}
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
                  Join Wine Club
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
};

export default RegistrationForm;
