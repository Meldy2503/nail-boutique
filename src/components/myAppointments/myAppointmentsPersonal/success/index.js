import React, { useContext } from "react";
import { SummaryContext } from "../../../../summaryContext";

import { ButtonS } from "../../../../reuseableComponents/buttonStyle";
import { ContentContainer } from "../../../../reuseableComponents/containerStyle";
import { Popup, SuccessContainer } from "./successStyle";
import tick from "../../../../images/tick2.png";

function Success() {
  const { setSummaryList, updateList } = useContext(SummaryContext);
  const handleReset = () => {
    updateList(setSummaryList.reset());
  };

  return (
    <ContentContainer>
      <SuccessContainer data-aos="zoom-in">
        <Popup>
          <div>
            <img src={tick} alt="tick" />
            <h3>Success!</h3>
            <p>
              See you soon!! <br /> Thanks for booking with us. We've sent an
              email confirmation to you using your provided email address.
            </p>
            <ButtonS onClick={handleReset} fs="1.3rem" width="65%" to="/">
              OK
            </ButtonS>
          </div>
        </Popup>
      </SuccessContainer>
    </ContentContainer>
  );
}

export default Success;
