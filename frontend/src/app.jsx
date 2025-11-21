import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import AdminLabels from "./pages/AdminDashboard/AdminLabels";
import AdminChemicals from "./pages/AdminDashboard/AdminChemicals";
import AdminPacking from "./pages/AdminDashboard/AdminPacking";

import StoreLabels from "./pages/StoreDashboard/StoreLabels";
import StoreChemicals from "./pages/StoreDashboard/StoreChemicals";
import StorePacking from "./pages/StoreDashboard/StorePacking";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />

        <div className="page" style={{ padding: "20px", width: "100%" }}>
          <Routes>
            {/* Admin */}
            <Route path="/admin/labels" element={<AdminLabels />} />
            <Route path="/admin/chemicals" element={<AdminChemicals />} />
            <Route path="/admin/packing" element={<AdminPacking />} />

            {/* Store Manager */}
            <Route path="/store/labels" element={<StoreLabels />} />
            <Route path="/store/chemicals" element={<StoreChemicals />} />
            <Route path="/store/packing" element={<StorePacking />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
