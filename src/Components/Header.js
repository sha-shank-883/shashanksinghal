import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div id= "home" className="header-wrapper">
            <div className="main-info">
                <h1> web development and website design</h1>
            
                <Typed
                className="typed-text"
                strings= {["Web Design", "Web Development", "HTML","CSS","JAVASCRIPT", "REACTJS"]}
                typeSpeed={50}
                backSpeed={30}
                
                loop
                
                />

                <Link smooth={true} to="contact"  className="btn-main-offer"  href="#" >Contact me </Link>

            
            </div>
            
        </div>
    )
}

export default Header;
