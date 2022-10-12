import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeadingStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 0 1.5rem 0;
  position: sticky;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.primary2};
  top: 0;
  height: fit-content;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    padding: 3.5rem 0 1rem 0;
  }

  h2 {
    font-size: 2.3rem;
    font-style: normal;
    font-weight: 700;
    width: 70%;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 2.2rem;
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 2.1rem;
    }

    @media (max-width: 420px) {
      font-size: 2rem;
      width: 65%;
    }

    @media (max-width: 300px) {
      font-size: 1.8rem;
    }
  }
`;

export const Back = styled(Link)`
  display: flex;
  font-size: 1.5rem;
  justify-content: flex-end;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary6};
`;

export const InputField = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 4rem;

  input {
    width: 100%;
    padding: 1.4rem 1.6rem;
    background-color: ${({ theme }) => theme.colors.primary7};
    border: none;
    border-radius: 0.4rem;
    color: ${({ theme }) => theme.colors.secondary1};

    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary3};
      outline: none;
      color: ${({ theme }) => theme.colors.secondary1};
      background-color: ${({ theme }) => theme.colors.primary7};
    }
  }
`;
