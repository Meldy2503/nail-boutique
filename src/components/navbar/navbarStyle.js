// This is a desktop first styling approach

import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  height: 9rem;
  width: 100%;
  z-index: 1500;
  position: fixed;
  top: 0;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    height: 7rem;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    height: 6rem;
  }
`;

export const Padding = styled.div`
  height: 2.5rem;
  width: 100%;
  position: fixed;
  background: #000;
  top: 9rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    height: 2rem;
    top: 6rem;
  }
  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    height: 1.5rem;
    top: 6rem;
  }
`;

export const Logo = styled(Link)`
  img {
    max-width: 100%;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      width: 80%;
    }
  }
`;

export const StyledNav = styled.nav`
  max-width: 140rem;
  width: 90%;
  background-color: transparent;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2000;
  padding: 1.1rem 0 1.2rem 0;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    padding: 1rem 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }
  .ulSmallScreen {
    display: none;
    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      display: flex;
      flex-direction: column;
      background-color: ${({ theme }) => theme.colors.primary1};
      opacity: 0.96;

      position: absolute;
      top: 6rem;
      right: -10%;
      width: 80%;
      height: 100vh;
      z-index: 1000;
      overflow: scroll;
      padding-top: 2rem;
    }
  }
  .ulBigScreen {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      display: none;
    }
  }
  li {
    margin: 0.5rem 1.5rem;
    padding: 1rem 2rem;
    &:hover {
      background: rgba(255, 255, 255, 0.06);
      border-radius: 0.5rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      text-align: left;
      border-bottom: 1px solid #959595;
      display: block;
      margin: 1.5rem;
      overflow: scroll;
      padding: 0;
    }
  }
  .navLink {
    color: #959595;
    font-size: 1.6rem;
  }
  .active {
    color: ${({ theme }) => theme.colors.tertiary2};
  }
  .icon {
    color: #959595;
    margin-top: 1rem;
    font-size: 2.5rem;
    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      margin: 0;
      padding: 0;
    }
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    display: block;
    font-size: 3.5rem;
    margin-top: -5rem;
    color: ${({ theme }) => theme.colors.tertiary2};
    transform: translate(-1%, 50%);
    cursor: pointer;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 2.8rem;
    }
  }
`;
export const SideUl = styled.ul`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    display: block;
    background-color: transparent;

    & > li {
      margin-bottom: 3rem;
    }
  }
`;
