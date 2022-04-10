import styled from "styled-components";

export const NotificationContainer = styled.div`
  height: 90%;
  overflow: auto;
  scrollbar-width: thin;
  padding: 0 3rem 0 3rem;
  margin-top: 4rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    margin-top: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin-top: 0;
    padding: 0rem 2.5rem 0 2.5rem;
  }

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
