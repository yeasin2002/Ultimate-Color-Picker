import React from "react";
import { hexToRgba, hexToHsl } from "@/src/utils/colorConverter";

interface Props extends React.ComponentProps<"div"> {
  title: string;
  hexColor: string;
}

export const ShowColorList = ({ hexColor, title, ...props }: Props) => {
  const rgbColor = hexToRgba(hexColor);
  const hslColor = hexToHsl(hexColor);

  return (
    <div id="new" {...props}>
      <p className="flex items-center justify-between font-bold">
        <span>{title}:</span> <span> {hexColor}</span>
      </p>

      <div className="bg-violet-800 text-white p-2 rounded-md text-nowrap">
        <p> hex: {hexColor}</p>
        <p> {hslColor}</p>
        <p> {rgbColor}</p>
      </div>
    </div>
  );
};
