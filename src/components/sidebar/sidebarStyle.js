import styled from "styled-components";

export const StyledUl = styled.ul`
  padding: 3rem 0 0 1rem;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    display: none;
  }

  & > li {
    padding: 1rem 1rem 2rem 0;

    .navLink {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.secondary5};
      padding: 2rem;
    }

    .active {
      background: linear-gradient(90deg, #141414 55%, #1c1c1c 100%);
      color: ${({ theme }) => theme.colors.tertiary1};

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        background: transparent;
      }
    }

    .icon {
      display: none;

      @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        margin: 0 auto;
        font-size: 2.5rem;
        margin-top: 1.5rem;
        display: inline-block;
      }
    }
  }
`;

// export const Padding = styled.div`
//   display: none;
//   @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
//     display: flex;
//     height: 1.5rem;
//     bottom: 60px;
//     position: fixed;
//     color: #000;
//     width: 100%;
//     z-index: 9001;
//   }
