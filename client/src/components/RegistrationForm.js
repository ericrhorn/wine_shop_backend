import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, MenuItem, Grid } from "@mui/material";
import { useForm } from "react-hook-form";

import axios from "axios";

const RegistrationForm = (props) => {
  const [errs, setErrs] = useState({});
  const { setIsLoggedin } = props;

  const navigate = useNavigate();

  const {
    register,
    // handleSubmit,
    // reset,
    watch,
    // formState: { errs },
  } = useForm();

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
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/user/register", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("here is the data", res.data);
        setIsLoggedin(true);
        setErrs("");
        navigate("/MainDashboard");
        // if (res.data.user.isAdmin) {
        //   navigate("/adminDashboard"); // Navigate to admin dashboard
        // } else if (res.data.user.isManager) {
        //   navigate("/managerDashboard"); // Navigate to manager dashboard
        // } else {
        //   navigate("/dashboard"); // Navigate to regular user dashboard
        // }
      })
      .catch((err) => {
        console.log(err);
        setErrs(err.response.data.errors);
      });
  };

  return (
    <>
      {/* <div
        className="container mt-5 rounded-3 shadow p-3 bg-body"
        style={{ width: 500, backgroundColor: "white" }}
      >
        <h2>Register</h2>
        <form onSubmit={registerUser}>
          <div className="mb-3 mt-3">
            <label htmlFor="firstName">First Name</label>
            <br />
            {errs.firstName ? (
              <span className="error-text" style={{ color: "red" }}>
                {errs.firstName.message}
              </span>
            ) : null}
            <input
              id="firstName"
              className="form-control"
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName">Last Name</label>
            <br />
            {errs.lastName ? (
              <span className="error-text" style={{ color: "red" }}>
                {errs.lastName.message}
              </span>
            ) : null}
            <input
              id="lastName"
              className="form-control"
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <br />
            {errs.email ? (
              <span className="error-text" style={{ color: "red" }}>
                {errs.email.message}
              </span>
            ) : null}
            <input
              id="email"
              className="form-control"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="clubLevel">Wine Club Level</label>
            <br />
            {errs.clubLevel ? (
              <span className="error-text" style={{ color: "red" }}>
                {errs.clubLevel.message}
              </span>
            ) : null}
            <select
              id="clubLevel"
              className="form-control"
              type="text"
              name="clubLevel"
              value={user.clubLevel}
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Select Wine Club Level
              </option>
              {wineClubLevels.map((options) => (
                <option key={options.value} value={options.value}>
                  {options.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <br />
            {errs.password ? (
              <span className="error-text" style={{ color: "red" }}>
                {errs.password.message}
              </span>
            ) : null}
            <input
              id="password"
              className="form-control"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordComp">Password Confirmation</label>
            <br />
            {errs.confirmPassword ? (
              <span className="error-text" style={{ color: "red" }}>
                {errs.confirmPassword.message}
              </span>
            ) : null}
            <input
              id="passwordComp"
              className="form-control"
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </form>
      </div> */}

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
                />
                <br />
                {errs.firstName ? (
                  <span className="error-text" style={{ color: "red" }}>
                    {errs.firstName.message}
                  </span>
                ) : null}
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
                  // variant="filled"
                />
                <br />
                {errs.lastName ? (
                  <span className="error-text" style={{ color: "red" }}>
                    {errs.lastName.message}
                  </span>
                ) : null}
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
                  // variant="filled"
                />
                <br />
                {errs.email ? (
                  <span className="error-text" style={{ color: "red" }}>
                    {errs.email.message}
                  </span>
                ) : null}
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

                {errs.clubLevel && (
                  <span className="errorMessage" style={{ color: "red" }}>
                    {errs.clubLevel.message}
                  </span>
                )}
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
                />
                <br />
                {errs.password ? (
                  <span className="error-text" style={{ color: "red" }}>
                    {errs.password.message}
                  </span>
                ) : null}
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
                  // variant="filled"
                />
                <br />
                {errs.confirmPassword ? (
                  <span className="error-text" style={{ color: "red" }}>
                    {errs.confirmPassword.message}
                  </span>
                ) : null}
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
