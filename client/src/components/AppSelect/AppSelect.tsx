import React from "react";
import { Div, Select, Label } from "./AppSelectStyle";

interface AppSelectProps {
  label?: string;
  options: string[];
  className: string;
}

const AppSelect: React.FC<AppSelectProps> = ({ label, options, className }) => {
  return (
    <Div>
      {label && <Label htmlFor={className}>{label}</Label>}
      <Select className={className}>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </Div>
  );
};

export default AppSelect;
