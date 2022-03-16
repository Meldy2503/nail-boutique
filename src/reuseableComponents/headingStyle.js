import styled from "styled-components";

export const HeadingStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    padding-top: 0rem;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    padding-top: 7.5rem;
  }

  h2 {
    font-size: 2.7rem;
    font-style: normal;
    font-weight: 700;
    /* line-height: 1.4; */

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 2.5rem;
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 2.3rem;
    }

    @media (max-width: 410px) {
      font-size: 2rem;
    }
  }
`;
