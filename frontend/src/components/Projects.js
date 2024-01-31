// components/Projects.js
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id turpis at ipsum tempor vestibulum.'
    },
    {
      title: 'Project 2',
      description: 'Praesent in felis nec tellus feugiat faucibus. In hac habitasse platea dictumst. Mauris commodo sapien et ultricies posuere.'
    },
    {
      title: 'Project 3',
      description: 'Vivamus pharetra, enim ut facilisis efficitur, quam velit commodo leo, sit amet bibendum sapien ligula in neque.'
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
