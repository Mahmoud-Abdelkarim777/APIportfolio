import "../App.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="container-fluid">
      {/* Header */}
      <Header />
      <div className="row min-vh-100">
        {/* Sidebar */}
        <Sidebar />
        {/* Content */}
        <div className="col-10 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
