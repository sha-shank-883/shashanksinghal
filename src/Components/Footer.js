import React from "react";
import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import Aos from "aos";
import "aos/dist/aos.css";
// import { useEffect } from "react";

const Footer = () => {
  Aos.init({ duration: 2000 });
  Aos.refresh();

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            {/* Address */}
            <div className="d-flex">
              <p> India</p>
            </div>
            {/* Number */}
            <div className="d-flex">
              <a href="tel:91 8881781203">+91 8881781203</a>
            </div>
            {/* email */}
            <div className="d-flex">
              <a href="mailto: shashanksnghal883@gmail.com">
                shashanksinghal883@gmail.com
              </a>
            </div>
          </div>

          <div className="f-link col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link
                  data-aos="fade-up"
                  smooth={true}
                  to="home"
                  className="footer-nav"
                  href="#"
                >
                  Home
                </Link>
                <br />

                <Link
                  data-aos="fade-up"
                  smooth={true}
                  to="about"
                  className="footer-nav"
                  href="#"
                >
                  About Me
                </Link>
                <br />

                <Link
                  data-aos="fade-up"
                  smooth={true}
                  to="experience"
                  className="footer-nav"
                  href="#"
                >
                  Experience
                </Link>
              </div>
              <div className="col">
                <Link
                  data-aos="fade-up"
                  smooth={true}
                  to="portfolio"
                  className="footer-nav"
                  href="#"
                >
                  Portfolio
                </Link>
                <br />

                <Link
                  data-aos="fade-up"
                  smooth={true}
                  to="contact"
                  className="footer-nav"
                  href="#"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="social-icons col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className=" Social-id d-flex justify-content-right">
              <div data-aos="zoom-in" className="contact-linkedin">
                <SocialIcon
                  data-aos="zoom-in"
                  target="_blank"
                  url="https://www.linkedin.com/in/shashank-singhal-"
                  fgColor="white"
                  bgColor=""
                />
                <a
                  className="linkedin-a"
                  href="https://www.linkedin.com/in/shashank-singhal-"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>

              <div data-aos="zoom-in" className="contact-github">
                <SocialIcon
                  target="_blank"
                  url="https://github.com/sha-shank-883"
                  fgColor="white"
                  bgColor=""
                />
                <a
                  className="linkedin-a"
                  href="https://github.com/sha-shank-883"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>

              <div data-aos="zoom-in" className="contact-facebook">
                <SocialIcon
                  target="_blank"
                  url="https://www.facebook.com/profile.php?id=100009010986550"
                  fgColor="white"
                  bgColor=""
                />
                <a
                  className="linkedin-a"
                  href="https://www.facebook.com/profile.php?id=100009010986550"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </div>
              <div data-aos="zoom-in" className="contact-instagram">
                <SocialIcon
                  target="_blank"
                  url="https://www.instagram.com/shashank_singhal_883/"
                  fgColor="white"
                  bgColor="transparent"
                />
                <a
                  className="linkedin-a"
                  href="https://www.instagram.com/shashank_singhal_883/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>

              <div data-aos="zoom-in" className="contact-twitter">
                <SocialIcon
                  target="_blank"
                  url="https://twitter.com/shashan23126715?t=yPf4uIHXLrgxc2sRK0Hj5Q&s=08"
                  fgColor="white"
                  bgColor=""
                />
                <a
                  className="linkedin-a"
                  href="https://twitter.com/shashan23126715?t=yPf4uIHXLrgxc2sRK0Hj5Q&s=08"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="Fline">
          © 2022 Shashank singhal. All Right Reserved | Terms and Conditions.
        </p>
      </div>
    </div>
  );
};

export default Footer;
