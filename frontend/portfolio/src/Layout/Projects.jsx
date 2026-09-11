import { Outlet, NavLink } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <div className="content mt-4">
        <div className="flex flex-wrap items-center justify-center ">
          <NavLink
            to="css"
            className={({ isActive }) =>
              `lg:hover:-translate-y-2 transition-all 
                duration-500 bg-redDark hover:bg-black text-white 
                font-bold py-2 px-4 rounded mt-4 ms-1 sm:mt-10
                ${
                  isActive
                    ? " bg-black border-redDark border-b-4"
                    : ""
                }
                `
            }
            id="css"
          >
            CSS
          </NavLink>
          <NavLink
            to="bootstrap"
            className={({isActive})=> ` lg:hover:-translate-y-2 transition-all 
                duration-500 bg-redDark hover:bg-black text-white 
                font-bold py-2 px-4 rounded mt-4 ms-1 sm:mt-10 ${isActive ? "bg-black border-b-4 border-redDark" : ""} 
            `}
            id="bootstrap"
          >
            Bootstrap
          </NavLink>
          <NavLink
            to="tailwind"
            className={ ({isActive})=>`lg:hover:-translate-y-2 transition-all duration-500 
                bg-redDark hover:bg-black text-white 
                font-bold py-2 px-4 rounded mt-4 ms-1 sm:mt-10 ${isActive ? "bg-black border-b-4 border-redDark" : ""}
                `}
            id="tailwind"
          >
            Tailwind css
          </NavLink>
          <NavLink
            to="javascript"
            className={ ({isActive})=>`lg:hover:-translate-y-2 transition-all duration-500 
                bg-redDark hover:bg-black text-white 
                font-bold py-2 px-4 rounded mt-4 ms-1 sm:mt-10 ${isActive ? "bg-black border-b-4 border-redDark" : ""}
                `}
            id="javascript"
          >
            Javascript
          </NavLink>
          <NavLink
            to="react"
            className={ ({isActive})=>`lg:hover:-translate-y-2 transition-all 
                duration-500 bg-redDark hover:bg-black text-white 
                font-bold py-2 px-4 rounded mt-4 ms-1 sm:mt-10 ${isActive ? "bg-black border-b-4 border-redDark" : ""}
                `}
            id="react"
          >
            React.js
          </NavLink>
        </div>
      </div>
      <div>{Outlet}</div>
    </>
  );
}
