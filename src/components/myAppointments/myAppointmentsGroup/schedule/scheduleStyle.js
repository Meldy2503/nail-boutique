import styled from "styled-components";

export const CalendarContainer = styled.div``;

export const ScheduleContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 3rem;
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
`;

export const SelectAvailableTime = styled.span`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  input[type="checkbox"] {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    background-color: aqua;
  }
`;

export const Waitlist = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;

  input {
    margin-right: 1rem;
    border: 0.5px solid ${({ theme }) => theme.colors.tertiary2};
    accent-color: ${({ theme }) => theme.colors.tertiary2};
    background-color: #000;
  }
`;
