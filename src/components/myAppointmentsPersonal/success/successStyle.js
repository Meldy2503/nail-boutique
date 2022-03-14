import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000cc;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9000;
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
    height: 39rem;

    h3 {
      font-size: 3.6rem;
      font-style: normal;
      font-weight: 800;
      line-height: 5rem;
    }

    p {
      margin-bottom: 2rem;
    }

    img {
      max-width: 100%;
      width: 50%;
    }
  }
`;
