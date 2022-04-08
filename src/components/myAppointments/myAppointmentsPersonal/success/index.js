import React, { useContext } from "react";
import { SummaryContext } from "../../../../summaryContext";

import { ButtonS } from "../../../../reuseableComponents/buttonStyle";
import { ContentContainer } from "../../../../reuseableComponents/containerStyle";
import { Popup, SuccessContainer } from "./successStyle";
import tick from "../../../../images/tick2.png";

function Success() {
  const { setSummaryList, updateList, onDateChange } =
    useContext(SummaryContext);
  const handleReset = () => {
    updateList(setSummaryList.reset());
  };

  return (
    <ContentContainer>
      <SuccessContainer>
        <Popup>
          <div>
            <img src={tick} alt="tick" />
            <h3>Success!</h3>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled
            </p>
            <ButtonS
              onClick={handleReset}
              fs="1.3rem"
              width="65%"
              to="/my-appointments"
            >
              GO BACK HOME
            </ButtonS>
          </div>
        </Popup>
      </SuccessContainer>
    </ContentContainer>
  );
}

export default Success;
