import React, { RefObject } from "react";
import { Div, Select, Label } from "./AppSelectStyle";

interface AppSelectProps {
  label?: string;
  options: string[];
  className: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  refer?: RefObject<HTMLSelectElement>;
  defaultValue?: string;
}

const AppSelect: React.FC<AppSelectProps> = ({
  label,
  options,
  className,
  onChange,
  refer,
  defaultValue,
}) => {
  return (
    <Div>
      {label && <Label htmlFor={className}>{label}</Label>}
      <Select
        ref={refer}
        className={className}
        onChange={onChange}
        defaultValue={defaultValue}
      >
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
