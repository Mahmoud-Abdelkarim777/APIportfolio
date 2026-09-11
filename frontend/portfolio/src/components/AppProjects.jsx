import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Projects from "../Layout/Projects";
import Css from "../Layout/Css";
import Bootstrap from "./../Layout/Bootstrap";
import Tailwind from "./../Layout/Tailwind";
import Javascript from "./../Layout/Javascript";
import ReactPage from "./../Layout/ReactPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route path="css" element={<Css />} />
      <Route path="bootstrap" element={<Bootstrap />} />
      <Route path="tailwind" element={<Tailwind />} />
      <Route path="javascript" element={<Javascript />} />
      <Route path="react" element={<ReactPage />} />
      <Route path="*" element={<h1>No Item here</h1>} />
    </Route>
  )
);
function Rootlayout() {
  return (
    <>
      <Projects />
      <Outlet />
    </>
  );
}
export default function AppProjects() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
