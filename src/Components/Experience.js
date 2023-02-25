// import React from "react"
import js from "../js.png";
import Html from "../Components/three-scene";
import Css from "../Components/Css3d";
import Aos from "aos";
import "aos/dist/aos.css";
// import { useEffect } from "react";
// import html5 from "../html5.png";
import react from "../logo.svg";
// import css3 from "../css3.png"

const Experience = () => {
  Aos.init({ duration: 2000 });
  Aos.refresh();

  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1 data-aos="fade-up">Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3 data-aos="fade-left"> ReactJS</h3>
            <p data-aos="fade-left" className="firstjob">
              <ul>
                <li>
                  Fresher in React Developer with hands-on experience in
                  identifying web-based user interactions along with designing &
                  implementing highly-responsive user interface components by
                  deploying React concepts.
                </li>
                <li>
                  Proficient in translating designs & wireframes into
                  high-quality code, and writing application interface code via
                  Javascript and ReactJS workflows.
                </li>
                <li>
                  Adept at monitoring & maintaining frontend performance and
                  troubleshooting & debugging the same to bolster overall
                  performance.
                </li>
                <li>
                  Worked on a react app that allows users to add, edit, and
                  delete tasks they want to work on, and save in local storage
                  either the app opens in browser or not.
                </li>
                <li>
                  Understanding a basic react concepts of hooks , rendering,
                  props , virtual DOM, router, usestate, etc.
                </li>
                <li>
                  Knowledge of Threejs js used to create and display animated 3D
                  computer graphics in a web browser using WebGL.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <img
          data-aos="fade-right"
          className="react-img"
          src={react}
          alt="react"
        />
        {/* second job */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content ">
            <h3 data-aos="fade-right">JavaScript</h3>
            <p data-aos="fade-right" className="secondjob">
              <ul>
                <li>
                  Fresher in JavaScript Developer with necessary perception and
                  heavily Knowledge of javascript.
                </li>
                <li>
                  Worked on a weather App Using Javascript features, the user
                  can estimate the current-day climatic probability and
                  determine whether the day will be cloudy or sunny. In the
                  software, the user can write down the name of any city in the
                  world.
                </li>
                <li>
                  This project also includes a significant amount of javascript
                  to ensure the project’s functionality Scope.
                </li>
                <li>
                  Operate the concepts of rest API's and fetch the details.
                </li>
                <li>Working with Hoisting,Closures,Callbacks,Promises.</li>
                <li>
                  Knowledge of JavaScript(ES6) Class,Prototype,Async & Await.
                </li>
                <li>
                  intellect with Scope,JavaScript Closures, The Module Pattern.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <img
          data-aos="fade-left"
          className="js-img timeline-block timeline-block-right"
          src={js}
          alt="JavaScript"
        />
        {/* third job */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3 data-aos="fade-left"> HTML and CSS</h3>
            <p data-aos="fade-left" className="thirdjob">
              <ul>
                <li>
                  Created a simple yet very useful and well-maintained site is
                  developed with HTML tags. The whole project is designed in
                  HTML ,CSS and JavaScript language.
                </li>
                <li>
                  Different tags have been used for the development in the
                  project.
                </li>
                <li>
                  Functioning with all essential and usefull tags in HTML.
                </li>
                <li>
                  The syntax and forms of the language, Specificity,
                  inheritance, and the Cascade, CSS units and values and
                  functional notationsBox model and margin collapse are used in
                  project.
                </li>
                <li>
                  They containing block, Stacking and block-formatting contexts,
                  Initial, computed, used, and actual values.
                </li>
                <li>
                  CSS shorthand properties, CSS Flexible Box Layout, CSS Grid
                  Layout, CSS selectors, Media queries, Animation are used in
                  project.
                </li>
              </ul>
              <Html />
              <Css />
            </p>
          </div>
        </div>
        {/* <img className = "html5-img " src = {html5} alt = "html5" />  */}
        {/* <img className = "css3-img " src = {css3} alt = "css3" /> */}
        {/* fourth job */}
      </div>
    </div>
  );
};

export default Experience;
