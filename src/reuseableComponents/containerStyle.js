import styled from "styled-components";

// We need to create a background div that would have the navbar and sidebar on mobile screen set to position absolute. It would act as the parent container with position relative

export const ContentContainer = styled.section`
  height: 95vh;
  width: 90%;
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 0.5rem;
  overflow: scroll;
  padding-top: 12rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    padding-top: 9rem;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    flex-direction: column-reverse;
    height: 93.5vh;
    padding-top: 4rem;
  }
`;

export const LeftContent = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  width: 25rem;
  height: 60vh;
  color: ${({ theme }) => theme.colors.secondary5};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.7rem;
  position: fixed;
  /* display: block; */
  z-index: 1500;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 6rem;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100vw;
    /* flex-direction: column-reverse; */
    align-items: center;
    justify-content: center;
    height: fit-content;
    position: fixed;
    bottom: 0;
    z-index: 1500;
    padding: 0;
  }
`;

export const RightContent = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  width: 77%;
  margin-left: 26rem;
  color: ${({ theme }) => theme.colors.secondary2};
  height: 100%;
  display: ${({ display }) => display || "flex"};
  justify-content: ${({ jc }) => jc || "space-between"};
  align-items: ${({ alit }) => alit || "flex-start"};
  flex-direction: ${({ alit }) => alit || "row"};

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 95%;
    margin-left: 7rem;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
    height: 96%;
    margin-left: 0;
    margin: 0 auto;
    flex-direction: ${({ alit }) => alit || "column"};
  }
`;

export const RightContentCol1 = styled.div`
  margin: 4rem 2rem 4rem 3rem;
  width: 70%;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 85%;
`;
export const RightContentCol2 = styled.div`
  margin: 3rem 1.5rem 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary4};
  width: 40%;
  height: fit-content;
  overflow-y: scroll;
  overflow-x: hidden;
`;
