import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/navbars/kantin-navbar";

export default function KantinLayout() {
  return (
    <div className="Kantin">
      <header className="header kantin">
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
}
