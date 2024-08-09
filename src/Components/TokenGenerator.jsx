import React from "react";
import useTokenForm from "../utils/useTokenForm";
import useGenerateToken from "../utils/useGenerateToken";

const TokenGenerator = () => {
  const { values, errors, handleChange, resetForm } = useTokenForm({
    blueTokenNum: 0,
    bluePrefix: "",
    bluePerRow: 0,
    redTokenNum: 0,
    redPrefix: "",
    redPerRow: 0,
  });

  const { redTokenNum, blueTokenNum, generateTokens, clearTokens } =
    useGenerateToken(values);

  const handleGenerate = () => {
    generateTokens(values);
  };

  const handleClear = () => {
    resetForm();
    clearTokens();
  };

  return (
    <div className="p-4">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of blue tokens
            </label>
            <input
              type="number"
              id="blueTokenNum"
              name="blueTokenNum"
              placeholder="Number of blue tokens"
              value={values.blueTokenNum}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
            <span className="text-sm text-red-300">{errors.blueTokenNum}</span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Prefix for blue tokens
            </label>
            <input
              type="text"
              id="bluePrefix"
              name="bluePrefix"
              placeholder="Prefix for blue tokens"
              value={values.bluePrefix}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
            <span className="text-sm text-red-300">{errors.bluePrefix}</span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Blue tokens per row
            </label>
            <input
              type="number"
              id="bluePerRow"
              name="bluePerRow"
              placeholder="Blue tokens per row"
              value={values.bluePerRow}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
            <span className="text-sm text-red-300">{errors.bluePerRow}</span>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of red tokens
            </label>
            <input
              type="number"
              id="redTokenNum"
              name="redTokenNum"
              placeholder="Number of red tokens"
              value={values.redTokenNum}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
            <span className="text-sm text-red-300">{errors.redTokenNum}</span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Prefix for red tokens
            </label>
            <input
              type="text"
              id="redPrefix"
              name="redPrefix"
              placeholder="Prefix for red tokens"
              value={values.redPrefix}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
            <span className="text-sm text-red-300">{errors.redPrefix}</span>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Red tokens per row
            </label>
            <input
              type="number"
              id="redPerRow"
              name="redPerRow"
              placeholder="Red tokens per row"
              value={values.redPerRow}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
            <span className="text-sm text-red-300">{errors.redPerRow}</span>
          </div>
        </div>
      </form>
      <div className="flex justify-center mt-4 gap-4">
        <button
          type="button"
          onClick={handleGenerate}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none "
        >
          Generate
        </button>
        <button
          type="button"
          onClick={handleClear}
          className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-600 focus:outline-none"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default TokenGenerator;
