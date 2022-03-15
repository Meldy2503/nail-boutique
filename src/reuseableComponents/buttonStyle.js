import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  color: ${({ color }) => color || "#000000"};
  background: linear-gradient(90deg, #f5d061 -1.65%, #e48f04 100%);
  width: 100%;
  border: none;
  padding: ${({ padding }) => padding || ".8rem 0"};
  display: inline-block;
  border-radius: 0.5rem;
  font-weight: 400;
  font-size: ${({ fs }) => fs || "1.6rem"};
  text-align: center;
  width: ${({ width }) => width || "100%"};
  margin-top: 1.5rem;

  &:hover {
    background: linear-gradient(180deg, #f5d061 -1%, #e48f04 100%);
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    font-size: ${({ mfs }) => mfs || "1.5rem"};
  }

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }
`;
