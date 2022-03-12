import styled from "styled-components";

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 80%;
  margin: 0 auto;
  width: 100%;
`;

export const Intro = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 1.8rem;
`;

export const Title = styled.div`
  padding: 2rem 0 1.5rem 0;

  h2 {
    font-size: 2.5rem;
    font-weight: 800;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 2rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.primary6};
    font-size: 1.5rem;
    margin: 1rem 0 0 0;
  }
`;

export const Location = styled.div`
  background: #212121;
  border: 1px solid #3c3c3c;
  border-radius: 0.5rem;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 1rem;

    span {
      color: #878787;
      font-size: 2.8rem;
    }

    p {
      color: #b9b9b9;
      font-size: 1.4rem;
      width: 85%;
    }
  }
`;

export const Service = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.primary5};
  color: #b9b9b9;
  display: flex;
  flex-direction: column;

  /* @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.primary5};
    color: #b9b9b9;
    display: flex;
    flex-direction: column;
  } */
`;

export const Manicure = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 1rem 0 0 0;

  div {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1200px) {
      flex-direction: column;
      align-items: flex-start;
    }

    h6 {
      font-size: 1.8rem;
      font-weight: 500;
      display: flex;
      flex-direction: row;

      p {
        font-size: 1.6rem;
        font-weight: 500;
      }
    }
  }
`;
export const SubTotal = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.primary5};
  width: 100%;
  margin: 0 auto;
  padding: 1rem 1.5rem 0 1.5rem;

  div {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1200px) {
      flex-direction: column;
      align-items: flex-start;
    }

    h6 {
      font-size: 1.8rem;
      font-weight: 500;
    }

    p {
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
`;

export const Booking = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.primary5};
`;

export const Technician = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 1rem 0;

  /* p {
  } */

  div {
    border: 1px solid #555555;
    filter: drop-shadow(0px 7px 39px rgba(0, 0, 0, 0.08));
    border-radius: 0.5rem;
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    span {
      display: flex;
      flex-direction: column;

      h6 {
        font-size: 1.4rem;
        font-weight: 700;
      }

      p {
        font-size: 1.2rem;
      }

      img {
        width: 4.5rem;
        height: 4.5rem;

        @media screen and (max-width: ${({ theme }) =>
            theme.mediaQuery.tablet}) {
          width: 8rem;
          height: 8rem;
        }
      }
    }

    /* .name {
      width: 55%;

      @media screen and (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        width: 70%;
      }
    } */

    .icon {
      color: #e48f04;
      font-size: 2rem;
      margin-bottom: 0.8rem;

      @media screen and (max-width: 1050px) {
        display: none;
      }
    }
  }
`;

export const Day = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 1rem;

  .icon {
    font-size: 2.3rem;
    color: #878787;
  }
  /* 
  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  } */

  h6 {
    font-size: 1.4rem;
    width: 85%;

    em {
      font-weight: 400;
    }
  }
`;

export const Total = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.primary5};
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
  }

  h6 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  p {
    font-size: 1.6rem;
  }
`;

export const Btn = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 1rem 0 0 0;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.primary4};
  width: 100%;
  text-align: left;
  position: sticky;
  bottom: 0;

  /* padding: 1rem 0;
  margin-top: 1rem; */
`;
