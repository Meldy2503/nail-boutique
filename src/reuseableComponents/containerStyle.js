import styled from "styled-components";

export const ContentContainer = styled.section`
  height: 80%;
  width: 90%;
  max-width: 140rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 0.5rem;
  overflow: hidden;
  padding-top: 13rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 95%;
    /* margin: 2rem auto; */
  }

  @media (max-width: 500px) {
    /* margin: 0.5rem auto; */
    width: 90%;
  }
`;

export const LeftContent = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  width: 24%;
  height: 76rem;
  color: ${({ theme }) => theme.colors.secondary5};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.7rem;
  display: block;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 8.5%;
  }
`;

export const RightContent = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  width: 75%;
  color: ${({ theme }) => theme.colors.secondary2};
  height: 100%;
  display: ${({ display }) => display || "flex"};
  justify-content: ${({ jc }) => jc || "space-between"};
  align-items: ${({ alit }) => alit || "flex-start"};

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 90.4%;
  }
`;

export const RightContentCol1 = styled.div`
  margin: 3rem 2rem 3rem 3rem;
  width: 70%;
  height: 60rem;
  overflow: scroll;
`;
export const RightContentCol2 = styled.div`
  margin: 3rem 1.5rem 3rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary4};
  width: 40%;
`;
