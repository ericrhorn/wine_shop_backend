import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RegistrationForm from "./RegistrationForm";
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
            <div className="flex flex-col m-auto w-[80%] pb-4">
              <div className="flex justify-center">
                <h1>Join Wine Clubs Wine Club</h1>
              </div>
              <div className="flex justify-center text-justify">
                <p>
                  freestar freestar freestar Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Nullam varius tortor magna, non
                  hendrerit risus vehicula in. Integer congue hendrerit ligula
                  nec sollicitudin. Curabitur scelerisque nisi sapien, sit amet
                  pellentesque arcu molestie sit amet. Nam ut enim id lacus
                  maximus commodo ac quis neque. Integer scelerisque dui augue,
                  eu convallis urna scelerisque quis. Integer quis volutpat
                  lectus. Nullam quis cursus libero, eget tincidunt justo. Cras
                  lectus dui, auctor ut nisl nec, condimentum molestie purus.
                  Donec maximus ut elit id fringilla. Sed hendrerit sodales sem,
                  et porta risus porttitor at.
                </p>
              </div>
            </div>
            {/* <Grid
              justifyContent="center"
              alignItems="center"
              container
              spacing={0}
              columns={{ xs: 2, sm: 4, md: 8, lg: 12 }}
            >
              <div className="flex">
                <h1>Join Wine Clubs Wine Club</h1>
              </div>
              <div className="flex">
                <p>more info here</p>
              </div>
            </Grid> */}
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
        <div style={{ width: "80%", margin: "auto", paddingBottom: "100px" }}>
          <RegistrationForm setIsLoggedin={setIsLoggedin} />
        </div>
      </div>
    </>
  );
};

export default WineClub;
