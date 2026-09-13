import "../App.css";
import { useEffect, useMemo, useState, useRef } from "react";
import axios from "axios";
export default function Projects() {
  const imageInputRef = useRef(null);
  const addImageInputRef = useRef(null);
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [projects, setProjects] = useState([]);
  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
    image: "",
    githubUrl: "",
    liveUrl: "",
    technologies: "",
  });
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/projects`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        setProjects(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const AllProjects = useMemo(() => {
    return projects.map((project) => {
      return (
        <div className="col" key={project.id}>
          <div className="project-card overflow-hidden rounded position-relative">
            <img
              src={project.image}
              alt="Weather App"
              className=" img-fluid d-block object-fit-cover  w-100"
            />
            <div className="project-overlay position-absolute d-flex flex-column justify-content-center align-items-center text-light">
              <h5>{project.title}</h5>
              <a
                href={project.liveUrl}
                target="_blank"
                className="btn btn-success"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                className="btn btn-dark"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center shadow border-bottom pb-2 rounded mt-3">
            <button
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
              onClick={() => handleOpenDelete(project.id)}
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
              onClick={() => handleOpenEdit(project)}
            >
              Edit
            </button>
          </div>
        </div>
      );
    });
  }, [projects]);
  const handleInputValue = (e) => {
    if (e.target.type === "file") {
      setInputValue({
        ...inputValue,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setInputValue({
        ...inputValue,
        [e.target.name]: e.target.value,
      });
    }
  };
  // add project
  const handleOpenAdd = () => {
    setInputValue({
      title: "",
      description: "",
      image: null,
      githubUrl: "",
      liveUrl: "",
      technologies: "",
    });
    if (addImageInputRef.current) {
      addImageInputRef.current.value = "";
    }
  };
  const handleAddProject = () => {
    const formData = new FormData();

    formData.append("title", inputValue.title);
    formData.append("description", inputValue.description);
    formData.append("image", inputValue.image);
    formData.append("githubUrl", inputValue.githubUrl);
    formData.append("liveUrl", inputValue.liveUrl);
    formData.append("technologies", inputValue.technologies);

    axios
      .post(`${import.meta.env.VITE_API_URL}/api/projects`, formData, {
        withCredentials: true,
      })
      .then((response) => {
        const newProject = response.data;
        setProjects((prevProjects) => [...prevProjects, newProject]);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // edit project
  const handleOpenEdit = (project) => {
    console.log(project);

    setEditingProjectId(project.id);

    setInputValue({
      title: project.title,
      description: project.description,
      image: null,
      githubUrl: project.githubUrl,
      liveUrl: project.liveUrl,
      technologies: project.technologies,
    });
  };
  const handleEditProject = (id) => {
    const formData = new FormData();
    formData.append("title", inputValue.title);
    formData.append("description", inputValue.description);
    if (inputValue.image) {
      formData.append("image", inputValue.image);
    }
    formData.append("githubUrl", inputValue.githubUrl);
    formData.append("liveUrl", inputValue.liveUrl);
    formData.append("technologies", inputValue.technologies);

    axios
      .put(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, formData, {
        withCredentials: true,
      })
      .then((response) => {
        const updatedProject = response.data;
        setProjects((prevProjects) =>
          prevProjects.map((project) =>
            project.id === updatedProject.id ? updatedProject : project,
          ),
        );

        setInputValue({
          title: "",
          description: "",
          image: null,
          githubUrl: "",
          liveUrl: "",
          technologies: "",
        });
        if (imageInputRef.current) {
          imageInputRef.current.value = "";
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // delete project
  const handleOpenDelete = (projectId) => {
    console.log(projectId);
    setEditingProjectId(projectId);
  };
  const handleDeleteProject = (id) => {
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/projects/${id}`, {
        withCredentials: true,
      })
      .then(() => {
        setProjects((prevProjects) => {
          return prevProjects.filter((project) => {
            return project.id !== id;
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {/* add modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Project
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                name="title"
                value={inputValue.title}
                onChange={handleInputValue}
                className="form-control mb-2"
                type="text"
                placeholder="Enter the title"
              />
              <input
                name="description"
                value={inputValue.description}
                onChange={handleInputValue}
                className="form-control mb-2"
                type="text"
                id="projectImage"
                placeholder="Enter the description"
              />
              <input
                ref={addImageInputRef}
                name="image"
                onChange={handleInputValue}
                type="file"
                className="form-control mb-2"
                id="projectImage"
                accept="image/*"
              />
              <input
                name="githubUrl"
                value={inputValue.githubUrl}
                onChange={handleInputValue}
                className="form-control mb-2"
                type="text"
                placeholder="Enter the githubUrl"
              />
              <input
                name="liveUrl"
                value={inputValue.liveUrl}
                onChange={handleInputValue}
                className="form-control mb-2"
                type="text"
                placeholder="Enter the liveUrl"
              />
              <input
                name="technologies"
                value={inputValue.technologies}
                onChange={handleInputValue}
                className="form-control mb-2"
                type="text"
                placeholder="Enter the technologies"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleAddProject}
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                disabled={
                  !inputValue.title ||
                  !inputValue.description ||
                  !inputValue.image ||
                  !inputValue.githubUrl ||
                  !inputValue.liveUrl ||
                  !inputValue.technologies
                }
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* edit modal */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Project
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                name="title"
                value={inputValue.title}
                onChange={handleInputValue}
                className="form-control mb-2"
                type="text"
                placeholder="Enter the title"
              />
              <input
                name="description"
                value={inputValue.description}
                onChange={handleInputValue}
                className="form-control mb-2"
                type="text"
                placeholder="Enter the description"
              />
              <input
                ref={imageInputRef}
                name="image"
                onChange={handleInputValue}
                type="file"
                className="form-control mb-2"
                id="projectImage"
                accept="image/*"
              />
              <input
                name="githubUrl"
                value={inputValue.githubUrl}
                onChange={handleInputValue}
                className="form-control mb-2"
                type="text"
                placeholder="Enter the githubUrl"
              />
              <input
                name="liveUrl"
                value={inputValue.liveUrl}
                onChange={handleInputValue}
                className="form-control mb-2"
                type="text"
                placeholder="Enter the liveUrl"
              />
              <input
                name="technologies"
                value={inputValue.technologies}
                onChange={handleInputValue}
                className="form-control mb-2"
                type="text"
                placeholder="Enter the technologies"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                disabled={
                  !inputValue.title ||
                  !inputValue.description ||
                  !inputValue.githubUrl ||
                  !inputValue.liveUrl ||
                  !inputValue.technologies
                }
                onClick={() => handleEditProject(editingProjectId)}
              >
                Edit Project
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* delete modal */}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Delete Project
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h4>
                Are you sure about{" "}
                <span className="text-danger fw-bold">deleting</span> ?
              </h4>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => handleDeleteProject(editingProjectId)}
              >
                Delete Project
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <button
            onClick={handleOpenAdd}
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add Project
          </button>
        </div>
        <hr />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Project 1 */}
          {AllProjects}
        </div>
      </div>
    </>
  );
}
