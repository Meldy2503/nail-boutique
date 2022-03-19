import styled from "styled-components";

export const NotificationContainer = styled.div`
  padding: 3rem;
  margin: 0 auto;
  height: 95%;
  overflow: auto;
  scrollbar-width: thin;
  scroll-padding-right: 5rem;

  &::-webkit-scrollbar {
    width: 0.3rem;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.primary2};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary5};
    border-radius: 2rem;
    border-top: 4rem solid transparent;
    border-bottom: 4rem solid transparent;
    background-clip: padding-box;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      border-top: 12rem solid transparent;
      border-bottom: 0rem solid transparent;
    }
  }
`;

export const NotificationContents = styled.div`
  margin: 0 auto;
`;

export const Item = styled.div`
  overflow: auto;
  padding: 0.7rem 0 0.7rem 0;

  & > div {
    background-color: ${({ theme }) => theme.colors.primary7};
    padding: 1rem 1.5rem 1rem 3rem;
    border-left: 0.5rem solid ${({ theme }) => theme.colors.tertiary2};

    h3 {
      font-size: 2rem;
      margin-bottom: 0.5rem;

      @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        font-size: 1.8rem;
      }

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        font-size: 1.6rem;
      }
    }
    p {
      font-size: 1.5rem;

      @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        font-size: 1.4rem;
      }

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        font-size: 1.3rem;
      }
    }
  }
`;
