import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{
      width: "220px",
      background: "#333",
      color: "white",
      height: "100vh",
      padding: "20px"
    }}>
      <h2>Menu</h2>

      <h3>Admin</h3>
      <Link to="/admin/labels">Labels</Link><br />
      <Link to="/admin/chemicals">Chemicals</Link><br />
      <Link to="/admin/packing">Packing</Link><br />

      <h3>Store</h3>
      <Link to="/store/labels">Labels</Link><br />
      <Link to="/store/chemicals">Chemicals</Link><br />
      <Link to="/store/packing">Packing</Link><br />
    </div>
  );
};

export default Sidebar;
