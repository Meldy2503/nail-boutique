import React from "react";
import {
  CellWrapper,
  DayWrapper,
  GridWrapper,
  RollInCell,
} from "./calenderStyle";

const CalenderGrid = ({ startDay }) => {
  // const totalDays = 42;
  const day = startDay.clone().subtract(1, "day");

  const daysArray = [...Array(42)].map(() => day.add(1, "day").clone());

  return (
    <div>
      <GridWrapper>
        {daysArray.map((dayItem) => (
          <CellWrapper
            key={dayItem.format("DDMMYYYY")}
            // isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
          >
            <RollInCell justifyContent={"center"}>
              <DayWrapper>{dayItem.format("D")}</DayWrapper>
            </RollInCell>
          </CellWrapper>
        ))}
      </GridWrapper>
    </div>
  );
};

export default CalenderGrid;
