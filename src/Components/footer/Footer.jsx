import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Mokshad Sankhe</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          {/* <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li> */}
          <li>
            <a href="#internships" className="footer_link">
              Internship
            </a>
          </li>
          <li>
            <a href="#qualification" className="footer_link">
              Qualifications
            </a>
          </li>
          <li>
            <a href="#contact" className="footer_link">
              Contact
            </a>
          </li>
        </ul>
        <ul className="footer_social">
          <a 
            href="https://www.instagram.com/mokshu_sankhe"
            className="footer_social-link"
          >
            <i className="uil uil-instagram "></i>
          </a>
          <a href="mailto:mokshadsankhe@gmail.com" className="footer_social-link">
            <i className="uil uil-envelope"></i>
          </a>
          <a href="https://github.com/Mokshu3242" className="footer_social-link">
            <i className="uil uil-github-alt "></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mokshad-sankhe"
            className="footer_social-link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </ul>
        <span className="footer_copy">&#169; Mokshad Sankhe. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
