import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useUser } from "../Context/UserContext";

const UserDashboard = () => {
  const { user } = useUser();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    width: "100%",
    margin: "auto",
    alignContent: "center",
    // minWidth: "272px",
    height: "225px",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              // justifyContent="center"
              // alignItems="center"
              container
              spacing={0}
              columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}
            >
              <Grid
                style={{ padding: "10px", textAlign: "center" }}
                item
                // xs={12}
                sm={12}
                md={12}
                lg={4}
              >
                <Item>
                  <div>
                    <h3
                      style={{
                        fontFamily: "Open Sans",
                        textTransform: "uppercase",
                      }}
                    >
                      {user.clubLevel} Level
                    </h3>
                    <div style={{ padding: "0px 25px" }}>
                      <p>$125 every 3 months</p>
                      <p>3 free Tastings a month</p>
                      <p>3 wines of your choice shipped quarterly</p>
                    </div>
                  </div>
                </Item>
              </Grid>
              <Grid
                style={{ padding: "10px", textAlign: "center" }}
                item
                // xs={12}
                sm={12}
                md={12}
                lg={4}
              >
                <Item>
                  <div>
                    <img
                      // src={food}
                      alt=""
                      style={{ maxWidth: "150px", margin: "auto" }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "Open Sans",
                        textTransform: "uppercase",
                      }}
                    >
                      Free Tastings Available
                    </h3>
                    <div style={{ padding: "0px 25px" }}>
                      {user.clubLevel === "Gold" ? (
                        <h1>5</h1>
                      ) : user.clubLevel === "Silver" ? (
                        <h1>3</h1>
                      ): useUser.clubLevel === "Platinum" ? (
                        <h1>Unlimited</h1>
                      ):null}
                    </div>
                  </div>
                </Item>
              </Grid>
              <Grid
                style={{ padding: "10px", textAlign: "center" }}
                item
                // xs={12}
                sm={12}
                md={12}
                lg={4}
              >
                <Item>
                  <div>
                    <img
                      // src={calendar}
                      alt=""
                      style={{ maxWidth: "150px", margin: "auto" }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "Open Sans",
                        textTransform: "uppercase",
                      }}
                    >
                      Platinum
                    </h3>
                    <div style={{ padding: "0px 25px" }}>
                      <p>$250 every 3 months</p>
                      <p>Unlimited Free Tastings a month</p>
                      <p>7 wines of your choice shipped quarterly</p>
                    </div>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
