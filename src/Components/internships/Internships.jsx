import React, { useState } from 'react';
import "./internships.css";

const Internships = () => {
    const [activeModal, setActiveModal] = useState(null);

    const internshipsData = [
        {
            title: <>Artificial Intelligence & Machine Learning <br /> Internship</>,
            modalTitle: <>Artificial Intelligence & Machine Learning Internship</>,
            icon: "uil-robot",
            year: "May-June 2024",
            description:
              "Completed a 30-day virtual internship focusing on AI/ML concepts and Python programming. Developed hands-on projects including a Tic Tac Toe game using the Minimax algorithm and a chatbot.",
            tasks: [
              "Solved the Chicken Crossing problem",
              "Created machine learning models like decision trees and random forests",
              "Applied Python programming skills in AI/ML projects",
            ],
          },
          {
            title: <>Machine Learning <br /> Internship</>,
            modalTitle: <>Machine Learning Internship</>,
            icon: "uil-brain",
            year: "June-July 2023",
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
            title: <>Android App Development <br /> Internship</>,
            modalTitle: <>Android App Development Internship</>,
            icon: "uil-mobile-android",
            year: "Aug-Sept 2021",
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
        <section className="internships section" id="internships">
            <h2 className="section_title">Internships</h2>
            <span className="section_subtitle">What I have completed?</span>

            <div className="internships_container container grid">
                {internshipsData.map((internship, index) => (
                    <div className="internships_content" key={index} onClick={() => toggleModal(index)}>
                        <div>
                            <i className={`uil ${internship.icon} internships_icon`}></i>
                            <h3 className="internships_title">{internship.title}</h3>
                            <h4 className="internships_subtitle">{internship.year}</h4>
                        </div>
                        <span className="internships_button">
                            View More
                            <i className="uil uil-arrow-right internships_button-icon"></i>
                        </span>

                        {/* Modal */}
                        {activeModal === index && (
                            <div className="internships_model">
                                <div className="internships_modal-content">
                                    <i className="uil uil-times internships_model-close" onClick={() => toggleModal(null)}></i>
                                    <h3 className="internships_model-title">{internship.modalTitle}</h3>
                                    <p className="internships_model-description">
                                        {internship.description}
                                    </p>
                                    <ul className="internships_model-internships grid">
                                        {internship.tasks.map((task, taskIndex) => (
                                            <li className="internships_model-service" key={taskIndex}>
                                                <i className="uil uil-check-circle internships_model-icon"></i>
                                                <p className="internships_model-info">{task}</p>
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

export default Internships;
