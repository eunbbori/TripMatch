import React from "react";
import { AppInputProps } from "../../type/input";
import { Div, Label, Input } from "./AppInputTextStyle";

const AppInputText: React.FC<AppInputProps> = ({
  label,
  type,
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
        width={inputWidth}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    </Div>
  );
};

export default AppInputText;
