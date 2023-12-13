import { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";

import Input from "../input/Input";
import { ssnV, phoneV } from "../../validation";
import { Disclaimer, FlexContainer } from "./styles";

export default function Step1() {
  const { control, setValue } = useFormContext();

  const setCountryCode = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (!value || value.length < 3) {
      return;
    }

    setValue("countryCode", value.slice(0, 2).toUpperCase());
  };

  return (
    <div>
      <Disclaimer>
        <h1>Sensible details</h1>
        <p>Social security no, phone no, living area</p>
      </Disclaimer>
      <FlexContainer>
        <div>
          <Input
            control={control}
            name={"ssn"}
            label={"Social Security Number"}
            type={"number"}
            placeholder="SSN"
            validation={ssnV}
            required
          />
          <Input
            control={control}
            name={"phone"}
            label={"Phone"}
            type={"string"}
            placeholder="Phone number"
            validation={phoneV}
            required
          />
        </div>
        <div>
          <Input
            control={control}
            name={"address"}
            label={"Living area"}
            type={"string"}
            placeholder="Address"
            required
          />
          <Input
            control={control}
            name={"country"}
            type={"string"}
            sideChangeEffect={setCountryCode}
            placeholder="Country"
          />
          <Input
            control={control}
            name={"countryCode"}
            type={"string"}
            placeholder="Country Code"
            readOnly
          />
        </div>
      </FlexContainer>
    </div>
  );
}
