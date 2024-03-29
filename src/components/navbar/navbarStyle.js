// This is a desktop first styling approach

import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  height: 7rem;
  width: 100%;
  z-index: 3000;
  position: fixed;
  top: 0;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    height: 6rem;
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
  z-index: 2500;

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
      opacity: 0.9;
      position: absolute;
      top: 6rem;
      right: -10%;
      width: 35rem;
      height: 100vh;
      z-index: 3000;
      overflow: scroll;
      padding-top: 2rem;

      animation: slideIn 1s ease-in;

      @keyframes slideIn {
        0% {
          transform: translateX(500px);
          opacity: 0;
        }

        65% {
          transform: translateX(1px);
          opacity: 1;
        }
        70% {
          transform: translateX(-1px);
        }
        75% {
          transform: translateX(1px);
        }
        90% {
          transform: translateX(0);
        }
        100% {
          transform: translate(0);
        }
      }

      @media screen and (max-width: 500px) {
        width: 80%;
      }
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
      display: none;
    }
  }

  .notification {
    display: none;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      display: block;
    }
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    display: block;
    margin-top: -5rem;
    color: ${({ theme }) => theme.colors.tertiary2};
    right: 0;
    transform: translate(-1%, 50%);
    cursor: pointer;
  }
`;

// merging the sidebar and navbar in tablet and mobile breakpoints

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
