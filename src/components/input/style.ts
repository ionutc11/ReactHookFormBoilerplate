import styled from "styled-components";

const HeaderContainerd = styled.div`
  display: flex;
`;

const RemoveButton = styled.button`
  align-self: center;
  margin-left: auto;
  width: 2rem;

  background-color: #ec76ec;
  color: #fff;
  padding: 0.2rem;
  cursor: pointer;

  border-radius: 0.5rem;
  border: none;
  transition: all 0.3s;

  &:active {
    transform: translateY(3px) scale(0.9);
  }
`;

const ErrorContainer = styled.div`
  height: 1.1rem;
  p {
    position: absolute;
    width: max-content;
    font-size: 0.7rem;
    color: red;
  }
`;

const InputContainer = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || "auto"};
`;

const CustomInput = styled.input`
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 1.8rem;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.8rem;
  padding-left: 0.75rem;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  &:focus {
    outline: none;
    border-color: #9b3aff;
  }
`;

const CustomSelectInput = styled.select`
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 1.8rem;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.8rem;
  padding-left: 0.75rem;

  option {
    .placeholder {
      font-weight: 700;
    }
  }

  &:focus {
    outline: none;
    border-color: #9b3aff;
  }
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.5rem;
  transition: all 0.3s;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);

  &:hover {
    color: #9b3aff;
  }
`;

export {
  CustomInput,
  ErrorContainer,
  HeaderContainerd,
  InputContainer,
  Label,
  RemoveButton,
  CustomSelectInput,
};
