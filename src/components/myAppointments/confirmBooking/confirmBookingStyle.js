import styled from "styled-components";

export const ConfirmBookingContainer = styled.div``;

export const Location = styled.div``;

export const Terms = styled.div``;

export const Agreement = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  input {
    margin-right: 1rem;
    border: 0.5px solid ${({ theme }) => theme.colors.tertiary2};
    accent-color: ${({ theme }) => theme.colors.tertiary2};
    background-color: #000;
  }
`;
