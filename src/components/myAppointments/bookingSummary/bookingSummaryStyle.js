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
  padding: 2rem 0 1rem 0;

  h2 {
    font-size: 2.3rem;
    font-weight: 800;
  }

  p {
    color: ${({ theme }) => theme.colors.primary6};
    font-size: 1.5rem;
    margin: 1rem 0;
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
      width: 8%;
    }

    p {
      color: #b9b9b9;
      font-size: 1.4rem;
      width: 80%;
    }
  }
`;

export const Service = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.primary5};
  color: #b9b9b9;
  display: flex;
  flex-direction: column;
`;

export const Manicure = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 1rem 0 0 0;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  /* justify-content: column; */

  div {
    margin-bottom: 1rem;
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    /* justify-content: column; */

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
export const SubTotal = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.primary5};
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0 0 1.1rem;

  div {
    margin-bottom: 1rem;
    /* display: flex;
    justify-content: space-between;
    align-items: center; */
    /* justify-content: column; */

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

  p {
    padding: 1rem 0;
  }

  div {
    border: 1px solid #555555;
    filter: drop-shadow(0px 7px 39px rgba(0, 0, 0, 0.08));
    border-radius: 0.5rem;
    margin-bottom: 1rem;

    span {
      h6 {
      }

      p {
      }
    }

    .icon {
      color: #e48f04;
      font-size: 2rem;
    }
  }
`;

export const Day = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export const Btn = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 1rem 0;
  text-align: left;
`;

export const Total = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.primary5};

  h6 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  p {
    font-size: 1.6rem;
  }

  /* padding: 1rem 0;
  margin-top: 1rem; */
`;
