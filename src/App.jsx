import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./pages/ProtectedRoute";

export default function () {
  return (
    <Router>
      <div>
        <Routes>
          <Route element={<ProtectedRoute/>}>
            <Route path="/home" element={<Home />} index />
            <Route path="/" element={<Home />} index />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}
