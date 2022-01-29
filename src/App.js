import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact element={<ProtectedRoutes />}>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route exact path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
