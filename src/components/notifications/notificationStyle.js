import styled from "styled-components";

export const NotificationContainer = styled.div`
  padding: 3rem 3rem;
`;

export const Item = styled.div`
  padding: 1rem 0 1rem 0;

  & > div {
    background-color: ${({ theme }) => theme.colors.primary7};
    margin-bottom: 0rem;
    display: flex;

    h3 {
      font-size: 2.2rem;
      margin-bottom: 0.5rem;

      @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        font-size: 2rem;
      }

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        font-size: 1.8rem;
      }
    }
  }
`;

export const RightBorder = styled.div`
  height: 10rem;
  width: 1rem;
  background-color: ${({ theme }) => theme.colors.tertiary2};
  margin-right: 3rem;
`;
