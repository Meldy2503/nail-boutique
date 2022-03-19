import styled from "styled-components";
import { Link } from "react-router-dom";

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
  padding: 1.5rem 5% 1rem 5%;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary4};

  h2 {
    font-size: 1.9rem;
    font-weight: 900;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 1.8rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.primary6};
    font-size: 1.5rem;
    margin: 0.5rem 0 0 0;
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
`;

export const Manicure = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 1rem 0 0 0;

  div {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;

    h6 {
      font-size: 1.6rem;
      font-weight: 500;
      display: flex;
      flex-direction: row;
      width: 58%;

      p {
        font-size: 1.5rem;
        font-weight: 500;
        width: 35%;
        text-align: right;
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

    h6 {
      font-size: 1.6rem;
      font-weight: 500;
      width: 58%;
    }

    p {
      font-size: 1.5rem;
      font-weight: 500;
      width: 35%;
      text-align: right;
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
      }
    }

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

  h6 {
    font-size: 1.4rem;
    width: 85%;

    em {
      font-weight: 400;
    }
  }
`;

export const Total = styled.div`
  padding: 1.5rem 0;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.primary5};
  display: flex;
  justify-content: space-between;
  position: sticky;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.primary4};
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    align-items: flex-start;
  }

  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary5};
    margin-bottom: 1rem;
    width: 100%;

    h6 {
      font-size: 1.6rem;
      font-weight: 600;
      width: 58%;
      padding-left: 1.4rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 1.2rem;
      width: 35%;
      padding-right: 0.8rem;
      text-align: right;
    }
  }
`;

export const Button = styled(Link)`
  color: ${({ color }) => color || "#000000"};
  background: linear-gradient(90deg, #f5d061 -1.65%, #e48f04 100%);
  width: 90%;
  border: none;
  padding: 0.8rem 0;
  border-radius: 0.6rem;
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  z-index: 1500;
  position: sticky;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;

  &:hover {
    background: linear-gradient(180deg, #f5d061 -1%, #e48f04 100%);
  }
`;
