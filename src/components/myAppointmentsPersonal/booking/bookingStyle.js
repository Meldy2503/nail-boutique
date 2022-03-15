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
    height: 75vh;
    padding: 5rem;
  }
`;

export const Book = styled.div`
  height: 30rem;
  width: 48%;
  border-radius: 1rem;
  border: 1px solid #636363;

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 60%;
    margin-top: 2rem;
    /* margin: 5rem 0; */
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }

  & > div {
    padding: 4rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      padding: 1.5rem 4rem;
    }

    h4 {
      font-size: 2rem;
      line-height: 1.3;
      width: 10rem;
      color: ${({ theme }) => theme.colors.secondary1};

      @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        font-size: 1.6rem;
      }
    }

    img {
      color: #fff;
      width: 5rem;
      height: 5rem;
      max-width: 100%;

      @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        width: 25%;
        height: auto;
      }
    }
  }
`;
