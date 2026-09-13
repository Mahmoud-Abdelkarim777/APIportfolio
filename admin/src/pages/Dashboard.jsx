import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "../App.css";
export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/projects`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);

        setProjects(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const AllProjects = useMemo(() => {
    return projects.map((project) => {
      return (
        <tr key={project.id}>
          <td>
            <img
              src={project.image}
              className="icone rounded shadow"
              alt={project.title}
            />
          </td>
          <td>{project.title}</td>
          <td>{project.technologies}</td>
        </tr>
      );
    });
  }, [projects]);
  const reactProjects = projects.filter((project) => {
    return project.technologies.toLowerCase().includes("react");
  });
  const javascriptProjects = projects.filter((project) => {
    return project.technologies.toLowerCase().includes("javascript");
  });
  return (
    <>
      {/* Statistics */}
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Total Projects</h5>
            <h2>{projects.length}</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5>React Projects</h5>
            <h2>{reactProjects.length}</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Pure JavaScript Projects</h5>
            <h2>{javascriptProjects.length}</h2>
          </div>
        </div>
      </div>
      {/* Projects Table */}
      <div className="mt-5">
        <h3>Recent Projects</h3>
        <table className="table table-bordered table-striped mt-3">
          <thead className="table-dark">
            <tr>
              <th>Image</th>
              <th>Project</th>
              <th>Technologies</th>
            </tr>
          </thead>
          <tbody>{AllProjects}</tbody>
        </table>
      </div>
    </>
  );
}
