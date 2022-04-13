import styled from "styled-components";

export const CalendarContainer = styled.div`
  margin: 0 auto;
`;

export const ScheduleContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  flex-wrap: wrap;
  margin-top: 1rem;
  font-size: 1.45rem;

  @media (max-width: 400px) {
    flex-direction: column;
  }

  div {
    display: flex;
    align-items: center;

    span {
      height: 0.7rem;
      width: 0.7rem;
      margin-right: 1rem;
      border-radius: 50%;
    }
  }
  .available {
    background-color: #00ff66;
  }

  .unavailable {
    background-color: #ff0000;
  }
`;

export const Time = styled.div`
  width: 100%;
  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 2rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 1.7rem;
    }

    @media (max-width: 400px) {
      font-size: 1.6rem;
    }
  }
`;
export const Option = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 1rem;
  margin-right: 2rem;
  font-size: 1.4rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    font-size: 1.3rem;
  }
`;

export const SelectAvailableTime = styled.span`
  display: flex;
  flex-wrap: wrap;
`;

export const Waitlist = styled.div`
  margin-bottom: 3rem;

  .link {
    color: ${({ theme }) => theme.colors.tertiary2};
  }
`;

export const Day = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  padding-bottom: 1rem;
  align-items: center;
  flex-wrap: wrap;
  text-align: right;

  .icon {
    font-size: 2.2rem;
    color: #878787;
    margin-right: 1.2rem;
  }

  h6 {
    font-size: 1.4rem;
    margin-right: 0.8rem;
  }

  p {
    font-style: italic;
    font-size: 1.3rem;
    margin-left: 0.5rem;
  }
`;
