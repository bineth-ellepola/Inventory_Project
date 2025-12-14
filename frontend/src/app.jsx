import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import AdminLayout from "./layouts/AdminLayout";
import StoreLayout from "./layouts/StoreLayout";

import AdminLabels from "./pages/AdminDashboard/AdminLabels";
import AdminChemicals from "./pages/AdminDashboard/AdminChemicals";
import AdminPackingMaterials from "./pages/AdminDashboard/AdminPacking";

import StoreLabels from "./pages/StoreDashboard/StoreLabels";
import StoreChemicals from "./pages/StoreDashboard/StoreChemicals";
import StorePackingMaterials from "./pages/StoreDashboard/StorePacking";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="labels" element={<AdminLabels />} />
          <Route path="chemicals" element={<AdminChemicals />} />
          <Route path="packing" element={<AdminPackingMaterials />} />
        </Route>

        {/* STORE MANAGER */}
        <Route path="/store" element={<StoreLayout />}>
          <Route path="labels" element={<StoreLabels />} />
          <Route path="chemicals" element={<StoreChemicals />} />
          <Route path="packing" element={<StorePackingMaterials />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
