import thadam from "../../assets/thadamLogo.svg";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = ({ handleLogout, open }) => {
  return (
    <div
      className={`bg-white border-end p-3 position-fixed position-md-static d-flex flex-column sidebar-style ${
        open ? "sidebar-open" : ""
      }`}
    >
      <div className="text-center mb-4">
        <img
          src={thadam}
          alt="logo"
          className="img-fluid"
          style={{ maxWidth: "180px" }}
        />
      </div>

      <nav className="nav flex-column flex-grow-1 mt-3">
        <NavLink
          to="/"
          className="nav-link bg-primary-subtle text-primary rounded mb-2"
        >
          Dashboard
        </NavLink>
      </nav>

      <div className="mt-auto pt-3 border-top">
        <button className="btn btn-outline-danger w-100" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
