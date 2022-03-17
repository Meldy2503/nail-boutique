import styled from "styled-components";

// export const TechnicianContainer = styled.div`
//   overflow: scroll;
//   height: 60%;
// `;
export const Row2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 3rem; */
  position: sticky;
  top: 3rem;
  height: 6rem;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.primary2};
  padding-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    top: 8rem;
    height: 4rem;
  }
`;
export const Search = styled.div`
  width: 75%;
  position: relative;

  input {
    width: 100%;
    padding: 0.9rem 1.6rem;
    background-color: #1c1c1c;
    border: 1px solid ${({ theme }) => theme.colors.primary6};
    border-radius: 0.4rem;
    color: ${({ theme }) => theme.colors.secondary1};

    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary3};
      outline: none;
      color: ${({ theme }) => theme.colors.secondary1};
      background-color: ${({ theme }) => theme.colors.primary7};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.primary6};
    }
  }

  .search-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    color: ${({ theme }) => theme.colors.primary6};
  }
`;

export const Orientation = styled.div`
  display: flex;
  width: 22%;
  /* justify-content: space-around; */
  /* gap: 1rem; */

  .grid {
    color: #c4c4c4;
    margin-left: 0.7rem;
    font-size: 2rem;
  }
`;

export const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .grid {
    color: ${({ theme }) => theme.colors.secondary2};
    margin-left: 0.7rem;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      background-color: #373737;
    }
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.primary6}; */

  .list {
    color: ${({ theme }) => theme.colors.secondary2};
    margin: 0 1rem;
    font-size: 2.5rem;
    cursor: pointer;

    &:hover {
      background-color: #373737;
    }
  }
`;

export const Row3 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* overflow-y: scroll; */
  /* height: 80vh; */

  /* @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    /* overflow-y: visible; */
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary7};
  margin: 0.5rem 0 2rem 0;
  padding: 2.5rem 1.5rem;
  width: 31.5%;
  border-radius: 1.1rem;
  color: ${({ theme }) => theme.colors.secondary2};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary3};
    color: #000;
  }

  @media (max-width: 1200px) {
    width: 47%;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 43%;
    margin: 1rem auto;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 31%;
  }

  @media (max-width: 650px) {
    width: 45%;
  }

  @media (max-width: 450px) {
    width: 85%;
  }

  .top {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    img {
      max-width: 100%;
    }
  }
`;

export const Technician = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  /* width: 50%; */
  margin: 0 auto;

  img {
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
  }

  h4 {
    margin-top: 0.7rem;
    font-size: 1.3rem;
    font-weight: 600;
    /* color: #cacaca; */
  }

  p {
    margin: 0.1rem 0 1rem 0;
    font-size: 0.8rem;
    font-weight: 400;
    /* color: #8a8a8a; */
    font-style: italic;
  }

  div {
    display: flex;
    margin-bottom: 0.7rem;
    /* justify-content: space-between; */
    align-items: center;
    justify-content: center;
    width: 80%;
    /* margin: 0 auto;
    text-align: center; */

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary3};
      color: #000;
    }

    span {
      display: flex;
      /* width: 48%; */
      /* align-items: center; */

      .icon {
        margin-right: 0.05rem;
        font-size: 1.2rem;
        font-weight: 400;
        /* color: #8a8a8a; */
      }

      .star {
        color: #ffc107;
        margin-left: 1.5rem;
      }
    }
  }
`;

export const Select = styled.button`
  background-color: transparent;
  /* color: ${({ theme }) => theme.colors.secondary2}; */
  color: inherit;
  /* color: #a7a7a7; */

  border: 1px solid ${({ theme }) => theme.colors.secondary2};
  padding: 0.4rem 1.2rem;
  display: inline-block;
  border-radius: 0.5rem;
  /* border: 1px solid #a7a7a7; */
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
  /* width: 10rem; */
  cursor: pointer;
  letter-spacing: 0.3rem;
  margin-bottom: 2rem;

  &:visited {
    background: linear-gradient(90deg, #e48f04 -1.65%, #f5d061 100%);
  }

  &:hover {
    /* border: 1px solid transparent; */
    color: ${({ theme }) => theme.colors.primary1};
    background: linear-gradient(90deg, #f5d061 -1.65%, #e48f04 100%);
    background-repeat: no-repeat;
  }
`;
// export const Row4 = styled.div`
//   margin: 2rem 0;
// `;
