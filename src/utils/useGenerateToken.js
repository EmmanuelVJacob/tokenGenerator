import { useState } from "react";

const useGenerateToken = (values, errors) => {
  const [bluetokens, setBlueTokens] = useState([]);
  const [redtokens, setRedTokens] = useState([]);
  const [validationError, setValidationError] = useState("");

  const validate = () => {
    setValidationError("");

    if (Object.values(errors).some(error => error !== "")) {
      setValidationError("Please fix the errors before generating tokens.");
      return false;
    }
    
    if (
      values.blueTokenNum <= 0 ||
      values.redTokenNum <= 0 ||
      values.bluePerRow <= 0 ||
      values.redPerRow <= 0
    ) {
      setValidationError("Field values cannot be 0 or negative");
      return false;
    }

    if (!values.bluePrefix || !values.redPrefix) {
      setValidationError("Prefixes cannot be empty");
      return false;
    }

    return true;
  };

  const generateTokens = () => {
    const generatedBlueTokens = [];
    const validation = validate();
    if (!validation) {
      return;
    }
    for (let i = 1; i <= values.blueTokenNum; i++) {
      generatedBlueTokens.push(`${values.bluePrefix}${i}`);
    }

    const generatedRedTokens = [];

    for (let i = 1; i <= values.redTokenNum; i++) {
      generatedRedTokens.push(`${values.redPrefix}${i}`);
    }

    setBlueTokens(generatedBlueTokens);
    setRedTokens(generatedRedTokens);
  };

  const clearTokens = () => {
    setRedTokens([]);
    setBlueTokens([]);
  };

  return {
    redtokens,
    bluetokens,
    generateTokens,
    clearTokens,
    validationError,
  };
};

export default useGenerateToken;
