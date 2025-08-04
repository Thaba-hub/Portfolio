
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("https://api.github.com/users/Thaba-hub/repos")
      .then(res => {
        setProjects(res.data.slice(0, 5));
      });
  }, []);

  return (
    <>
      <header>
        <h1>Thaba's Portfolio</h1>
        <p>Frontend Developer | React | HTML | CSS | JavaScript</p>
        <a href="my_cv.pdf" download>📄 Download CV</a>
      </header>
      <section className="projects">
        <h2>Latest GitHub Projects</h2>
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description || "No description provided."}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>📧 Email: tebogothaba.15@gmail.com</p>
        <p>📞 Phone: 081 586 5924</p>
      </section>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
