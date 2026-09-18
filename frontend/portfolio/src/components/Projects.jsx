import { useEffect, useState } from "react";
import axios from "axios";
export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("https://ap-iportfolio.vercel.app/api/projects")
      .then((response) => {
        const AllData = response.data;
        setProjects(AllData);
      })
      .catch((error) => {
        console.error("Erore is" , error)
      });
  }, []);
  const AllProjects = projects.map((project) => {
    return (
      <div className="card h-full " key={project.id}>
        <div className="bg-[#17364e] h-full flex flex-col max-w-sm p-3 border rounded shadow">
          <img
            className="w-full h-48 object-cover rounded"
            src={project.image}
            alt="project-image"
          />
          <h5 className="title mt-6 mb-2 text-lg font-semibold tracking-tight text-white">
            {project.title}
          </h5>
          <p className="description mb-6 text-body text-white">
            {project.description}
          </p>
          <div className="flex gap-3 mt-auto">
            <a href={project.liveUrl} target="_blank" className="cursor-pointer flex-1 bg-gradient-to-r from-[#0a2133] to-[#0f1a36] text-white text-base p-2 rounded">
              <i className="fa-regular fa-eye mr-2"></i>
              Visit Site
            </a>
            <a href={project.githubUrl} target="_blank" className="cursor-pointer flex-1 bg-gradient-to-r from-[#0a2133] to-[#0f1a36] text-white text-base p-2 rounded">
              <i className="fa-brands fa-github mr-2"></i>
              Source Code
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {AllProjects}
      </div>
    </>
  );
}
