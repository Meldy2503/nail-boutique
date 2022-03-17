import styled from "styled-components";

export const MapImg = styled.div`
  width: 40%;
  /* height: 100%; */

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    margin: 0 auto;
    /* height: 50%; */
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
  margin: 4rem 2rem 4rem 3rem;
  width: 72%;
  height: 90%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin: 2rem auto;
    width: 90%;
    height: 50%;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.secondary6};
  border-radius: 1rem;
  margin-bottom: 2.3rem;

  & input[type="checkbox"] {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  .checkbox {
    display: inline-block;
    height: 3rem;
    width: 3rem;
    background: ${({ theme }) => theme.colors.secondary6};
    border: 1px ${({ theme }) => theme.colors.secondary4} solid;
    margin-right: 2rem;
    border-radius: 0.7rem;
  }
`;

export const Contents = styled.div`
  padding: 1.5rem 0 1.5rem 2rem;
  h4 {
    font-size: 2rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 1.8rem;
    }

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 1.7rem;
    }

    @media (max-width: 410px) {
      font-size: 1.6rem;
    }
  }

  p {
    width: 90%;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.secondary7};
  }
`;
