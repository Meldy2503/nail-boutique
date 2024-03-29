import React from "react";
import { LeftContent } from "../../reuseableComponents/containerStyle";
import { StyledUl } from "./sidebarStyle";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const checkActiveRoute = (url) => {
    let path = window.location.pathname;
    if (path.includes(url)) {
      return "active";
    }
  };
  return (
    <LeftContent>
      <StyledUl data-aos="fade-up">
        <li>
          <NavLink
            className={({ isActive }) => `navLink ${isActive ? " active" : ""}`}
            to="/update-profile"
          >
            Update profile
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            className={({ isActive }) =>
              `navLink ${checkActiveRoute("/my-appointments")}`
            }
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
      </StyledUl>
    </LeftContent>
  );
}

export default Sidebar;
