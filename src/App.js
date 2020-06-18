import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "./images/logo.jpg";
import Grow from "./images/grow.jpg";
import Grow2 from "./images/Grow 2.jpg";
import Harvest from "./images/harvest.jpg";
import Harvest2 from "./images/harvest2.jpg";
import Cook from "./images/cook.jpg";
import Prepare from "./images/prepare.jpg";
import Drink from "./images/drink.jpg";
import Alcohol from "./images/alcohol.jpg";
import Arrange from "./images/arrange.jpg";
import Arrange2 from "./images/arrange2.jpg";
import Gopher from "./images/gopher.jpg";
import DeadPlant from "./images/deadplant.jpg";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      overflowY: "auto!important",
      height: "100%",
    },
  },
  appBar: {
    borderBottom: "none!important",
    boxShadow: "none!important",
    backgroundColor: "#fff",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
    fontFamily: "sansita",
    color: "green",
    fontSize: "36px",
    textAlign: "left",
  },
  footerTitle: {
    fontFamily: "sansita",
    color: "#4E4E4E",
    fontSize: "20px",
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "11px",
    letterSpacing: "0.25px",
    color: "green",
  },
  mainContent: {
    padding: theme.spacing(8, 0, 6),
    maxWidth: 400,
    "@media (max-width: 960px)": {
      maxWidth: 600,
    },
    "@media (orientation: portrait)": {
      marginTop: -10,
    },
  },
  subContent: {
    padding: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 600px)": {
      maxWidth: 400,
    },
  },
  mainHeading: {
    textAlign: "center",
    color: "4E4E4E",
    fontFamily: "Sansita",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    "@media (max-width: 960px)": {
      fontSize: 32,
      marginTop: -40,
      marginBottom: 0,
    },
    "@media (max-width: 600px)": {
      fontSize: 32,
      margin: 0,
      padding: 0,
    },
  },
  subHeading: {
    fontSize: "14pt",
    textAlign: "center",
    fontFamily: "Roboto Condensed",
    margin: "0 auto",
    fontWeight: "bold",
    "@media (min-width: 960px)": {
      maxWidth: 400,
    },
  },
  button: {
    backgroundColor: "green",
    fontFamily: "Roboto Condensed",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: "20px",
    color: "#fff",
    padding: "15px",
    "@media (max-width: 960px)": {
      marginTop: -20,
    },
    "@media (max-width: 600px)": {
      marginTop: 10,
    },
    "@media (max-width: 400px)": {
      margin: 0,
    },
  },
  butttonContainer: {
    textAlign: "center",
  },
  h1: {
    fontSize: "25pt",
    textAlign: "center",
    fontFamily: "Roboto Condensed",
    margin: "0 auto",
    fontWeight: 500,
    "@media (min-width: 960px)": {
      maxWidth: 400,
    },
  },
  p: {
    fontSize: "14pt",
    textAlign: "center",
    fontFamily: "Roboto Condensed",
    margin: "0 auto",
    "@media (min-width: 960px)": {
      maxWidth: 400,
    },
  },
}));

