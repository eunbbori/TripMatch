import React, { RefObject } from "react";
import { Div, Select, Label } from "./AppSelectStyle";

interface AppSelectProps {
  label?: string;
  options: string[];
  className: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  refer?: RefObject<HTMLSelectElement>;
}

const AppSelect: React.FC<AppSelectProps> = ({
  label,
  options,
  className,
  onChange,
  refer,
}) => {
  return (
    <Div>
      {label && <Label htmlFor={className}>{label}</Label>}
      <Select ref={refer} className={className} onChange={onChange}>
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
