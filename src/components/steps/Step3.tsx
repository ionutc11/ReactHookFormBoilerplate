import Input from "../input/Input";
import { Disclaimer } from "./styles";
import { useFieldArray, useFormContext } from "react-hook-form";
import { RemoveButton } from "../input/style";
import SelectInput from "../input/SelectInput";

export default function Step3() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "cards",
  });

  return (
    <div>
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <Disclaimer>
          <h1>More info</h1>
          <p>Some field arrays should be here</p>
          <p>
            <b>Hit the + button to add a new card</b>
          </p>
        </Disclaimer>
        <div>
          <RemoveButton
            type="button"
            onClick={() => {
              append({ number: "", type: "" });
            }}
          >
            +
          </RemoveButton>
        </div>
      </div>

      {fields.map((field, index) => (
        <div key={field.id}>
          <Input
            control={control}
            name={`cards.${index}.number`}
            type="text"
            placeholder="Card number"
            label={`Card no. ${index + 1}`}
            removeField={index !== 0 ? () => remove(index) : undefined}
            required
          />
          <SelectInput
            control={control}
            name={`cards.${index}.type`}
            placeholder="Select the card type"
            options={[
              { value: "visa", label: "VISA" },
              { value: "maestro", label: "MAESTRO" },
              { value: "mastercard", label: "MASTERCARD" },
            ]}
          />
        </div>
      ))}
    </div>
  );
}
