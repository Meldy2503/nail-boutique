import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  color: ${({ color }) => color || "#000000"};
  background: linear-gradient(90deg, #f5d061 -1.65%, #e48f04 100%);
  border: none;
  padding: ${({ padding }) => padding || "1rem 0"};
  display: inline-block;
  border-radius: 1rem;
  font-weight: 400;
  font-size: 1.8rem;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: ${({ bgh }) => bgh || "#f5d061"};
  }
`;
