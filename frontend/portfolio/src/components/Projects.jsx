import { useEffect } from "react";
import axios from "axios"
export default function Projects() {
  useEffect(() => {
    axios.get("https://ap-iportfolio.vercel.app/api/projects", {
      
    })
    .then((response) => {
      console.log(response.data);
      
    })
    .catch()
  },[])
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        <div className="card h-full ">
          <div className="bg-[#17364e] h-full flex flex-col max-w-sm p-3 border rounded shadow">
              <img
                className="w-full h-48 object-cover rounded"
                src="https://images.openai.com/static-rsc-4/N9Qek0OlYbBY9tRPvKrHlnqMXjjCRMGbv7AbAgcVSVj6eyL5Yxfxb6TTod-iZDliAOnqtL6jDQtgpBDJwRtwWtoBQOLfg5ifTw8u_SWZLbd7o-129d6ZHXNVXn0ST-bvrCcjhl3GqkruixzSOk9FMYHtAUUnoFzJNDOdABCWlvqeU90e_2gFVuvyEvyLl01w?purpose=fullsize"
                alt="project-image"
              />
              <h5 className="title mt-6 mb-2 text-xl font-semibold tracking-tight text-white">
                Streamlining your design process today.
              </h5>
            <p className="description mb-6 text-body text-white">
              In today’s fast-paced digital landscape, fostering seamless
              collaboration among Developers and IT Operations. 
            </p>
            <div className="flex gap-3 mt-auto">
              <a className="cursor-pointer flex-1 bg-gradient-to-r from-[#0a2133] to-[#0f1a36] text-white text-base p-2 rounded">
                <i className="fa-regular fa-eye mr-2"></i>
                Visit Site
              </a>
              <a className="cursor-pointer flex-1 bg-gradient-to-r from-[#0a2133] to-[#0f1a36] text-white text-base p-2 rounded">
                <i className="fa-brands fa-github mr-2"></i>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
