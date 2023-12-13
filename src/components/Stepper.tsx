import { StepContainer } from "./style";

interface IStepper {
  step: number;
  setStep: (step: number) => void;
}

const steps = [1, 2, 3, 4];

const Stepper = ({ step, setStep }: IStepper) => {
  const handleStepClick = (step: number) => {
    setStep(step);
  };

  return (
    <StepContainer>
      {steps.map((stp, index) => (
        <div className={stp === step ? "active" : ""} key={`step-${index}`}>
          <li onClick={() => handleStepClick(stp)}>{stp}</li>
          <span />
        </div>
      ))}
    </StepContainer>
  );
};

export default Stepper;
