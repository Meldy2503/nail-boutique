import styled from "styled-components";

// We need to create a background div that would have the navbar and sidebar on mobile screen set to position absolute. It would act as the parent container with position relative

export const ContentContainer = styled.section`
<<<<<<< HEAD
  height: 93vh;
=======
  height: 95vh;
>>>>>>> b9f1ee14ee0204828ec43427c25ac219273247fb
  width: 90%;
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 0.5rem;
  overflow: hidden;
  padding-top: 13rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    flex-direction: column-reverse;
    height: 100vh;
    padding-top: 6rem;
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
  display: block;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 6rem;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    height: fit-content;
    position: absolute;
    bottom: 0;
  }
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
    width: 95%;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    height: 98%;
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
