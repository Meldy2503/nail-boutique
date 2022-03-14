import styled from "styled-components";

export const BookingStyle = styled.div`
  display: flex;

  align-items: center;
  height: 100%;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }
`;

export const Book = styled.div`
  height: 30rem;
  width: 48%;
  border-radius: 1rem;
  border: 1px solid #636363;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 55%;

    margin-top: 2rem;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
  }

  & > div {
    padding: 4rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      padding: 3rem 4rem;
    }

    h4 {
      font-size: 2rem;
      line-height: 1.3;
      width: 10rem;
      color: ${({ theme }) => theme.colors.secondary1};
    }

    img {
      color: #fff;
      width: 5rem;
      height: 5rem;
      max-width: 100%;
    }
  }
`;
