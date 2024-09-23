import React from "react";

const Backend = () => {
  const backendSkills = [
    { name: "PHP", level: "Intermediate" },
    { name: "NodeJs", level: "Beginner" },
    { name: "MySQL", level: "Intermediate" },
    { name: "ExpressJs", level: "Beginner" },
  ];

  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend Developer</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills-grid">
            {backendSkills.map((skill, index) => (
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

export default Backend;
