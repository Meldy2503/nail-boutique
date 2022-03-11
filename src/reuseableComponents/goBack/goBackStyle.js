import styled from "styled-components";
import { Link } from "react-router-dom";

export const Back = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary6};
  width: 10rem;
`;
