import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bookshelf from "./components/BookShelf";
import ProjectReader from "./components/projectReader";

import projects from "./data/projects";

import "./App.css";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <Bookshelf
          projects={projects}
          onProjectClick={openProject}
        />
      </main>

      <ProjectReader
        project={selectedProject}
        onClose={closeProject}
      />
    </div>
  );
}

export default App;