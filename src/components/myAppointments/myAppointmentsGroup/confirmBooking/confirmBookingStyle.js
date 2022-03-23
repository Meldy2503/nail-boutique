import styled from "styled-components";

export const ConfirmBookingContainer = styled.div`
  margin-bottom: 4rem;
  hr {
    color: ${({ theme }) => theme.colors.primary3};
  }
`;

export const Location = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary5};
  background-color: ${({ theme }) => theme.colors.primary3};
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  width: 80%;

  @media (max-width: 1355px) {
    width: 100%;
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      padding: 1rem;
    }
  }
  .pin {
    font-size: 3rem;
    width: 10%;
  }

  p {
    width: 87%;
  }
`;

export const Terms = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.primary5};
  padding-top: 3rem;
  margin-top: 4rem;

  h2 {
    margin-bottom: 0.6rem;
    font-size: 2rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 1.9rem;
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.6rem;
    line-height: 1.7;
    margin-bottom: 1rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 1.5rem;
    }
  }
`;
