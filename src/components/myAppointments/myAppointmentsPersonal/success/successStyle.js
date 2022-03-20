import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000db;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9000;
`;
export const Popup = styled.div`
  /* change height and width to proper units */
  width: 34rem;
  height: 36rem;
  background-color: ${({ theme }) => theme.colors.primary2};
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary1};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 26rem;
    height: 30rem;
  }

  & > div {
    /* width: 25rem; */
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15%;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      padding: 6% 8%;
    }

    h3 {
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 800;
      line-height: 5rem;
    }

    p {
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
      font-weight: 300;
    }

    img {
      max-width: 100%;
      width: 25%;

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        width: 20%;
      }
    }
  }
`;