export default function App() {
  const classes = useStyles();
  AOS.init();

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            noWrap
            className={classes.toolbarTitle}
          ></Typography>
          <nav>
            <Link variant="button" href="/login" className={classes.link}>
              SIGN UP
            </Link>
            <Link variant="button" href="/login" className={classes.link}>
              LOGIN
            </Link>
          </nav>
        </Toolbar>
      </AppBar>

      <div
        className="heading"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0!important",
        }}
      >
        {/* Sub text */}
        <div data-aos="fade-right" data-aos-easing="ease-in">
          <Container className={classes.subContent}>
            <img
              src={Logo}
              alt="plantasy logo"
              style={{ width: "550px", height: "500px" }}
            />
          </Container>
          {/* End sub text */}
        </div>
        {/* Main text */}
        <div data-aos="fade-left" data-aos-easing="ease-in">
          <Container component="main" className={classes.mainContent}>
            <Typography
              component="h1"
              variant="h2"
              gutterBottom
              className={classes.mainHeading}
            >
              Gardening <br></br>with a competitive twist!
            </Typography>
            <Typography className={classes.p}>
              Compete with fellow gardeners from all over the world while you
              grow your own plants, fruits, and veggies. Get points for growing,
              harvesting, cooking, or arranging anything from your garden!
              Careful not to lose any of your plants to sneaky pests,
              unforgiving elements, or neglect.{" "}
            </Typography>
          </Container>
          <Container
            maxWidth="md"
            component="main"
            className={classes.butttonContainer}
          >
            <Button component="button" className={classes.button}>
              Get Started
            </Button>
          </Container>
        </div>
      </div>
      <br></br>
      <br style={{ margin: "4%", marginTop: "8%" }} />
      <h1 className={classes.h1}> Point System </h1>
      <br></br>
      <br></br>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#4E4E4E",
          marginTop: ".5%",
          marginBottom: "1%",
        }}
      >
        <h2 style={{ marginLeft: "1%", color: "white" }}>Grow from Seed</h2>
        <h2 style={{ color: "limegreen", marginRight: "1%" }}>+10 Points</h2>
      </div>

      {/* Start of Grow*/}
      <div
        data-aos="fade-right"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        className="section1"
      >
        <div>
          <img
            src={Grow}
            alt="growing pic"
            style={{ width: "500px", height: "350px" }}
          />
        </div>

        <div>
          <img
            src={Grow2}
            alt="growing pic"
            style={{ width: "500px", height: "350px" }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#4E4E4E",
          marginTop: ".5%",
          marginBottom: "1%",
        }}
      >
        <h2 style={{ marginLeft: "1%", color: "white" }}>Harvest</h2>
        <h2 style={{ color: "limegreen", marginRight: "1%" }}>+10 Points</h2>
      </div>

      {/* Start of Harvest */}
      <div
        data-aos="fade-left"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        className="section2"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img
              src={Harvest}
              alt="harvest pic"
              style={{ width: "500px", height: "350px" }}
            />
          </div>
        </div>

        <div>
          <img
            src={Harvest2}
            alt="harvest pic"
            style={{ width: "500px", height: "350px" }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#4E4E4E",
          marginTop: ".5%",
          marginBottom: "1%",
        }}
      >
        <h2 style={{ marginLeft: "1%", color: "white" }}>Cook</h2>
        <h2 style={{ color: "limegreen", marginRight: "1%" }}>+5 Points</h2>
      </div>

      {/* Start of Cook*/}
      <div
        data-aos="fade-right"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        className="section1"
      >
        <div>
          <img
            src={Cook}
            alt="cooking pic"
            style={{ width: "500px", height: "350px" }}
          />
        </div>

        <div>
          <img
            src={Prepare}
            alt="preparing pic"
            style={{ width: "500px", height: "350px" }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#4E4E4E",
          marginTop: ".5%",
          marginBottom: "1%",
        }}
      >
        <h2 style={{ marginLeft: "1%", color: "white" }}>Drink</h2>
        <h2 style={{ color: "limegreen", marginRight: "1%" }}>+5 Points</h2>
      </div>
      {/* Start of Drink */}
      <div
        data-aos="fade-left"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        className="section2"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img
              src={Drink}
              alt="drink pic"
              style={{ width: "500px", height: "350px" }}
            />
          </div>
        </div>

        <div>
          <img
            src={Alcohol}
            alt="alcohol drink"
            style={{ width: "500px", height: "350px" }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#4E4E4E",
          marginTop: ".5%",
          marginBottom: "1%",
        }}
      >
        <h2 style={{ marginLeft: "1%", color: "white" }}>Arrange</h2>
        <h2 style={{ color: "limegreen", marginRight: "1%" }}>+5 Points</h2>
      </div>

      {/* Start of Arrange*/}
      <div
        data-aos="fade-right"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        className="section1"
      >
        <div>
          <img
            src={Arrange2}
            alt="preparing pic"
            style={{ width: "500px", height: "350px" }}
          />
        </div>
        <div>
          <img
            src={Arrange}
            alt="cooking pic"
            style={{ width: "500px", height: "350px" }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#4E4E4E",
          marginTop: ".5%",
          marginBottom: "1%",
        }}
      >
        <h2 style={{ marginLeft: "1%", color: "white" }}>Lose a Plant</h2>
        <h2 style={{ color: "red", marginRight: "1%" }}>-10 Points</h2>
      </div>
      {/* Start of Lose Points */}
      <div
        data-aos="fade-left"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        className="section2"
      >
        <div>
          <img
            src={DeadPlant}
            alt="dead plant"
            style={{ width: "500px", height: "350px" }}
          />
        </div>
        <div>
          <img
            src={Gopher}
            alt="gopher"
            style={{ width: "500px", height: "350px" }}
          />
        </div>
      </div>
      {/* Start of CTA 2 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "whitesmoke",
        }}
        className="sectioncta2"
      >
        <h1>
          "The love of gardening is a seed once sown that never dies."
        </h1>
      </div>
    </div>
  );
}
