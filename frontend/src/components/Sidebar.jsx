// Sidebar.jsx
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">

    <div className="h-screen w-64 bg-gray-900 text-white fixed top-0 left-0 p-5">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <ul className="space-y-4">
        <li>
          <Link to="/labels" className="hover:text-yellow-400">Labels</Link>
        </li>
        <li>
          <Link to="/packing" className="hover:text-yellow-400">Packing Material</Link>
        </li>
        <li>
          <Link to="/chemicals" className="hover:text-yellow-400">Chemicals</Link>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
