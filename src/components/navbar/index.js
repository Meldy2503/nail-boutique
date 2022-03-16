import React from "react";
import {
  NavContainer,
  Logo,
  StyledNav,
  SideUl,
  MenuIcon,
  Padding,
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
      <Padding />
      <StyledNav>
        <Logo to="/booking">
          <img src={logo} alt="nail-boutique-logo" />
        </Logo>

        <ul className={onIconClick ? "ulSmallScreen" : "ulBigScreen"}>
          <li>
            <NavLink
              end
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
              <IoIosNotificationsOutline className="icon" />
            </NavLink>
          </li>

          <SideUl>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `navLink ${isActive ? "active" : "navlink"}`
                }
                onClick={closeMenuLink}
                to="/update-profile"
              >
                {/* <BsPersonCircle className="icon" /> */}
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
                to="/booking"
              >
                {/* <FaPeopleArrows className="icon" /> */}
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
                {/* <IoLogOutOutline className="icon" size={28} /> */}
                Logout
              </NavLink>
            </li>
          </SideUl>
        </ul>
        <MenuIcon onClick={handleClick}>
          <Hamburger
            // className="hamburger"
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
