import "./Sidebar.css";
import thadam from "../../assets/thadamLogo.svg";

const Sidebar = ({ open, handleLogout }) => {
  return (
    <div className={`sidebar ${open ? "active" : ""}`}>
      <img className="logo" src={thadam} alt="logo" />

      <nav className="menu">
        <p>Dashboard</p>
      </nav>

      <div className="logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;