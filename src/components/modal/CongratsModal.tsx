import styled from "styled-components";
import { Button } from "../style";

const CongratsModal = ({ close }: { close: () => void }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <h1>Congratulations!</h1>
        <h3>You made it!</h3>
        <p>Thank you for looking at this boilerplate for multi-step form</p>
        <div>
          <Button type="button" onClick={close}>
            Close
          </Button>
        </div>
      </ModalContent>
    </ModalContainer>
  );
};

const ModalContent = styled.div`
  width: 30%;
  min-width: 25rem;
  height: auto;
  background: rgba(255, 250, 250, 0.9);
  border-radius: 0.5rem;
  padding: 1rem;
  h1,
  h3 {
    text-align: center;
  }
  p {
    font-size: 0.8rem;
    margin: 0.5rem;
  }
  div {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.5);
`;

export default CongratsModal;
