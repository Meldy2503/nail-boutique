import React from "react";
import {
  NavContainer,
  Logo,
  StyledNav,
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
              className={(navLink) => (navLink.isActive ? "active" : "")}
              onClick={closeMenuLink}
              to="/notifications"
            >
              <IoIosNotificationsOutline className="icon" />
            </NavLink>
          </li>
        </ul>
        <MenuIcon onClick={handleClick}>
          <Hamburger
            onClick={handleClick}
            toggled={onIconClick}
            toggle={setOnIconClick}
            size={28}
          />
        </MenuIcon>
      </StyledNav>
    </NavContainer>
  );
}

export default Navbar;
