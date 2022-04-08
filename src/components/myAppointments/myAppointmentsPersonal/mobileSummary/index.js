import React, { useContext } from "react";
import { SummaryContext } from "../../../../summaryContext";
import { ContentContainer } from "../../../../reuseableComponents/containerStyle";
<RightContentCol2>
  <BookingSummary />
</RightContentCol2>;
import {
  Button,
  ButtonContainer,
} from "../../../../reuseableComponents/buttonStyle";

function MobileSummary() {
  //   const { updateList } = useContext(SummaryContext);
  //   const handleClick = (location) => {
  //     updateList({ location });
  //   };
  return (
    <ContentContainer>
      <RightContent>
        <RightContentCol2>
          <BookingSummary />
          <ButtonContainer paddingm="0.5rem 0">
            <Button to="/my-appointments/personal-booking/select-technician">
              CONTINUE
            </Button>
          </ButtonContainer>
        </RightContentCol2>
      </RightContent>
    </ContentContainer>
  );
}

export default MobileSummary;
