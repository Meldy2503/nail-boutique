import React from "react";
import { NavContainer, Logo, StyledNav, SideUl, MenuIcon } from "./navbarStyle";
import { NavLink } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import logo from "../../images/nail-logo.svg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { ClickAwayListener } from "@material-ui/core";

function Navbar() {
  const [onIconClick, setOnIconClick] = React.useState(false);
  const handleClick = () => setOnIconClick(!onIconClick);
  const closeMenuLink = () => setOnIconClick(false);
  const handleClickAway = () => setOnIconClick(false);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <NavContainer data-aos="zoom-in">
        <StyledNav>
          <Logo to="/">
            <img src={logo} alt="nail-boutique-logo" />
          </Logo>

          <ul className={onIconClick ? "ulSmallScreen" : "ulBigScreen"}>
            <li>
              <NavLink
                className={(navLink) =>
                  navLink.isActive ? "active" : "navLink"
                }
                onClick={closeMenuLink}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenuLink}
                className={(navLink) =>
                  navLink.isActive ? "active" : "navLink"
                }
                to="/about-us"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenuLink}
                className={(navLink) =>
                  navLink.isActive ? "active" : "navLink"
                }
                to="/contact-us"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={(navLink) =>
                  navLink.isActive ? "active" : "navLink"
                }
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
                  to="/my-appointments"
                >
                  My Appointments
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
    </ClickAwayListener>
  );
}

export default Navbar;
