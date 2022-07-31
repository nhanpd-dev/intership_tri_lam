import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../modules/auth/login/login.screen";
import RegisterScreen from "../modules/auth/register/register.screen";

import DashboardScreen from "../modules/dashboard/dashboard.screen";
import NotFoundScreen from "../modules/notFound/notFound.screen";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
