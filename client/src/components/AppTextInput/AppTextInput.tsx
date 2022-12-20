import React from "react";
import { Div, Input, Label } from "./AppTextInputStyle";

interface AppTextInputProps {
  label: string;
  type: string;
  inputWidth: string;
  placeholder: string;
  className: string;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  label,
  type,
  inputWidth,
  className,
  placeholder,
}) => {
  return (
    <Div>
      {label && <Label htmlFor={className}>{label}</Label>}
      <Input
        type={type}
        width={inputWidth}
        placeholder={placeholder}
        className={className}
      />
    </Div>
  );
};

export default AppTextInput;
