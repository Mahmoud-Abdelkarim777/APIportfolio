import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
export default function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios.post(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {},
      {
        withCredentials: true,
      }
    ).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error);
    })
  };
  return (
    <>
      <div className="col-2 bg-light border-end p-3">
        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/home/projects" className="nav-link">
              Projects
            </NavLink>
          </li>
          <li className="nav-item mt-3">
            <button  onClick={handleLogout} className="btn btn-outline-danger">Log Out</button>
          </li>
        </ul>
      </div>
    </>
  );
}
