import styled from "styled-components";

export const StyledUl = styled.ul`
  padding: 3rem 0 0 1rem;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    padding: 3rem 0 0 0;
  }
  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    padding: 1rem 0 0 0;
  }

  .navLink {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.secondary5};
    padding: 2rem;

    & > span {
      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        display: none;
      }
    }

    .icon {
      display: none;

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        margin: 0 auto;
        font-size: 2.5rem;
        display: inline-block;
        /* margin-bottom: 2rem; */
      }
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      padding: 2rem 0 2rem 1.5rem;
      /* text-align: center; */
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      /* padding: 0 0 1rem 2rem; */
      /* text-align: center; */
    }
  }

  .active {
    background: linear-gradient(90deg, #141414 5.67%, #1c1c1c 100%);
    color: ${({ theme }) => theme.colors.tertiary1};
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
  }

  & > li {
    padding: 1.5rem 0 1.5rem 2rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      padding: 1.5rem 0 1.5rem 0.5rem;
    }
    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      /* padding: 0; */
    }
  }
`;
