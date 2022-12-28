import React from "react";
import { AppInputProps } from "../../type/input";
import { Div, Label, Input } from "./AppInputTextStyle";

const AppInputText: React.FC<AppInputProps> = ({
  label,
  required,
  type,
  defaultValue,
  inputWidth,
  className,
  placeholder,
  refer,
  onChange,
}) => {
  return (
    <Div>
      {<Label htmlFor={className}>{label}</Label>}
      <Input
        ref={refer}
        type={type}
        defaultValue={defaultValue}
        width={inputWidth}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        required={required}
      />
    </Div>
  );
};

export default AppInputText;
