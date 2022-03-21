import styled from "styled-components";
import { Link } from "react-router-dom";

export const CalendarContainer = styled.div``;

export const ScheduleContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 1rem;
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
      font-size: 1.5rem;
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

export const Waitlist = styled(Link)`
  color: ${({ theme }) => theme.colors.tertiary2};
`;
