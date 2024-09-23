import React, { useState } from "react";
import "./projects.css";

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null);

  const projectData = [
    {
      title: (
        <>
          Artificial Intelligence & Machine Learning <br /> Internship
        </>
      ),
      modalTitle: <>Artificial Intelligence & Machine Learning Internship</>,
      imageUrl: "", // Replace with the actual image path
      description:
        "Completed a 30-day virtual internship focusing on AI/ML concepts and Python programming. Developed hands-on projects including a Tic Tac Toe game using the Minimax algorithm and a chatbot.",
      tasks: [
        "Solved the Chicken Crossing problem",
        "Created machine learning models like decision trees and random forests",
        "Applied Python programming skills in AI/ML projects",
      ],
    },
    {
      title: (
        <>
          Machine Learning <br /> Internship
        </>
      ),
      modalTitle: <>Machine Learning Internship</>,
      imageUrl: "", // Replace with the actual image path
      description:
        "Developed machine learning models for fraud detection using Python on a dataset with 50K+ records. Created interactive Jupyter notebooks and generated predictions.",
      tasks: [
        "Developed a fraud detection model",
        "Implemented decision tree and random forest algorithms",
        "Analyzed large datasets using machine learning algorithms",
        "Created insights and predictions using Jupyter notebooks",
      ],
    },
    {
      title: (
        <>
          Android App Development <br /> Internship
        </>
      ),
      modalTitle: <>Android App Development Internship</>,
      imageUrl: "", // Replace with the actual image path
      description:
        "Developed two real-world Android applications (To-Do List and Flashlight) using Java and XML. Implemented intuitive user interfaces and used SQLite for data storage.",
      tasks: [
        "Developed To-Do List and Flashlight apps",
        "Used Java and XML for Android development",
        "Implemented UI/UX best practices",
        "Handled local data storage with SQLite",
      ],
    },
  ];

  const toggleModal = (index) => {
    setActiveModal(activeModal === index ? null : index);
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">What I have completed?</span>

      <div className="projects_container container grid">
        {projectData.map((project, index) => (
          <div className="projects_content" key={index}>
            <div>
              <img
                src={project.imageUrl}
                alt="project_image"
                className="projects_image"
              />
              <h3 className="projects_title">{project.title}</h3>
            </div>
            <span
              className="projects_button"
              onClick={() => toggleModal(index)}
            >
              View More
              <i className="uil uil-arrow-right projects_button-icon"></i>
            </span>

            {/* Modal */}
            {activeModal === index && (
              <div className="projects_model">
                <div className="projects_modal-content">
                  <i
                    className="uil uil-times projects_model-close"
                    onClick={() => toggleModal(null)}
                  ></i>
                  <h3 className="projects_model-title">{project.modalTitle}</h3>
                  <p className="projects_model-description">
                    {project.description}
                  </p>
                  <ul className="projects_model-projects grid">
                    {project.tasks.map((task, taskIndex) => (
                      <li className="projects_model-service" key={taskIndex}>
                        <i className="uil uil-check-circle projects_model-icon"></i>
                        <p className="projects_model-info">{task}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
