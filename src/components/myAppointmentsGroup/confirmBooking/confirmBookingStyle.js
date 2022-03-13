import styled from "styled-components";

export const ConfirmBookingContainer = styled.div`
  hr {
    color: ${({ theme }) => theme.colors.primary3};
  }
`;

export const Location = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary5};
  background-color: ${({ theme }) => theme.colors.primary3};
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  width: 56rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 75%;
  }
  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
  }

  span {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 3rem;
    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      padding: 1rem;
    }
  }
  .pin {
    font-size: 3.5rem;
    width: 20%;
  }

  p {
    width: 80%;
  }
`;

export const Terms = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.primary5};
  padding-top: 4rem;
  margin-top: 5rem;

  h2 {
    margin-bottom: 1rem;
  }
`;

export const Agreement = styled.span`
  display: flex;
  align-items: center;
  margin: 2rem 0;

  input {
    margin-right: 1rem;
    border: 0.5px solid ${({ theme }) => theme.colors.tertiary2};
    accent-color: ${({ theme }) => theme.colors.tertiary2};
    background-color: #000;
  }
`;