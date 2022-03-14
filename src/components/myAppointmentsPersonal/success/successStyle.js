import styled from "styled-components";

export const SuccessContainer = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0000001f;
  width: 100%;
  height: 100%;
`;
export const Popup = styled.div`
  height: 493px;
  width: 477px;
  background-color: ${({ theme }) => theme.colors.primary2};
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary1};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > div {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 40rem;

    img {
      max-width: 100%;
      width: 50%;
    }
  }
`;
