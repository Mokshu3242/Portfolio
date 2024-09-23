import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualifications</h2>
      <span className="section_subtitle">My Personal Journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={`qualification_button button-flex ${
              activeTab === "education" ? "qualification_active" : ""
            }`}
            onClick={() => setActiveTab("education")}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
            Education
          </div>
          {/* <div
            className={`qualification_button button-flex ${
              activeTab === "experience" ? "qualification_active" : ""
            }`}
            onClick={() => setActiveTab("experience")}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
            Experience
          </div> */}
        </div>
        <div className="qualification_sections">
          {activeTab === "education" && (
            <div className="qualification_content">
              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">
                    Bachelor of Engineering,<br /> AI & Data Science
                  </h3>
                  <span className="qualification_subtitle">
                    Vidyavardhini's College of Engineering, Vasai
                  </span>
                  <div className="qualification_calendar">
                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <div className="qualification_line"></div>
                </div>
              </div>

              <div className="qualification_data">
                <div></div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
                <div>
                  <h3 className="qualification_title">
                    Diploma in <br />Information Technology
                  </h3>
                  <span className="qualification_subtitle">
                    Thakur Polytechnic, Kandivali
                  </span>
                  <div className="qualification_calendar">
                    <i className="uil uil-calendar-alt"></i> 2019 - 2022
                  </div>
                </div>
              </div>

              <div className="qualification_data">
                <div>
                  <h3 className="qualification_title">
                    10th <br /> (Secondary Examination)
                  </h3>
                  <span className="qualification_subtitle">
                    National English High School, Virar
                  </span>
                  <div className="qualification_calendar">
                    <i className="uil uil-calendar-alt"></i> 2019
                  </div>
                </div>
                <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
                </div>
              </div>
            </div>
          )}

          {/* {activeTab === "experience" && (
            <div className="qualification_content">
              Add experience content here 
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
