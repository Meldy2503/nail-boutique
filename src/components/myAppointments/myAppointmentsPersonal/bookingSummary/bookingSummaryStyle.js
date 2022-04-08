import styled from "styled-components";
import { Link } from "react-router-dom";

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  padding: 1.5rem 0 1rem 0rem;
  width: 95%;
  margin: 0 auto;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary4};

  h2 {
    font-size: 2rem;
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

export const LocationContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-bottom: 1.8rem;
`;
export const Location = styled.div`
  background: #212121;
  border: 1px solid #3c3c3c;
  border-radius: 0.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 0.5rem;

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
  width: 95%;
  padding: 1rem 0 0 0;

  div {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;

    h6 {
      font-size: 1.5rem;
      font-weight: 500;
      display: flex;
      flex-direction: row;
      width: 65%;

      p {
        font-size: 1.5rem;
        font-weight: 500;
        text-align: right;
        width: 33%;
      }
    }
  }
`;
export const SubTotal = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.primary5};
  width: 100%;

  div {
    padding: 1rem 0 0.5rem 0;
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h6 {
      font-size: 1.5rem;
      font-weight: 500;
    }

    p {
      font-size: 1.5rem;
      font-weight: 500;
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
  padding: 1rem 0;
  font-size: 1.4rem;
  width: 95%;

  div {
    border: 1px solid #555555;
    filter: drop-shadow(0px 7px 39px rgba(0, 0, 0, 0.08));
    border-radius: 0.5rem;
    text-align: center;
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;

    span {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h6 {
        font-size: 1.3rem;
        font-weight: 700;
      }

      p {
        font-size: 1.1rem;
      }

      img {
        width: 4.3rem;
        height: 4.3rem;
      }
    }

    .icon {
      color: #e48f04;
      font-size: 2rem;
      margin-bottom: 0.8rem;
    }
  }
`;

export const Day = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 95%;
  margin: 0 auto;
  padding-bottom: 2rem;

  .icon {
    font-size: 2.1rem;
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
  background-color: ${({ theme }) => theme.colors.primary4};
  border-top: 1px solid ${({ theme }) => theme.colors.primary5};
  z-index: 4000;
  position: sticky;
  top: 100%;
  margin-bottom: 0.5rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary5};

  @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    z-index: 1;
    position: sticky;
    bottom: 0;
    width: 100%;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 1rem 0rem 1rem 0rem;
    width: 95%;
    margin: 0 auto;

    h6 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    p {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`;

export const Button = styled(Link)`
  color: ${({ color }) => color || "#000000"};
  background: linear-gradient(90deg, #f5d061 -1.65%, #e48f04 100%);
  width: 95%;
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
