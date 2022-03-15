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

    span {
      h3 {
        font-size: 2.2rem;
      }
    }
  }
`;

export const Span = styled.div`
  height: 3rem;
  width: 0.1rem;
  background-color: ${({ theme }) => theme.colors.tertiary2};
  margin-right: 3rem;
`;
