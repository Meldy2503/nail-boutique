import styled from "styled-components";

export const ScrollContainer = styled.div`
  overflow: scroll;
  /* height: 70%; */
  height: ${({ height }) => height || "70%"};

  /* @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    height: ${({ heightt }) => heightt || "60%"};
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    height: ${({ heightm }) => heightm || "60%"};
  } */
`;
