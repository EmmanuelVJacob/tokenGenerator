import React, { useEffect, useState } from "react";

const Tokens = ({ Tokens, values, color }) => {
  const [totalColumns, setTotalColumns] = useState(0);

  useEffect(() => {
    let rows = 0;
    if (color === "Blue") {
      setTotalColumns(values?.bluePerRow);
    } else if (color === "Red") {
      setTotalColumns(values?.redPerRow);
    }
  }, [Tokens]);

  const getColor = () => {
    return color === "Blue" ? "bg-blue-400" : "bg-red-500";
  };

  const gridTemplateColumns = `repeat(${totalColumns}, minmax(0, 1fr))`;

  return (
    <div
    style={{ display: "grid", gridTemplateColumns,gap:4 }}
    className={`p-7`}
  >
      {Tokens &&
        Tokens.map((token, index) => (
          <div
            key={index}
            className={`flex items-center justify-center border border-gray-300 rounded-lg text-white p-2 sm:text-sm ${getColor()}`}
          >
            {token}
          </div>
        ))}
    </div>
  );
};

export default Tokens;
