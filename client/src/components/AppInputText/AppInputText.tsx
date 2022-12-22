import React from "react";
import { AppInputProps } from "../../type/input";
import { Div, Label, Input } from "./AppInputTextStyle";

const AppInputText: React.FC<AppInputProps> = ({
  label,
  type,
  inputWidth,
  className,
  placeholder,
}) => {
  return (
    <Div>
      {<Label htmlFor={className}>{label}</Label>}
      <Input
        type={type}
        width={inputWidth}
        placeholder={placeholder}
        className={className}
      />
    </Div>
  );
};

export default AppInputText;
