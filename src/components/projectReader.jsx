function ProjectReader({ project, onClose }) {
  if (!project) {
    return null;
  }

  return (
    <div className="reader-backdrop">
      <div className="reader-paper">
        <button
          className="reader-close"
          onClick={onClose}
        >
          ×
        </button>

        <div className="reader-content">
          <p className="reader-type">
            {project.type}
          </p>

          <h2>{project.title}</h2>

          <p className="reader-description">
            {project.description}
          </p>

          <section>
            <h3>Why I built it</h3>
            <p>{project.whyBuilt}</p>
          </section>

          <section>
            <h3>How I built it</h3>
            <p>{project.howBuilt}</p>
          </section>

          <section>
            <h3>Tech stack</h3>

            <div className="stack-list">
              {project.stack.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3>Features</h3>

            <ul>
              {project.features.map((feature) => (
                <li key={feature}>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <div className="reader-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectReader;