import { Routes, Route } from "react-router-dom";

import AppNavbar from "./components/navbar";
import Footer from "./components/Footer";

import Home from "./pages/home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import AddTask from "./pages/AddTask";

import PrivateRoute from "./components/PrivateRoute";
import "./styles/home.css"; 
function App() {
  return (
    <>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
         <Route path="/dashboard" element={<Dashboard />} />
              
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/add-task"
          element={
            <PrivateRoute>
              <AddTask />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
