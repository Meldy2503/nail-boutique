import styled from "styled-components";

export const NotificationContainer = styled.div`
  h2 {
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.8rem;
  }
`;

export const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Row2 = styled.div``;

export const Item = styled.div`
  background-color: ${({ theme }) => theme.colors.primary7};
`;

export const Alert = styled.div`
  margin: 4rem 0;

  & > div {
    padding: 1.5% 6%;
    position: relative;

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
