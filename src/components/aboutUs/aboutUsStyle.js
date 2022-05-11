import styled from "styled-components";

export const AboutUsContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  padding-top: 3.5rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 90%;
    padding-top: 0;
  }
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImageCol = styled.div``;
export const TextCol = styled.div``;
