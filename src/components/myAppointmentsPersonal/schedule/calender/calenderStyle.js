import styled from "styled-components";

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  background-color: ${({ theme }) => theme.colors.primary5};
  border: 1px solid ${({ theme }) => theme.colors.primary5};
`;
export const CellWrapper = styled.div`
  min-width: 5rem;
  min-height: 6rem;
  background-color: ${(props) => (props.isWeekend ? "#585858" : "#1C1C1C")};
  ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.secondary1};
`;
export const RollInCell = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: center;
  align-content: center;
`;
export const DayWrapper = styled.div`
  height: 6rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-content: center;
  line-height: 7rem;
`;
