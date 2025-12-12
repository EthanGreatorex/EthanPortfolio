import "../css/project.css";
import React from "react";
import { PropTypes } from "prop-types";

function Projects({ title, image, description, link, technologies, date }) {
  return (
    <div className="project">
      <div className="project__image-wrapper">
        <img
          className="project__image expand-on-hover"
          src={image}
          alt={`${title} project screenshot`}
        />
      </div>
      <div className="project-description">
        <h2 className="project-description__title">{title}</h2>
        <p className="project-description__overview">{description}</p>
        <div className="project__technologies">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return <Icon key={index} className="project__technology-icon" />;
          })}
        </div>
        <p className="project-description__date">{date}</p>
        <a href={link} target="_blank" className="project__link" rel="noreferrer">
          View Project →
        </a>
      </div>
    </div>
  );
}

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired
    })
  ).isRequired,
  date: PropTypes.string.isRequired
};

export default Projects;
