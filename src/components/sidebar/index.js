import React from "react";
import { LeftContent } from "../../reuseableComponents/containerStyle";
import { StyledUl } from "./sidebarStyle";
import { NavLink } from "react-router-dom";
// import { IoIosNotificationsOutline } from "react-icons/io";
// import { IoLogOutOutline } from "react-icons/io5";
// import { BsPersonCircle } from "react-icons/bs";
// import { FaPeopleArrows } from "react-icons/fa";

function Sidebar() {
  return (
    <LeftContent>
      <StyledUl>
        <li>
          <NavLink
            className={({ isActive }) => `navLink ${isActive ? " active" : ""}`}
            to="/update-profile"
          >
            {/* <BsPersonCircle className="icon" /> */}
            Update profile
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            className={({ isActive }) => `navLink ${isActive ? " active" : ""}`}
            to="/booking"
          >
            {/* <FaPeopleArrows className="icon" /> */}
            My Appointments
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `navLink ${isActive ? " active" : ""}`}
            to="/notifications"
          >
            {/* <IoIosNotificationsOutline className="icon" size={30} /> */}
            Notifications
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `navLink ${isActive ? " active" : ""}`}
            to="/logout"
          >
            {/* <IoLogOutOutline className="icon" size={28} /> */}
            Logout
          </NavLink>
        </li>
      </StyledUl>
    </LeftContent>
  );
}

export default Sidebar;
