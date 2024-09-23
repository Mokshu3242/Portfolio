import React from "react";

const Frontend = () => {
  const frontendSkills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "React Js", level: "Beginner" },
    { name: "GIT", level: "Beginner" },
  ];

  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend Developer</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills-grid">
            {frontendSkills.map((skill, index) => (
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

export default Frontend;
