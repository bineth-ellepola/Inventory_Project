import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "admin") {
      navigate("/admin/labels");
    } else if (role === "store") {
      navigate("/store/labels");
    } else {
      alert("Please select a role");
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form
        onSubmit={handleLogin}
        style={{
          padding: "30px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          minWidth: "300px"
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="store">Store Manager</option>
        </select>

        <button type="submit" style={{ width: "100%" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
