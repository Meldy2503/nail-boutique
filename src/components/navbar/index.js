import React from "react";
import {
  NavContainer,
  Logo,
  StyledNav,
  SideUl,
  MenuIcon,
  NavBarBorderBottom,
} from "./navbarStyle";
import { NavLink } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import logo from "../../images/nail-logo.svg";
import { IoIosNotificationsOutline } from "react-icons/io";

function Navbar() {
  const [onIconClick, setOnIconClick] = React.useState(false);
  const handleClick = () => setOnIconClick(!onIconClick);
  const closeMenuLink = () => setOnIconClick(false);

  return (
    <NavContainer>
      <NavBarBorderBottom />
      <StyledNav>
        <Logo to="/my-appointments">
          <img src={logo} alt="nail-boutique-logo" />
        </Logo>

        <ul className={onIconClick ? "ulSmallScreen" : "ulBigScreen"}>
          <li>
            <NavLink
              className={(navLink) => (navLink.isActive ? "active" : "navLink")}
              onClick={closeMenuLink}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenuLink}
              className={(navLink) => (navLink.isActive ? "active" : "navLink")}
              to="/overview"
            >
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenuLink}
              className={(navLink) => (navLink.isActive ? "active" : "navLink")}
              to="/help"
            >
              Help
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navLink) => (navLink.isActive ? "active" : "navLink")}
              onClick={closeMenuLink}
              to="/notifications"
            >
              <span className="notification">Notification</span>
              <IoIosNotificationsOutline className="icon" />
            </NavLink>
          </li>

          {/* merged the navbar and side bar for tablet and mobile views */}
          <SideUl>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `navLink ${isActive ? "active" : "navlink"}`
                }
                onClick={closeMenuLink}
                to="/update-profile"
              >
                Update profile
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                className={({ isActive }) =>
                  `navLink ${isActive ? "active" : "navlink"}`
                }
                onClick={closeMenuLink}
                to="my-appointments"
              >
                My Appointments
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  `navLink ${isActive ? "active" : "navlink"}`
                }
                onClick={closeMenuLink}
                to="/logout"
              >
                Logout
              </NavLink>
            </li>
          </SideUl>
        </ul>
        <MenuIcon onClick={handleClick}>
          <Hamburger
            onClick={handleClick}
            toggled={onIconClick}
            toggle={setOnIconClick}
            size={25}
          />
        </MenuIcon>
      </StyledNav>
    </NavContainer>
  );
}

export default Navbar;
