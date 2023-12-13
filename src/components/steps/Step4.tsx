import Input from "../input/Input";
import { Disclaimer } from "./styles";
import { useFormContext } from "react-hook-form";

export default function Step4() {
  const { control } = useFormContext();

  return (
    <div>
      <Disclaimer>
        <h1>Last step</h1>
        <p>Here we are going to use date input</p>
        <p>
          <b>Hit the + button to add a new card</b>
        </p>
      </Disclaimer>

      <Input
        control={control}
        name={`date`}
        type="date"
        placeholder="Date"
        label={`Date`}
        required
      />
    </div>
  );
}
