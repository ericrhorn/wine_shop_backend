import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RegistrationForm from "../Home/RegistrationForm";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const WineClub = (props) => {
  const { setIsLoggedin } = props;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <div id="container" style={{ height: "" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "50px",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              justifyContent="center"
              alignItems="center"
              container
              spacing={0}
              columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}
              display='flex'
            >
              <div className="flex">
                <h1>Join Wine Clubs Wine Club</h1>
              </div>
              <div>
                <p>more info here</p>
              </div>
            </Grid>
            <Grid
              justifyContent="center"
              alignItems="center"
              container
              spacing={0}
              columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}
            >
              <Grid
                style={{ padding: "10px", textAlign: "center" }}
                item
                xs={12}
                sm={6}
                md={3}
                lg={3}
              >
                <Item>
                  <div>
                    <img
                      // src={tasting}
                      alt=""
                      style={{ maxWidth: "1px", margin: "auto" }}
                    />
                  </div>
                  <div>
                    <h1
                      style={{
                        fontFamily: "Open Sans",
                        textTransform: "uppercase",
                      }}
                    >
                      Silver
                    </h1>
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
                xs={12}
                sm={6}
                md={3}
                lg={3}
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
                    <h1
                      style={{
                        fontFamily: "Open Sans",
                        textTransform: "uppercase",
                      }}
                    >
                      Gold
                    </h1>
                    <div style={{ padding: "0px 25px" }}>
                      <p>$175 every 3 months</p>
                      <p>5 Free Tastings a month</p>
                      <p>5 wines of your choice shipped quarterly</p>
                    </div>
                  </div>
                </Item>
              </Grid>
              <Grid
                style={{ padding: "10px", textAlign: "center" }}
                item
                xs={12}
                sm={6}
                md={3}
                lg={3}
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
                    <h1
                      style={{
                        fontFamily: "Open Sans",
                        textTransform: "uppercase",
                      }}
                    >
                      Platinum
                    </h1>
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
        <div style={{ width: "60%", margin: "auto", paddingBottom: "100px" }}>
          <RegistrationForm setIsLoggedin={setIsLoggedin} />
        </div>
      </div>
    </>
  );
};

export default WineClub;
