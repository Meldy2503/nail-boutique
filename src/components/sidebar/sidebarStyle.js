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

  & > li {
    padding: 1.5rem 0 2.5rem 2rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      padding: 1.5rem 0 2.5rem 0.5rem;
    }
    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    }

    .navLink {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.secondary5};
      padding: 2rem 3rem;

      @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        padding: 2rem 2.3rem 2rem 2rem;
      }

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        padding: 2rem 3rem 2rem 1rem;
      }

      & > span {
        @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
          display: none;
        }
      }
    }

    .active {
      background: linear-gradient(150deg, #141414 85%, #1c1c1c 100%);
      color: ${({ theme }) => theme.colors.tertiary1};

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        background: transparent;
      }
    }

    .icon {
      display: none;

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        margin: 0 auto;
        font-size: 2.5rem;
        display: inline-block;
      }
    }
  }
`;
