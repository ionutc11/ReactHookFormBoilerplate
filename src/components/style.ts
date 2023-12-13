import styled from "styled-components";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  flex: 1;
  width: 100%;
`;

const CustomForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.6rem;
  height: 25rem;

  padding: 1rem;
  width: fit-content;
  width: 30rem;
  margin: 0 auto;
  background: rgba(255, 250, 250, 0.9);
  border-radius: 0.5rem;

  @media only screen and (max-width: 670px) {
    width: 27rem;
  }
`;

const Button = styled.button`
  background-color: #9b3aff;
  color: #fff;
  padding: 0.8rem;
  cursor: pointer;

  align-self: end;

  width: 7rem;
  border-radius: 0.5rem;
  border: none;
  transition: all 0.3s;

  &:active {
    transform: translateY(3px) scale(0.9);
  }
`;

const StepContainer = styled.ul`
  list-style: none;
  background: rgba(255, 250, 250, 0.6);
  border-radius: 0.5rem;
  padding: 1rem;

  //Media query with low specifity selectors (reason for using !important)
  //Only media query responsible for responsive design for the stepper
  @media only screen and (max-width: 670px) {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
      margin: 0;
    }

    div {
      margin: 0 0.5rem !important;

      span {
        height: 0.3rem !important;
        width: 6rem !important;
        left: 100% !important;
      }
    }
  }

  .active {
    li {
      font-weight: bold;
      background: #ec76ec;
      color: purple;
    }

    span {
      background-color: #ec76ec;
    }
  }

  div {
    position: relative;
    margin: 2rem 0;

    li {
      position: relative;
      font-size: 1rem;
      font-weight: bold;
      z-index: 10;

      color: #fff;
      background: rgba(134, 3, 134, 1);

      text-align: center;
      width: 4rem;
      height: 4rem;
      padding: 1.5rem;
      border-radius: 50%;

      cursor: pointer;
    }

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      width: 0.3rem;
      height: 10rem;
      background: rgba(134, 3, 134, 1);
      transform: translate(-50%, -20%);
    }

    &:first-child {
      margin-top: 0.5rem;
    }

    &:last-child {
      margin-bottom: 0.5rem;

      span {
        display: none;
      }
    }
  }
`;

const StepsError = styled.div`
  height: 1.5rem;
  width: 100%;
  text-align: end;
  font-size: 0.8rem;
  bottom: 0;

  color: red;
`;

export { Button, ButtonsContainer, CustomForm, StepContainer, StepsError };
