import styled from "styled-components";

export const ContentContainer = styled.section`
  width: 90%;
  height: 97vh;
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 0.5rem;
  overflow: auto;
  padding-top: 11.5rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    height: 98vh;
    padding-top: 8rem;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    /* width: 90%; */
    flex-direction: column-reverse;
    /* height: 93.5vh; */
    padding-top: 3rem;
  }
`;

export const LeftContent = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  width: 25%;
  height: 100%;
  color: ${({ theme }) => theme.colors.secondary5};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.7rem;
  overflow: auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    display: none;
  }

  /* @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 6rem;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100vw;
    align-items: center;
    justify-content: center;
    height: fit-content;
    position: fixed;
    bottom: 0;
    z-index: 1500;
    padding: 0;
    margin-top: 1rem;
  } */
`;

export const RightContent = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  width: 77%;
  color: ${({ theme }) => theme.colors.secondary2};
  height: 100%;
  display: ${({ display }) => display || "flex"};
  justify-content: ${({ jc }) => jc || "space-between"};
  align-items: ${({ alit }) => alit || "flex-start"};
  flex-direction: ${({ alit }) => alit || "row"};
  overflow: ${({ overflow }) => overflow || "hidden"};

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    margin: 0 auto;
  }

  /* @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
    height: 95%;
    margin-left: 0;
    margin: 0 auto;
    flex-direction: ${({ alitm }) => alitm || "column"};
  } */
`;

export const RightContentCol1 = styled.div`
  margin: 4rem 2rem 4rem 3rem;
  width: 70%;
  /* overflow-y: scroll; */
  /* overflow-x: hidden; */
  height: 85%;
  overflow: auto;
  /* position: relative; */

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 90%;
    height: 93%;
    overflow: auto;

    /* height: 95%; */
    margin: 0 auto;
    /* overflow: scroll; */
  }
`;
export const RightContentCol2 = styled.div`
  margin: 3rem 1.5rem 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary4};
  width: 40%;
  overflow: auto;
  /* position: relative; */
  /* height: 88%; */
  /* overflow-y: scroll;
  overflow-x: hidden; */

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    display: ${({ display }) => display || "none"};
    /* width: 96%;
    height: 90%;
    overflow: scroll; */
  }
`;
