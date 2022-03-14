import styled from "styled-components";

export const NotificationContainer = styled.div`
  padding: 0 3rem;
`;

export const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Row2 = styled.div``;

export const Item = styled.div``;

export const Alert = styled.div`
  & > div {
    padding: 1.5% 6%;
    position: relative;
    background-color: ${({ theme }) => theme.colors.primary7};
    margin: 2rem 0;

    &::before {
      content: "";
      width: 0.6rem;
      height: 80%;
      background-color: ${({ theme }) => theme.colors.tertiary2};
      position: absolute;
      top: 10%;
      left: 1rem;
    }
  }
`;
