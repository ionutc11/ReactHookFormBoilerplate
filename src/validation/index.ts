const firstNameV = (
  _fieldName: string,
  currentFieldValue: string | number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _allFieldsValues?: Record<string, string | number>
): boolean | string => {
  if (!currentFieldValue || typeof currentFieldValue !== "string") {
    return `Type should be text`;
  }

  if (currentFieldValue.length < 3) {
    return "Minimum length is 4 characters";
  }

  return true;
};

const ssnV = (
  _fieldName: string,
  currentFieldValue: string | number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _allFieldsValues?: Record<string, string | number>
): boolean | string => {
  if (!currentFieldValue || (typeof currentFieldValue !== "number" && typeof +currentFieldValue !== "number")) {
    return `Type should be number`;
  }

  if (currentFieldValue.toString().length !== 5) {
    return "SSN should have 5 digits.";
  }

  return true;
};

const phoneV = (
  _fieldName: string,
  currentFieldValue: string | number,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _allFieldsValues?: Record<string, string | number>
): boolean | string => {
  if (!currentFieldValue) {
    return `Insert the phone number`;
  }

  if (currentFieldValue.toString().length !== 10) {
    return "Phone number should have 10 digits.";
  }

  const onlyDigitsPattern = /^\d+$/;

  if(!onlyDigitsPattern.test(currentFieldValue.toString())){
    return "Only digits allowed!"
  }
  

  return true;
};
export { firstNameV, ssnV, phoneV };
