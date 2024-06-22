import React, { useState } from "react";
import logo1 from "../assets/logo.png";
import menuIcon from "../assets/menu.png";
import closeIcon from "../assets/close.png";

export default function Header() {
  const [sidebarActive, setSidebarActive] = useState(false);

  function toggleSidebar() {
    setSidebarActive(!sidebarActive);
  }

  return (
    <div className="header-container">
      <img src={logo1} alt="logo" />
      <div className="menu-icon">
        <button className="menu-btn" onClick={toggleSidebar}>
          <img src={menuIcon} alt="menu icon" />
        </button>
      </div>
      <div className={`navbar-container ${sidebarActive ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Info</a>
          </li>
          <li>
            <a href="#">Sorteo</a>
          </li>
          <li>
            <a href="#">Comprar</a>
          </li>
        </ul>
        <button className="closebtn" onClick={toggleSidebar}>
          <img className="closeIcon" src={closeIcon} alt="close icon" />
        </button>
      </div>
    </div>
  );
}
