import styled from "styled-components";

export const ScheduleContainer = styled.div`
  img {
    max-width: 100%;
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
