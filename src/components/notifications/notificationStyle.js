import styled from "styled-components";

export const NotificationContainer = styled.div`
  height: 88%;
  overflow: auto;
  scrollbar-width: thin;
  padding: 0 3rem 0 3rem;
  margin-top: 4rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    margin-top: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin-top: 0;
    padding: 0rem 2.5rem 0 2.5rem;
    height: 90%;
  }

  &::-webkit-scrollbar {
    width: 0;
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
