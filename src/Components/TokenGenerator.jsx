import React from "react";
import useTokenForm from "../utils/useTokenForm";

const TokenGenerator = () => {
  const { values, handleChange, resetForm } = useTokenForm({
    blueTokenNum: 0,
    bluePrefix: "",
    bluePerRow: 0,
    redTokenNum: 0,
    redPrefix: "",
    redPerRow: 0,
  });
  return (<div></div>);
};

export default TokenGenerator;
