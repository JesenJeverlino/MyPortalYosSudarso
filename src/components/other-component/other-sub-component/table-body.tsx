import React from "react";

type propsType = {
  values: string[][];
};

export default function TableBody({ values }: propsType) {
  return (
    <>
      <tbody className="text-center font-medium">
        {values.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <hr
              className={`border border-[#5398ff] w-full absolute left-1/2 -translate-x-1/2 ${
                rowIndex === 0 ? "top-8" : ""
              }`}
            />
            <tr>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="pt-5 pb-5">
                  {cell}
                </td>
              ))}
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </>
  );
}
