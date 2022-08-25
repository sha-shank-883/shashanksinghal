import React from "react";
import { Link } from "react-scroll";
import logo7 from "../logo7.svg";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <img className="logo" src={logo7} alt="logo.." />{" "}
          <img className="App-logo" src={logo} alt="logo.." />{" "}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                smooth={true}
                to="home"
                className="nav-link"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-60}
                to="about"
                className="nav-link"
                href="#"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                offset={-10}
                to="experience"
                className="nav-link"
                href="#"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" className="nav-link" href="#">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contact" className="nav-link" href="#">
                Contact{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
