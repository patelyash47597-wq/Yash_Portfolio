import { projectsData, miniProjectsData } from '../data/portfolioData';
import '../styles/Projects.css';

function Projects() {
  const renderProjectCard = (project) => (
    <div key={project.id} className="project-card">

      {/* THUMBNAIL - title ke upar */}
      <div className="project-thumbnail">
        {project.image && project.image.startsWith('/') ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-thumbnail-img"
          />
        ) : (
          <div className="project-thumbnail-emoji">{project.image}</div>
        )}
      </div>

      {/* Duration badge */}
      <div className="project-header">
        <div className="project-duration">{project.duration}</div>
      </div>
      <h2 className="project-title">{project.title}</h2>
      <p className="project-role">📋 {project.role}</p>
      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        <h4>Technologies:</h4>
        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="project-links">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn repo-btn"
        >
          🔗 View Repository
        </a>
      </div>
    </div>
  );

  return (
    <section className="projects">
      <div className="projects-container">
        <h1>My Projects</h1>
        <p className="projects-subtitle">Here are some of my recent works and projects</p>

        <div className="projects-section">
          <h2 className="section-heading">📌 Main Projects</h2>
          <div className="projects-grid">
            {projectsData.map((project) => renderProjectCard(project))}
          </div>
        </div>

        <div className="mini-projects-section">
          <h2 className="section-heading">🎯 Mini Projects</h2>
          <div className="projects-grid">
            {miniProjectsData.map((project) => renderProjectCard(project))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;