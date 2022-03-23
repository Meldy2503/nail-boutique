import styled from "styled-components";

export const MapImg = styled.div`
  width: 40%;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    margin: 0 auto;
    height: 50%;
  }
  @media (max-width: 300px) {
    height: 45%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
export const RightContent = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  width: 77%;
  color: ${({ theme }) => theme.colors.secondary2};
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
export const Location = styled.div`
  margin: 4rem 2rem 2rem 3rem;
  width: 72%;
  height: 90%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin: 1rem auto 3rem auto;
    width: 90%;
  }

  @media (max-width: 600px) {
    margin: 1rem auto;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.secondary6};
  border-radius: 1rem;
  margin-bottom: 2rem;
  padding: 2rem 3rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

export const LocationText = styled.div`
  h4 {
    font-size: 2rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 1.8rem;
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 1.7rem;
    }

    @media (max-width: 400px) {
      font-size: 1.5rem;
    }
  }

  p {
    width: 85%;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary7};

    @media (max-width: 600px) {
      font-size: 1.3rem;
      width: 88%;
    }
  }
`;
