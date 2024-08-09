import { useState } from "react";

const useTokenForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    if (name.includes("Prefix")) {
      if (/[^a-zA-Z]/.test(value)) {
        error = "Only letters are allowed.";
      }
    } else if (name.includes("TokenNum") || name.includes("PerRow")) {
      if (!/^\d+$/.test(value)) {
        error = "Only positive integers are allowed.";
      }
    }

    setValues({
      ...values,
      [name]: value.trim(),
    });

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    handleChange,
    resetForm,
    errors,
  };
};

export default useTokenForm;
