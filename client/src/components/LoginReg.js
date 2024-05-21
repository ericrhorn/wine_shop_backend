import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Grid } from "@mui/material";

const LoginReg = (props) => {
  const navigate = useNavigate();
  const { setIsLoggedin } = props;
  const [errs, setErrs] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/user/login", user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setIsLoggedin(true);
        setErrs("");
        setUser({
          email: "",
          password: "",
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate("/MainDashboard");
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setErrs(err.response.data.error);
      });
  };

  return (
    <>
      <div id="container" style={{ margin: "auto" }}>
        <div style={{ maxWidth: "300px" }}>
          <form onSubmit={login}>
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
                <Grid item container spacing={2}>
                  <Grid item container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <h4 style={{ color: "white" }}>Wine Club Login</h4>
                      {/* <p className="error-text" style={{ color: "red" }}>
                        {errs ? errs : ""}
                      </p> */}
                      <TextField
                        style={{ backgroundColor: "white", color: "white" }}
                        fullWidth
                        id="email"
                        className="form-control"
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        label="Email"
                        error={!!errs} // Convert errs.email to a boolean value
                        helperText={errs && errs}
                      />
                      {/* <br />
                      {errs.email ? (
                        <span className="error-text" style={{ color: "red" }}>
                          {errs.email.message}
                        </span>
                      ) : null} */}
                    </Grid>
                  </Grid>
                  <Grid item container spacing={2}>
                    <Grid item xs={12} sm={12}>
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
                        error={!!errs} // Convert errs.email to a boolean value
                        helperText={errs && errs}
                      />
                      {/* <br />
                      {errs.password ? (
                        <span className="error-text" style={{ color: "red" }}>
                          {errs.password.message}
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
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid className="mt-2">
                <a href="">Forgot Password?</a>
              </Grid>
            </Box>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginReg;
