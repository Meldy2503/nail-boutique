import styled from "styled-components";

export const BookingStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Book = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  /* height: 100%; */
  width: 70%;

  & > div {
    width: 50%;
    /* height: 60vw; */
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.secondary4};
    /* display: flex; */

    & > div {
      padding: 15%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 29rem;

      h4 {
        width: 9rem;
        color: ${({ theme }) => theme.colors.secondary1};
      }
    }
  }

  img {
    width: 30%;
    max-width: 100%;
  }
`;
