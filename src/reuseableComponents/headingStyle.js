import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeadingStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${({ PdBottom }) => PdBottom || "1.5rem"};
  align-items: center;
  position: sticky;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.primary2};
  top: 0;
  height: ${({ height }) => height || "fit-content"};

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    padding-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    padding-top: ${({ mPdTop }) => mPdTop || "7.5rem"};
    padding-bottom: 1rem;
  }

  h2 {
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 2.4rem;
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 2.3rem;
    }

    @media (max-width: 420px) {
      font-size: 2rem;
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
