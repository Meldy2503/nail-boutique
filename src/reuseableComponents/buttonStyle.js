import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.div`
  padding: ${({ padding }) => padding || "2rem 0 2rem 0"};
  position: sticky;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.primary2};
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    position: fixed;
    bottom: 1.5rem;
    right: 0;
    left: 0;
    width: 90%;
    margin: 0 auto;
    padding: ${({ padding }) => padding || "3rem 0 3rem 0"};
  }
`;

export const Button = styled(Link)`
  color: ${({ color }) => color || "#000000"};
  background: linear-gradient(90deg, #f5d061 -1.65%, #e48f04 100%);
  border: none;
  padding: ${({ padding }) => padding || ".8rem 0"};
  display: inline-block;
  border-radius: 0.6rem;
  font-weight: 400;
  font-size: ${({ fs }) => fs || "1.6rem"};
  text-align: center;
  width: ${({ width }) => width || "100%"};
  z-index: 1500;
  position: sticky;
  bottom: 0;
  right: 0;
  left: 0;

  &:hover {
    background: linear-gradient(180deg, #f5d061 -1%, #e48f04 100%);
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin: 0 auto;
    font-size: ${({ mfs }) => mfs || "1.5rem"};
    width: 86%;
    position: fixed;
    bottom: 2.6rem;
    right: 0;
    left: 0;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 1.2rem;
  }
`;

export const ButtonS = styled(Link)`
  color: ${({ color }) => color || "#000000"};
  background: linear-gradient(90deg, #f5d061 -1.65%, #e48f04 100%);
  width: 100%;
  border: none;
  padding: ${({ padding }) => padding || ".8rem 0"};
  display: inline-block;
  border-radius: 0.6rem;
  font-weight: 400;
  font-size: ${({ fs }) => fs || "1.6rem"};
  text-align: center;
  width: ${({ width }) => width || "100%"};
  margin: 1rem 0 2rem 0;

  &:hover {
    background: linear-gradient(180deg, #f5d061 -1%, #e48f04 100%);
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    font-size: ${({ mfs }) => mfs || "1.5rem"};
    width: 90%;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 1.2rem;
  }
`;
