import styled from "styled-components";

export const SummaryContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const Title = styled.div`
  padding: 1.5rem 5% 1rem 5%;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary4};

  h2 {
    font-size: 1.9rem;
    font-weight: 900;

    @media screen and (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 1.8rem;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.primary6};
    font-size: 1.5rem;
    margin: 0.5rem 0 0 0;
  }
`;
