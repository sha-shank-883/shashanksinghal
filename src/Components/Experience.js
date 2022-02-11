// import React from "react"
// import js from "../js.png";
// import html5 from "../html5.png";
// import react from "../logo.svg"
// import css3 from "../css3.png"

function Experience() {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    {/* <img className = "react-img timeline-block timeline-block-right" src = {react} alt = "react" /> */}
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> React Application (September 2021 – Working)</h3>
                        <p className="firstjob">
                            {/* <img className = "react-img " src = {react} alt = "react" /> */}
                            <br></br>● Fresher in React Developer with hands-on experience in identifying web-based user interactions along with designing & implementing highly-responsive user interface components by deploying React concepts.
                            <br></br>● Proficient in translating designs & wireframes into high-quality code, and writing application interface code via Javascript and ReactJS workflows.
                            <br></br>● Adept at monitoring & maintaining frontend performance and troubleshooting & debugging the same to bolster overall performance.
                            <br></br>● Worked on a react app that allows users to add, edit, and delete tasks they want to work on, and save in local storage either the app opens in browser or not.
                            <br></br>● understanding a basic react concepts of hooks , rendering, props , virtual DOM, router, usestate, etc.
                            <br></br>● Knowledge of Threejs js used to create and display animated 3D computer graphics in a web browser using WebGL.
                        </p>
                        {/* <img className = "js-img timeline-block timeline-block-right" src = {js} alt = "JavaScript" /> */}
                    </div>
                </div>
                {/* second job */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content ">
                        <h3>JavaScript (Jun 2021 – August 2021)</h3>
                        <p className="secondjob">
                            {/* <img className = "js-img " src = {js} alt = "JavaScript" /> */}
                            <br></br>● Fresher in JavaScript Developer with necessary perception and heavily Knowledge of javascript.
                            <br></br>● Worked on a weather App Using Javascript features, the user can estimate the current-day climatic probability and determine whether the day will be cloudy or sunny. In the software, the user can write down the name of any city in the world. 
                            <br></br>● This project also includes a significant amount of javascript to ensure the project’s functionality Scope.                            
                            {/* <br></br>● IIFE (Immediately Invoked Function Expression) As the name suggests IIFE is a function in javascript which immediately invoked and executed as soon as it is defined.   */}
                            <br></br>● Operate the concepts of rest API's and fetch the details. 
                            <br></br>● Working with Hoisting,Closures,Callbacks,Promises.
                            <br></br>● Knowledge of JavaScript(ES6) Class,Prototype,Async & Await.
                            <br></br>● intellect with Scope,JavaScript Closures, The Module Pattern.
                        </p>
                    </div>
                </div>
                {/* third job */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3> HTML and CSS (March 2021 - May 2021)</h3>
                        <p className="thirdjob">
                            {/* <img className = "html5-img " src = {html5} alt = "html5" />  */}
                            {/* <img className = "css3-img " src = {css3} alt = "css3" /> */}
                            <br></br>● Created a simple yet very useful and well-maintained site is developed with HTML tags. The whole project is designed in HTML ,CSS and JavaScript language.
                            <br></br>● Different tags have been used for the development in the project.
                            <br></br>● Functioning with all essential and usefull tags in HTML.
                            <br></br>● The syntax and forms of the language, Specificity, inheritance, and the Cascade, CSS units and values and functional notationsBox model and margin collapse are used in project.
                            <br></br>● They containing block, Stacking and block-formatting contexts, Initial, computed, used, and actual values.
                            <br></br>● CSS shorthand properties, CSS Flexible Box Layout, CSS Grid Layout, CSS selectors, Media queries, Animation are used in project.
                            {/* <br></br>●  */}
                            {/* <br></br>●  */}
                        </p>
                    </div>
                </div>
                {/* fourth job */}

            </div>
        </div>
    )
}

export default Experience;
