import styled from "styled-components";

export const BookingSummaryStyle = styled.div`
  max-width: 40%;
  width: 90%;

  /* height: 79.6rem; */
  background-color: ${({ theme }) => theme.colors.primary4};

  h2 {
    font-size: 2.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.5rem;
  }

  span {
    display: flex;
    justify-content: space-between;
  }

  p {
    /* padding-top: 1rem; */
  }

  & > p + p {
    /* padding-bottom: 1rem; */
  }
`;

export const SummaryContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const Title = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary5};
  padding-bottom: 1rem;
  /* margin-bottom: 1rem; */

  p {
    color: ${({ theme }) => theme.colors.primary5};
  }
`;
export const Service = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary5};
  /* padding-bottom: 1rem;
  margin-bottom: 1rem; */

  p {
    font-size: 1.8rem;
    font-style: medium;
    font-weight: 500;
    line-height: 4.2rem;
  }
`;
export const SubTotal = styled.div`
  p {
    font-size: 1.8rem;
    font-style: medium;
    font-weight: 500;
    line-height: 4.2rem;
  }
`;
export const Total = styled.span`
  border-top: 1px solid ${({ theme }) => theme.colors.primary5};

  p {
    p {
      font-size: 1.8rem;
      font-style: medium;
      font-weight: 500;
      line-height: 4.2rem;
    }
  }
  /* padding: 1rem 0;
  margin-top: 1rem; */
`;
