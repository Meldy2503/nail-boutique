import React from "react";
import { LeftContent } from "../../reuseableComponents/containerStyle";
import { SidebarLink, StyledUl } from "./sidebarStyle";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <LeftContent>
      <StyledUl>
        <li>
          <NavLink
            end
            className={({ isActive }) => `navLink ${isActive ? " active" : ""}`}
            to="/"
          >
            Update profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `navLink ${isActive ? " active" : ""}`}
            to="/my-appointments"
          >
            My Appointments
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `navLink ${isActive ? " active" : ""}`}
            to="/notifications"
          >
            Notifications
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `navLink ${isActive ? " active" : ""}`}
            to="/logout"
          >
            Logout
          </NavLink>
        </li>
      </StyledUl>
    </LeftContent>
  );
}

export default Sidebar;
