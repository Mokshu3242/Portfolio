import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import ML from "./ML";
import DL from "./DL";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical Level</span>
      {/* Python */}
      <div className="skills__border">
      <h4 className="section_subtitle">Python</h4>
      <div className="skills_container container grid">
          <ML/>
          <DL/>
      </div>
      </div>
      <div className="skills__border">
      {/* web Development */}
      <h4 className="section_subtitle">Web Development</h4>
      <div className="skills_container container grid">
          <Frontend />
          <Backend />
      </div>
      </div>
    </section>
  );
};

export default Skills;
