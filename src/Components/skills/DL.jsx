import React from "react";
import "./skills.css";

const DL = () => {
  const deepLearningSkills = [
    { name: "CNN", level: "Beginner" },
    { name: "PyTorch", level: "Beginner" },
    { name: "Keras", level: "Beginner" },
    { name: "Tensorflow", level: "Beginner" },
  ];
  return (
    <div className="skills_content">
      <h3 className="skills_title">Deep Learning Developer</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills-grid">
            {deepLearningSkills.map((skill, index) => (
              <div key={index} className="skill">
                <i className="bx bx-badge-check"></i>
                <div className="skill-item">
                  <span className="skills_name">{skill.name}</span>
                  <span className="skills_level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DL;
