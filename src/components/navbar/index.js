import React from "react";
import { StyledNav, NavContainer } from "./navbarStyle";
import logo from "../../images/nail-logo.svg";

function Navbar() {
  return (
    <NavContainer>
      <StyledNav>
        <img src={logo} alt="the nail boutique logo" />
      </StyledNav>
    </NavContainer>
  );
}

export default Navbar;
