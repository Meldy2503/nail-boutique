import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Col1 = styled.div`
  width: 65%;
  padding: 0 3rem;
  margin-top: 4rem;
`;
export const Col2 = styled.div`
  width: 32.5%;
  img {
    max-width: 100%;
  }
`;
export const LocationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 4.9rem;

  h1 {
    font-size: 3.2rem;
  }
  p {
    font-size: 1.4rem;
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
    height: 4.3rem;
    width: 4.3rem;
    background: ${({ theme }) => theme.colors.secondary6};
    border: 1px ${({ theme }) => theme.colors.secondary4} solid;
    margin-right: 4rem;
    border-radius: 0.7rem;
  }
`;
export const Contents = styled.div`
  padding: 4rem 0 4rem 4rem;
  width: 85%;
  h4 {
    font-size: 2.6rem;
  }
  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.secondary7};
  }
`;
