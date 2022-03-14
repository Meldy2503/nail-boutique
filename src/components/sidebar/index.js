import React from "react";
import { LeftContent } from "../../reuseableComponents/containerStyle";
import { StyledUl } from "./sidebarStyle";
import { NavLink } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { FaPeopleArrows } from "react-icons/fa";

function Sidebar() {
  const checkActiveRoute = (url) => {
    let path = window.location.pathname;
    if (path.includes(url)) {
      return "active";
    }
  };

  // this should give you "/booking/whatever"
  return (
    <LeftContent>
      <StyledUl>
        <li>
          <NavLink
            className={({ isActive }) => `navLink ${isActive ? " active" : ""}`}
            to="/update-profile"
          >
            <BsPersonCircle className="icon" />
            <span>Update profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            className={({ isActive }) =>
              `navLink ${checkActiveRoute("/booking")}`
            }
            to="/booking"
          >
            <FaPeopleArrows className="icon" />
            <span>My Appointments</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `navLink ${isActive ? " active" : ""}`}
            to="/notifications"
          >
            <IoIosNotificationsOutline className="icon" size={30} />
            <span>Notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => `navLink ${isActive ? " active" : ""}`}
            to="/logout"
          >
            <IoLogOutOutline className="icon" size={28} />
            <span>Logout</span>
          </NavLink>
        </li>
      </StyledUl>
    </LeftContent>
  );
}

export default Sidebar;
