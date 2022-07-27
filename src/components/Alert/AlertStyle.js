import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

export const AlertStyle = styled.div`
  position: fixed;
  width: 32rem;
  top: 7rem;
  right: 2rem;
  z-index: 100000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(90deg, #f5d061 -1.65%, #e48f04 100%);
  color: #000;
  border-radius: 0.5rem;
  animation: slideIn 2s ease-in;

  @media (max-width: 500px) {
    width: 30rem;
  }

  @media (max-width: 340px) {
    width: 95%;
    right: 0.5rem;
  }

  @keyframes slideIn {
    0% {
      transform: translateX(500px);
      opacity: 0;
    }

    65% {
      transform: translateX(1px);
      opacity: 1;
    }
    70% {
      transform: translateX(-1px);
    }
    75% {
      transform: translateX(1px);
    }
    90% {
      transform: translateX(0);
    }
    100% {
      transform: translate(0);
    }
  }

  p {
    display: flex;
    align-items: center;
    font-size: clamp(1.4rem, 3vw, 1.5rem);
    padding: 2rem 0.5rem;
    gap: 1.3rem;

    @media (max-width: 500px) {
      padding: 1.5rem 0.5rem;
    }

    @media (max-width: 340px) {
      padding: 1rem 0.5rem;
    }
  }
`;

export const Tick = styled(FaCheckCircle)`
  display: ${({ display }) => display || "block"};
  font-size: 2.5rem;
`;
