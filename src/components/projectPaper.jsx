function ProjectPaper({ project, onClick }) {
  return (
    <button
      className="project-paper"
      onClick={() => onClick(project)}
    >
      <div className="paper-roll paper-roll-top"></div>

      <div className="paper-body">
        <span className="paper-type">
          {project.type}
        </span>

        <h3>{project.title}</h3>

        <span className="paper-open">
          Open →
        </span>
      </div>

      <div className="paper-roll paper-roll-bottom"></div>
    </button>
  );
}

export default ProjectPaper;