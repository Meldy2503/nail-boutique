import styled from "styled-components";
import { Link } from "react-router-dom";

export const Back = styled(Link)`
  display: flex;
  font-size: 1.5rem;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary6};
`;
