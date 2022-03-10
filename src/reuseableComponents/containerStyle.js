import styled from "styled-components";

export const ContentContainer = styled.section`
  height: 80vh;
  width: 90%;
  max-width: 120rem;
  margin: 4rem auto 4rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LeftContent = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  width: 25%;
  height: 100%;
  color: ${({ theme }) => theme.colors.secondary5};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.7rem;
`;

export const RightContent = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  width: 73%;
  color: ${({ theme }) => theme.colors.secondary2};
  height: 100%;
`;
