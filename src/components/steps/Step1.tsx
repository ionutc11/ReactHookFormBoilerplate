import Input from "../input/Input";
import { firstNameV } from "../../validation";
import { Disclaimer } from "./styles";
import { useFormContext } from "react-hook-form";

export default function Step1() {
  const { control } = useFormContext();

  return (
    <div>
      <Disclaimer>
        <h1>Personal details</h1>
        <p>First name, last name, and email (optional)</p>
      </Disclaimer>
      <Input
        control={control}
        name={"firstName"}
        label={"First Name"}
        type={"text"}
        placeholder="First legal name"
        validation={firstNameV}
        required
      />
      <Input
        control={control}
        name={"lastName"}
        label={"Last Name"}
        validation={firstNameV}
        placeholder="Last legal name"
        type={"text"}
        required
      />
      <Input
        control={control}
        name={"email"}
        label={"Email"}
        placeholder="Personal email"
        type={"email"}
      />
    </div>
  );
}
