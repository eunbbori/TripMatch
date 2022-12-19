import React from "react";
import { Div, Input, Label } from "./AppTextInputStyle";

interface AppTextInputProps {
  label: string;
  placeholder: string;
  className: string;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  label,
  className,
  placeholder,
}) => {
  return (
    <Div>
      {label && <Label htmlFor={className}>{label}</Label>}
      <Input placeholder={placeholder} className={className}></Input>
    </Div>
  );
};

export default AppTextInput;
