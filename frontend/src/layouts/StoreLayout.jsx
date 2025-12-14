import { NavLink, Outlet, useNavigate } from "react-router-dom";

const StoreLayout = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          background: "#334155",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h3>Store Manager</h3>

        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <NavLink to="labels" style={{ color: "#fff" }}>Labels</NavLink>
          <NavLink to="chemicals" style={{ color: "#fff" }}>Chemicals</NavLink>
          <NavLink to="packing" style={{ color: "#fff" }}>Packing Materials</NavLink>
        </nav>

        <button
          style={{ marginTop: "20px" }}
          onClick={() => navigate("/")}
        >
          Logout
        </button>
      </aside>

      {/* Page Content */}
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default StoreLayout;
