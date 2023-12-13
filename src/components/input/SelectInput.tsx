import React, { useMemo, ChangeEvent } from "react";
import { FieldValues, Control, useController } from "react-hook-form";

import {
  CustomSelectInput,
  ErrorContainer,
  HeaderContainerd,
  InputContainer,
  Label,
  RemoveButton,
} from "./style";

interface Option {
  value: string | number;
  label: string | number;
}

interface IInput {
  control: Control<FieldValues, unknown>;
  options: Option[];
  name: string;
  validation?: (
    name: string,
    currentFieldValue: string | number,
    allFieldsValues?: Record<string, string | number>
  ) => boolean | string;
  sideChangeEffect?: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  removeField?: () => void;
  label?: string;
  required?: boolean;
  placeholder?: string;
}

const SelectInput = ({
  control,
  name,
  required,
  validation,
  label,
  sideChangeEffect,
  removeField,
  options,
  placeholder,
}: IInput) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules: {
      required: required ? "Input is required" : false,
      validate: (currentFieldValue, allFieldsValues) => {
        return validation
          ? validation(name, currentFieldValue, allFieldsValues)
          : true;
      },
    },
  });
  const elementId: string = useMemo(() => `${name}-select-id`, [name]);

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    sideChangeEffect?.(event);
    field.onChange(event);
  };

  return (
    <InputContainer width="100%">
      <HeaderContainerd>
        {label && <Label htmlFor={elementId}>{label}</Label>}
        {removeField && (
          <RemoveButton type="button" onClick={removeField}>
            -
          </RemoveButton>
        )}
      </HeaderContainerd>
      <CustomSelectInput
        onChange={onChange}
        onBlur={field.onBlur}
        value={field.value}
        name={field.name}
        ref={field.ref}
        id={elementId}
      >
        <option className="placeholder" value="" disabled>
          {placeholder ?? "Select an option"}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </CustomSelectInput>

      <ErrorContainer>
        {fieldState.error && <p>{fieldState.error.message}</p>}
      </ErrorContainer>
    </InputContainer>
  );
};

export default SelectInput;
