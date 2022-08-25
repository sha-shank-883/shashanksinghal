import React from "react";
import Me from "../Me.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import {file_url} "../my-resume-shashank_singhal.docx "
// const {file_url}= "https://docs.google.com/document/d/1NPdMTcOUUJR7eQCqnnlJ4BFIP4wSk-JE/edit";
// const {filetype} = ".docx";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    // Aos.refresh();
  }, []);
  //   Aos.refresh();
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          {/* mb-5 and other vlaues bootstrap values */}
          <div data-aos="fade-right" className="photo-wrap mb-5">
            <img className="profile-img" src={Me} alt="author" />
            {/* <img className = "profile-img" src = {Me} alt = "author" /> */}
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 data-aos="fade-up" className="about-heading">
            About Me
          </h1>
          <p data-aos="fade-up" className="aboutp">
            I'm web designer & front-end developer with few month of experience.
            I'm interested in all kinds of web development, but my major focus
            is on full stack developer. I also have skills in other fields like
            branding, icon design or photo and video editing. As a web
            developer, I enjoy using my obsessive attention to detail, my
            unequivocal love for making things, and my mission-driven work ethic
            to literally change the world. That's why I’m excited to make a big
            impact at a high growth company. <br></br>
            <a href="Resume.pdf" download="Resume.pdf">
              <button data-aos="fade-up" className="btn-about-heading">
                {" "}
                Get Resume
              </button>
            </a>
          </p>
          {/* <iframe className={filetype} width="100%" height="600" frameborder="0" src={`https://docs.google.com/gview?url=${file_url}&embedded=true`}><button Resume> Resume </button></iframe> */}
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
