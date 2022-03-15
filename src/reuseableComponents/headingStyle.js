import styled from "styled-components";

export const HeadingStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;

  h2 {
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    /* line-height: 1.4; */

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 2.5rem;
      padding-top: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      padding-top: 2rem;
    }
  }
`;
