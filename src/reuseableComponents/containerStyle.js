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
    width: 95%;
    /* width: 90%; */
    /* flex-direction: column-reverse; */
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

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const RightContentCol1 = styled.div`
  margin: 4rem 2rem 4rem 3rem;
  width: 70%;
  height: 90%;
  overflow-y: auto;
  scrollbar-width: thin;
  scroll-padding-right: 5rem;

  &::-webkit-scrollbar {
    width: 0.5rem;

    /* position: absolute; */
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.primary2};
    /* margin-right: 5rem; */
    /* margin-block: 7rem; */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary5};
    border-radius: 2rem;
    border-top: 4rem solid transparent;
    border-bottom: 4rem solid transparent;
    background-clip: padding-box;
    /* border-right: 4px solid #000; */

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      border-top: 12rem solid transparent;
      border-bottom: 0rem solid transparent;
      height: 95%;
    }
  }

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
  height: 90%;
  overflow-y: auto;
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
