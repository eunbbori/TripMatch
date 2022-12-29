import React, { ChangeEventHandler } from "react";
import {
  RadioAndCheckBoxInput,
  RadioAndCheckBoxLabel,
} from "./AppInputRadioCheckStyle";

export interface RadioAndCheckBox {
  className: string;
  type: string;
  value: string;
  htmlValue: string;
  onClick?: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
}

const AppInputRadioCheck: React.FC<RadioAndCheckBox> = ({
  className,
  type,
  value,
  onClick,
  htmlValue,
  checked,
}) => {
  return (
    <>
      <RadioAndCheckBoxInput
        type={type}
        value={value}
        id={value}
        name={className}
        checked={checked}
        onChange={onClick}
      />
      <RadioAndCheckBoxLabel htmlFor={value}>{htmlValue}</RadioAndCheckBoxLabel>
    </>
  );
};

export default AppInputRadioCheck;
