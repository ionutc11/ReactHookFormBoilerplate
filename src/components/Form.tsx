import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { useState } from "react";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import { Button, ButtonsContainer, CustomForm, StepsError } from "./style";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import CongratsModal from "./modal/CongratsModal";

interface IForm {
  step: number;
  setStep: (step: number | ((prevState: number) => number)) => void;
}

interface Card {
  number: string;
  type: string;
}

export interface FormValues {
  address: string;
  phone: string;
  firstName: string;
  lastName: string;
  ssn: number;
  email: string;
  country?: string;
  countryCode?: string;
  cards: Card[];
}

const Form = ({ step, setStep }: IForm) => {
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [stepsNotFilled, setStepsNotFilled] = useState(false);
  const defaultVals = {
    address: "",
    cards: [{ number: "", type: "" }],
    firstName: "",
    lastName: "",
    phone: "",
    ssn: 0,
    country: "",
    countryCode: "",
    email: "",
  };

  const methods = useForm<FormValues>({
    mode: "onChange",
    defaultValues: defaultVals,
  });

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    if (step < 4) {
      setStepsNotFilled(false);
      setStep(step + 1);
      return;
    }

    if (!methods.formState.isValid) {
      setStepsNotFilled(true);
      return;
    }
    setShowCongratsModal(true);
    console.log("SUBMITTTED", data);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        <Step1 />;
    }
  };

  const goBack = () => {
    if (step - 1 < 1) {
      return;
    }

    setStep(step - 1);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <CustomForm onSubmit={methods.handleSubmit(onSubmit)}>
          {renderStep()}
          <div style={{ alignSelf: "flex-end", marginTop: "auto" }}>
            <StepsError>
              {stepsNotFilled && "Please fill all steps properly"}
            </StepsError>
            <ButtonsContainer>
              {step !== 1 && (
                <Button type="button" onClick={goBack}>
                  Back &larr;
                </Button>
              )}
              <Button type="submit">
                {step === 4 ? "Submit" : "Next"} &rarr;
              </Button>
            </ButtonsContainer>
          </div>
        </CustomForm>
        {showCongratsModal && (
          <CongratsModal close={() => setShowCongratsModal(false)} />
        )}
      </FormProvider>
    </div>
  );
};

export default Form;
