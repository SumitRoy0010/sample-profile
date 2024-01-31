// components/About.js
import React from "react";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="image-container">
        <img src="Sr.jpg" alt="My Image" className="image" />
      </div>
      <p>
        I am a passionate web developer with experience in React.js, HTML, CSS,
        and JavaScript. I love building interactive and responsive web
        applications.
      </p>
      <p>
        In my free time, I enjoy learning new technologies, contributing to
        open-source projects, and working on personal projects.
      </p>
    </section>
  );
};

export default About;
