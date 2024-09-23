import React, { useEffect, useState } from "react";
import "./scrollup.css";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setVisible(scrollPosition > 100); // Adjust the threshold as needed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#top" className={`scroll-up ${visible ? "show" : ""}`}>
      <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  );
};

export default ScrollUp;
