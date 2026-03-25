import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PropertyDetails from "./pages/PropertyDetails";
import Dashboard from "./pages/Dashboard";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/admin" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default App;
