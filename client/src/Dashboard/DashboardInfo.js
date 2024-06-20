import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const DashboardInfo = () => {
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
      <div className="flex flex-wrap items-stretch w-full">
        <div className="flex  flex-col w-full md:flex-row md:overflow-hidden overflow-hidden">
          <div className="flex flex-wrap flex-col w-full md:flex-row md:overflow-hidden overflow-hidden">
            <div className="min-w-[200px] flex-1 border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
              <div className="flex">
                <div className="px-4 pt-3">
                  <h5>Wine Club</h5>
                </div>
              </div>
              <div className="flex justify-center align-center rounded-xl bg-white p-2 m-2">
                <div>
                  <p>Silver</p>
                </div>
              </div>
            </div>

            <div className="min-w-[200px] flex-1 border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
              <div className="flex">
                <div className="px-4 pt-3">
                  <h5>Revenue</h5>
                </div>
              </div>
              <div className="flex justify-center align-center rounded-xl bg-white p-2 m-2">
                <div>
                  <p>Silver</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap flex-col w-full md:flex-row md:overflow-hidden overflow-hidden">
            <div className="min-w-[200px] flex-1 border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
              <div className="flex">
                <div className="px-4 pt-3">
                  <h5>Wine</h5>
                </div>
              </div>
              <div className="flex justify-center align-center rounded-xl bg-white p-2 m-2">
                <div>
                  <p>Red</p>
                </div>
              </div>
            </div>

            <div className="min-w-[200px] flex-1 border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
              <div className="flex">
                <div className="px-4 pt-3">
                  <h5>Wine</h5>
                </div>
              </div>
              <div className="flex justify-center align-center rounded-xl bg-white p-2 m-2">
                <div>
                  <p>Red</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col md:flex-col lg:flex-row md:overflow-hidden overflow-hidden">
          <div className=" flex-1 border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
            <div className="flex">
              <div className="px-4 pt-3">
                <h5>Monthly Revenue</h5>
              </div>
            </div>
            <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2"></div>
          </div>

          <div className="flex-1 border-2 rounded-xl bg-gray-100 shadow-sm relative overflow-hidden m-2">
            <div className="flex">
              <div className="px-4 pt-3">
                <h5>Recent Orders</h5>
              </div>
            </div>
            <div className="flex items-center  truncate rounded-xl bg-white p-4 m-2"></div>
          </div>
        </div>
      </div>

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
              columns={{ xs: 2, sm: 2, md: 2, lg: 2 }}
            >
              <Grid
                style={{ padding: "10px", textAlign: "center" }}
                item
                // xs={12}
                sm={12}
                md={12}
                lg={3}
              >
                <Item>
                  <div>
                    <h3
                      style={{
                        fontFamily: "Open Sans",
                        textTransform: "uppercase",
                      }}
                    >
                      hello
                    </h3>
                  </div>
                </Item>
              </Grid>
              <Grid
                style={{ padding: "10px", textAlign: "center" }}
                item
                // xs={12}
                sm={12}
                md={12}
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
                    <h3
                      style={{
                        fontFamily: "Open Sans",
                        textTransform: "uppercase",
                      }}
                    >
                      Free Tastings Available
                    </h3>
                    <div style={{ padding: "0px 25px" }}>
                      {/* {user.clubLevel === "Gold" ? (
                        <h1>5</h1>
                      ) : user.clubLevel === "Silver" ? (
                        <h1>3</h1>
                      ) : useUser.clubLevel === "Platinum" ? (
                        <h1>Unlimited</h1>
                      ) : null} */}
                    </div>
                  </div>
                </Item>
              </Grid>
            </Grid>

            <Grid
              // justifyContent="center"
              // alignItems="center"
              container
              spacing={0}
              columns={{ xs: 2, sm: 2, md: 2, lg: 2 }}
            >
              <Grid
                style={{ padding: "10px", textAlign: "center" }}
                item
                // xs={12}
                sm={12}
                md={12}
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
              <Grid
                style={{ padding: "10px", textAlign: "center" }}
                item
                // xs={12}
                sm={12}
                md={12}
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

export default DashboardInfo;
