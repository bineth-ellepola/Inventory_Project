import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Labels from "./pages/Labels";
import Chemicals from "./pages/Chemicals";
import PackingMaterial from "./pages/PackingMaterial";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      
      <Sidebar />

      <Routes>
        <Route path="/labels" element={<Labels />} />
        <Route path="/chemicals" element={<Chemicals />} />
        <Route path="/packing" element={<PackingMaterial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
