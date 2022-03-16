import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary5};
`;

export const Date = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  /* border: 1px solid ${({ theme }) => theme.colors.primary5}; */
`;
export const ButtonWrapper = styled.div`
  border: unset;
  /* margin-right: 3px; */
  background-color: ${({ theme }) => theme.colors.primary8};
  color: ${({ theme }) => theme.colors.secondary6};
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary5};

  &:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const StyledGreen = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 20rem;
  img {
    margin-right: 1rem;
  }
`;
export const StyledRed = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 20rem;

  img {
    margin-right: 1rem;
  }
`;
export const Monitor = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 7.3rem;
  overflow: hidden;
`;
export const TitleWrapper = styled.div`
  font-size: 1.2rem;
  padding: 0 1rem;
  display: inline;
`;
export const TextWrapper = styled.div`
  display: inline;
  font-size: 1.2rem;
  padding: 0 1rem;
`;
