import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

import { ContactForm } from "./ContactForm";
import HomeImages from "./HomeImages";

import wineClub from "../assets/wine_club_2.jpeg";
import tasting from "../assets/tasting.jpeg";
import food from "../assets/food.jpeg";
import calendar from "../assets/calendar.jpeg";

function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={8}>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "50px",
                  fontFamily: "Open Sans",
                  textTransform: "uppercase",
                }}
              >
                The Wine Club
              </h1>
              <p style={{ lineHeight: "2", fontSize: "20px" }}>
                Sed quid ages tandem, si utilitas ab amicitia, ut fit saepe,
                defecerit? Hoc enim constituto in philosophia constituta sunt
                omnia. Quamquam te quidem video minime esse deterritum. Sic enim
                censent, oportunitatis esse beate vivere. Quid enim tanto opus
                est instrumento in optimis artibus comparandis? Omnium enim
                rerum principia parva sunt, sed suis progressionibus usa
                augentur nec sine causa; Hoc Hieronymus summum bonum esse dixit.
              </p>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Box sx={{ flexGrow: 1 }}>
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
                  <img src={wineClub} alt="" style={{ maxWidth: "150px" }} />
                </div>
                <div>
                  <h1
                    style={{
                      fontFamily: "Open Sans",
                      textTransform: "uppercase",
                    }}
                  >
                    Wine Club
                  </h1>
                  <div style={{ padding: "0px 25px" }}>
                    <p>
                      Duarum enim vitarum nobis erunt instituta capienda. Hunc
                      vos beatum; Igitur ne dolorem quidem. Est enim effectrix
                      multarum et magnarum voluptatum. Nec enim, dum metuit,
                      iustus est, et certe, si metuere destiterit, non erit;
                    </p>
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
                  <img src={tasting} alt="" style={{ maxWidth: "150px" }} />
                </div>
                <div>
                  <h1
                    style={{
                      fontFamily: "Open Sans",
                      textTransform: "uppercase",
                    }}
                  >
                    Tasting Room
                  </h1>
                  <div style={{ padding: "0px 25px" }}>
                    <p>
                      Duarum enim vitarum nobis erunt instituta capienda. Hunc
                      vos beatum; Igitur ne dolorem quidem. Est enim effectrix
                      multarum et magnarum voluptatum. Nec enim, dum metuit,
                      iustus est, et certe, si metuere destiterit, non erit;
                    </p>
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
                  <img src={food} alt="" style={{ maxWidth: "150px" }} />
                </div>
                <div>
                  <h1
                    style={{
                      fontFamily: "Open Sans",
                      textTransform: "uppercase",
                    }}
                  >
                    Cuisine
                  </h1>
                  <div style={{ padding: "0px 25px" }}>
                    <p>
                      Duarum enim vitarum nobis erunt instituta capienda. Hunc
                      vos beatum; Igitur ne dolorem quidem. Est enim effectrix
                      multarum et magnarum voluptatum. Nec enim, dum metuit,
                      iustus est, et certe, si metuere destiterit, non erit;
                    </p>
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
                  <img src={calendar} alt="" style={{ maxWidth: "150px" }} />
                </div>
                <div>
                  <h1
                    style={{
                      fontFamily: "Open Sans",
                      textTransform: "uppercase",
                    }}
                  >
                    Book Events
                  </h1>
                  <div style={{ padding: "0px 25px" }}>
                    <p>
                      Duarum enim vitarum nobis erunt instituta capienda. Hunc
                      vos beatum; Igitur ne dolorem quidem. Est enim effectrix
                      multarum et magnarum voluptatum. Nec enim, dum metuit,
                      iustus est, et certe, si metuere destiterit, non erit;
                    </p>
                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div>
        <HomeImages />
      </div>
      <div>
        <ContactForm />
      </div>

      {/* <div>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'solid black 1px' }}>
          <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={8}>
              <h1>Wine Club</h1>
            </Grid>
            <Grid item xs={8}>
              <h1>Wine Club</h1>
            </Grid>
          </Grid>
        </Box>
      </div> */}
    </div>
  );
}

export default Home;
