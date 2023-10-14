import React from 'react';
import projImg3 from "../assets/img/project-img3.png";

const projectData = [
  {
    name: 'Project 1',
    image: projImg3
  },
  {
    name: 'Project 2',
    image: projImg3,
  },
  {
    name: 'Project 3',
    image: projImg3,
  },
];

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Projects</h2>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, commodi? Voluptatibus qui, animi quaerat amet rerum minus eveniet dignissimos similique voluptate odio nesciunt tempora, ipsa officiis magni magnam iure facere?
            </p>
          </div>
        </div>
        <div className="row">
          {projectData.map((project, index) => (
            <div key={index} className="col-4">
              <div className="card">
                <div className="card-img-container">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={`Project ${index + 1}`}
                  />
                  <div className="card-title-overlay">
                    <h5 className="card-title">{project.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
