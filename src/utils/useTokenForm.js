import { useState } from "react";

const useTokenForm = () => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetForm,
  };
};

export default useTokenForm;
