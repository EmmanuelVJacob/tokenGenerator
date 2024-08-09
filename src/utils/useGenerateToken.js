import { useState } from "react";

const useGenerateToken = (values) => {
  const [bluetokens, setBlueTokens] = useState([]);
  const [redtokens, setRedTokens] = useState([]);

  const generateTokens = () => {
    const generatedBlueTokens = [];

    for (let i = 1; i <= values.blueTokens; i++) {
      generatedBlueTokens.push(`${values.bluePrefix}${i}`);
    }

    const generatedRedTokens = [];

    for (let i = 1; i <= values.redTokens; i++) {
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
  };
};

export default useGenerateToken;
