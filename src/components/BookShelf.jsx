import ProjectPaper from "./ProjectPaper";

function Bookshelf({ projects, onProjectClick }) {
  return (
    <section className="projects-section">
      <div className="section-heading">
        <p>My work</p>
        <h2>Check out my projects</h2>
      </div>

      <div className="bookshelf">
        {projects.map((project) => (
          <div
            className="shelf-section"
            key={project.id}
          >
            <div className="shelf-paper-area">
              <ProjectPaper
                project={project}
                onClick={onProjectClick}
              />
            </div>

            <div className="shelf-label">
              {project.title}
            </div>

            <div className="shelf-wood"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Bookshelf;