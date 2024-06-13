import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const UpdateUser = (props) => {
  const { _id } = useParams();
  const navigate = useNavigate();
  console.log('user id in update user',_id)

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
        const fetchedUser = res.data;
        setUser({
          ...fetchedUser,
          password: "",
          confirmPassword: "",
        });
      })
      .catch((err) => console.log(err));
  }, [_id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Clear specific error for the field being changed
    setErrs((prevErrs) => {
      const { [name]: removedError, ...remainingErrors } = prevErrs;
      return remainingErrors;
    });

    // Update user state
    setUser((prevUser) => {
      const updatedUser = {
        ...prevUser,
        [name]: type === "checkbox" ? checked : value,
      };

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

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/user/update/${_id}`, user)
      .then((res) => {
        console.log(res.data);
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
          {/* <div
            id="container"
            style={{
              border: "1px solid black",
              height: "500px",
              width: "60%",
              margin: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                alignItems: "stretch",
                padding: "20px",
                margin: "20px",
              }}
            >
              <div
                style={{
                  flexShrink: "1",
                  margin: "20px",
                  border: "1px solid black",
                }}
              >
                <h4>{user._id}</h4>
              </div>
              <div
                style={{
                  flexShrink: "0",
                  margin: "20px",
                  border: "1px solid black",
                }}
              >
                <h4>
                  {user.firstName} {user.lastName}
                </h4>
              </div>
              <div
                style={{
                  flexShrink: "0",
                  margin: "20px",
                  border: "1px solid black",
                }}
              >
                <h4>{user.email}</h4>
              </div>
              <div
                style={{
                  flexShrink: "0",
                  margin: "20px",
                  border: "1px solid black",
                }}
              >
                <h4>{user.clubLevel}</h4>
              </div>
            </div>
          </div>
          <div className="m-5">
            <div className="w-2/4 m-auto grid grid-cols-4 gap-4">
              <div>
                <h4>
                  {user.firstName} {user.lastName}
                </h4>
              </div>
              <div>
                <h4>{user.email}</h4>
              </div>
            </div>
            <div className="w-2/4 m-auto grid grid-cols-4 gap-4">
              <div>
                <h4>{user.clubLevel}</h4>
              </div>
              <div>
                <h4>
                  {user.isAdmin
                    ? "Admin"
                    : user.isManager
                    ? "Manager"
                    : "Regular User"}
                </h4>
              </div>
            </div>
          </div> */}

          <div className="pb-5" id="container" style={{ height: "" }}>
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
                  <Grid container spacing={2} direction="column">
                    <h4>Update Wine Club Member</h4>
                    <Grid item container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          style={{ backgroundColor: "white" }}
                          fullWidth
                          id="firstName"
                          type="text"
                          name="firstName"
                          value={user.firstName}
                          onChange={handleChange}
                          error={!!errs.firstName}
                          helperText={errs.firstName && errs.firstName.message}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          style={{ backgroundColor: "white" }}
                          fullWidth
                          id="lastName"
                          type="text"
                          name="lastName"
                          value={user.lastName}
                          onChange={handleChange}
                          error={!!errs.lastName}
                          helperText={errs.lastName && errs.lastName.message}
                        />
                      </Grid>
                    </Grid>

                    <Grid item container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          style={{ backgroundColor: "white" }}
                          fullWidth
                          id="email"
                          type="text"
                          name="email"
                          value={user.email}
                          onChange={handleChange}
                          error={!!errs.email}
                          helperText={errs.email && errs.email.message}
                        />
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
                          onChange={handleChange}
                          value={user.clubLevel}
                          error={!!errs.clubLevel}
                          helperText={errs.clubLevel && errs.clubLevel.message}
                        >
                          <MenuItem value="">Select Wine Club Level</MenuItem>
                          {wineClubLevels.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                    </Grid>

                    <Grid item container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          style={{ backgroundColor: "white" }}
                          fullWidth
                          label="Password"
                          id="password"
                          type="password"
                          name="password"
                          value={user.password}
                          onChange={handleChange}
                          error={!!errs.password}
                          helperText={errs.password && errs.password.message}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          style={{ backgroundColor: "white" }}
                          fullWidth
                          id="confirmPassword"
                          type="password"
                          name="confirmPassword"
                          value={user.confirmPassword}
                          onChange={handleChange}
                          label="Confirm Password"
                          error={!!errs.confirmPassword}
                          helperText={
                            errs.confirmPassword && errs.confirmPassword.message
                          }
                        />
                      </Grid>
                    </Grid>

                    <Grid item container spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <div>
                          <p>
                            {user.isAdmin
                              ? "Admin"
                              : user.isManager
                              ? "Manager"
                              : "Regular User"}
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid item container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <FormControlLabel
                          // name="isAdmin"
                          control={
                            <Checkbox
                              checked={user.isAdmin}
                              onChange={handleChange}
                              name="isAdmin"
                            />
                          }
                          label="Admin"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControlLabel
                          // name="isManager"
                          control={
                            <Checkbox
                              checked={user.isManager}
                              onChange={handleChange}
                              name="isManager"
                            />
                          }
                          label="Manager"
                        />
                      </Grid>
                    </Grid>

                    <Grid item container spacing={2}>
                      <Grid item>
                        <Button type="submit" variant="contained">
                          Update Wine Club Member
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid item container spacing={2}>
                      <Grid item>
                        <Button
                          type="submit"
                          variant="contained"
                          href="#MainDashboard"
                        >
                          Back
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
