import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/navbars/admin-navbar";

export default function AdminLayout() {
  return (
    <div className="Admin">
      <Navbar />
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}
