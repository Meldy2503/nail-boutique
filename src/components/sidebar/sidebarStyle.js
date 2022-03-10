import styled from "styled-components";

export const StyledUl = styled.ul`
  /* width: 80%; */
  padding: 3rem 0 0 1rem;
  margin: 0 auto;

  .navLink {
    font-size: 1.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary5};
    padding: 2rem;
  }

  .active {
    background: linear-gradient(90deg, #141414 5.67%, #1c1c1c 100%);
    /* padding: 2rem; */
    color: ${({ theme }) => theme.colors.tertiary1};
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    /* padding: 3rem 0 0 5rem; */
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
  }

  & > li {
    padding: 2rem;
    font-size: 1.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary5};
  }
`;
