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
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;
export const Option = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 2rem;
  margin-right: 2rem;
`;

export const SelectAvailableTime = styled.span`
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
`;

export const Waitlist = styled(Link)`
  color: ${({ theme }) => theme.colors.tertiary2};
`;
