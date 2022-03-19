import styled from "styled-components";

// export const Title = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 2rem;
//   position: sticky;
//   top: 0;
//   background-color: ${({ theme }) => theme.colors.primary2};

//   h2 {
//     font-size: 2.8rem;
//     font-weight: 600;
//   }

//   div {
//     display: flex;
//     color: #676767;
//     align-items: center;
//     font-size: 2rem;
//   }

//   a {
//     color: #525252;
//     margin-left: 0.2rem;
//     font-size: 1.4rem;
//   }
// `;

export const ServicesContainer = styled.div`
  /* overflow: scroll; */
`;

export const Services = styled.div`
  border: 0.5px solid #555555;
  margin-bottom: 2rem;
  border-radius: 1rem;
`;

export const ServiceType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  div {
    width: 85%;
    h3 {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 0.2rem;
      color: ${({ theme }) => theme.colors.secondary2};

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
      color: #737373;
      font-size: 1.5rem;
    }
  }

  span {
    color: #676767;
    font-size: 3rem;
    font-weight: 100;
  }
`;

export const ServiceContainer = styled.form`
  margin-bottom: 3rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin-bottom: 5rem;
  }
`;

export const FormContainer = styled.form`
  /* height: 10rem;
  overflow: scroll; */
`;

export const FormContents = styled.div`
  border-top: 0.5px solid #555555;
  padding-bottom: 1rem;
  /* height: 10rem; */
`;

export const InputContainer = styled.div`
  display: flex;
  color: #aeaeae;
  padding: 1rem 2rem 0 4.6rem;
  cursor: pointer;
  user-select: none;
  position: relative;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    background-color: transparent;
    border: 1px solid #696969;
    border-radius: 0.3rem;
    height: 1.5rem;
    width: 1.5rem;
    position: absolute;
    top: 1.2rem;
    left: 2.3rem;
  }

  label {
    h5 {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 0.1rem;
    }

    p {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;
