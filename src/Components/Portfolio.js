/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Capture1 from "../Capture1.JPG";
import Capture4 from "../Capture4.JPG";
import Capture13 from "../Capture13.JPG";
import Calculator from "../Calculator.jpg";
import Capture15 from "../Capture15.JPG";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POP UP BOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

const Portfolio = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  // React-Website
  const openPopupboxReactWebsite = () => {
    const content = (
      <>
        <img
          // data-aos="fade-up"
          className="portfolio-image-popupbox"
          src={Capture1}
          alt="React website Application"
        />
        <p className="popup-desc">
          A react single page application for bussiness purpose , this
          application allows users to review my projects and contact with me to
          grow thier bussines.
        </p>
        <b className="link-desc">React-Website : </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(" https://sha-shank-883.github.io/react-app/")
          }
        >
          https://sha-shank-883.github.io/react-app/
        </a>
        <br></br>
        <b className="link-desc">GitHub : </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              " https://github.com/sha-shank-883/react-app/tree/master"
            )
          }
        >
          https://github.com/sha-shank-883/react-app/tree/master
        </a>
        <br></br>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigReactWebsite = {
    titleBar: {
      enable: false,
      // text: "React Website"
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // UniversityWebsite
  const openPopupboxUniversityWebsite = () => {
    const content = (
      <>
        <img
          // data-aos="fade-up"
          className="portfolio-image-popupbox"
          src={Capture4}
          alt="UniversityWebsite Application"
        />
        <p className="popup-desc">
          This simple yet very useful and well-maintained site is developed with
          HTML tags. The whole project is designed in HTML ,CSS and JavaScript
          language . Different tags have been used for the development of the
          project. It is quite easy to use and handle. There is no any error and
          warning contents in the project.
        </p>
        {/* <b>Netlify:</b><a className = "hyper-link" onClick = {() => window.open("https://tenanttruths.netlify.app/")}>https://tenanttruths.netlify.app/</a> */}
        <b className="link-desc">University-Wesite : </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://sha-shank-883.github.io/Universitywebsite/")
          }
        >
          https://sha-shank-883.github.io/Universitywebsite/
        </a>
        <br></br>
        <b className="link-desc">GitHub : </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/sha-shank-883/Universitywebsite")
          }
        >
          https://github.com/sha-shank-883/Universitywebsite
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigUniversityWebsite = {
    titleBar: {
      enable: false,
      // text: "UniversityWebsite"
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // WeatherApp
  const openPopupboxWeatherApp = () => {
    const content = (
      <>
        <img
          // data-aos="fade-up"
          className="portfolio-image-popupbox"
          src={Capture13}
          alt="WeatherApp Application"
        />
        <p className="popup-desc">
          Weather App Using Javascript features, the user can estimate the
          current-day climatic probability and determine whether the day will be
          cloudy or sunny. In the software, the user can write down the name of
          any city in the world. This project also includes a significant amount
          of javascript to ensure the project’s functionality.
        </p>
        {/* <b>Netlify:</b><a className = "hyper-link" onClick = {() => window.open("https://tenanttruths.netlify.app/")}>https://tenanttruths.netlify.app/</a> */}
        <b className="link-desc">Weather-App : </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://sha-shank-883.github.io/Weather-App/")
          }
        >
          https://sha-shank-883.github.io/Weather-App/
        </a>
        <br></br>
        <b className="link-desc">GitHub : </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/sha-shank-883/Weather-App")
          }
        >
          https://github.com/sha-shank-883/Weather-App
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigWeatherApp = {
    titleBar: {
      enable: false,
      // text: "WeatherApp"
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Todo App
  const openPopupboxCapture15 = () => {
    const content = (
      <>
        <img
          data-aos="fade-up"
          className="portfolio-image-popupbox"
          src={Capture15}
          alt="Todo App"
        />
        <p className="popup-desc">
          A react app that allows users to add, edit, and delete tasks they want
          to work on, and save in local storage either the app opens in browser
          or not.
        </p>
        {/* <b>Netlify:</b><a className = "hyper-link" onClick = {() => window.open("https://tenanttruths.netlify.app/")}>https://tenanttruths.netlify.app/</a> */}
        <b className="link-desc">Todo-App : </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://sha-shank-883.github.io/todo-app/")
          }
        >
          https://sha-shank-883.github.io/todo-app/
        </a>
        <br></br>
        <b className="link-desc">GitHub : </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/sha-shank-883/todo-App")
          }
        >
          https://github.com/sha-shank-883/todo-app
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCapture15 = {
    titleBar: {
      enable: false,
      // text: "Todo App"
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Calculator
  const openPopupboxCapture14 = () => {
    const content = (
      <>
        <img
          // data-aos="fade-up"
          className="portfolio-image-popupbox"
          src={Calculator}
          alt="Calculator "
        />
        <p className="popup-desc">
          A simple Calculator made with JavaScript language.
        </p>
        {/* <b>Netlify:</b><a className = "hyper-link" onClick = {() => window.open("https://tenanttruths.netlify.app/")}>https://tenanttruths.netlify.app/</a> */}
        <b className="link-desc">Calculator : </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://sha-shank-883.github.io/Calculator/")
          }
        >
          https://sha-shank-883.github.io/Calculator/
        </a>
        <br></br>
        <b className="link-desc">GitHub : </b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/sha-shank-883/Calculator")
          }
        >
          https://github.com/sha-shank-883/Calculator
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCapture14 = {
    titleBar: {
      enable: false,
      // text: "Calculator"
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center ">
          {/* first project */}
          <Carousel infiniteLoop width={"90%"}>
            <div
              // data-aos="fade-up"
              className="portfolio-image-box"
              onClick={openPopupboxReactWebsite}
            >
              <img
                className="portfolio-image"
                src={Capture1}
                alt="React-app Project"
              />
              <p className="legend">React-App</p>

              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>

            {/* second project */}
            <div
              // data-aos="fade-up"
              className="portfolio-image-box"
              onClick={openPopupboxUniversityWebsite}
            >
              <img
                className="portfolio-image"
                src={Capture4}
                alt="university-website Project"
              />
              <p className="legend">University Website </p>
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* third project */}

            <div
              // data-aos="fade-up"
              className="portfolio-image-box"
              onClick={openPopupboxWeatherApp}
            >
              <img
                className="portfolio-image"
                src={Capture13}
                alt="weather-app Project"
              />
              <p className="legend">Weather-App</p>
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* fourth project */}

            <div
              // data-aos="fade-up"
              className="portfolio-image-box"
              onClick={openPopupboxCapture15}
            >
              <img
                className="portfolio-image"
                src={Capture15}
                alt="weather-app Project"
              />
              <p className="legend">Todo-App</p>
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            {/* fifth project */}

            <div
              // data-aos="fade-up"
              className="portfolio-image-box"
              onClick={openPopupboxCapture14}
            >
              <img
                className="portfolio-image"
                src={Calculator}
                alt="weather-app Project"
              />
              <p className="legend">Calculator</p>
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </Carousel>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigReactWebsite} />
      <PopupboxContainer {...popupboxConfigUniversityWebsite} />
      <PopupboxContainer {...popupboxConfigWeatherApp} />
      <PopupboxContainer {...popupboxConfigCapture15} />
      <PopupboxContainer {...popupboxConfigCapture14} />
    </div>
  );
};
export default Portfolio;
