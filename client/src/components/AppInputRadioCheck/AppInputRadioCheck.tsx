import React, { ChangeEvent, useState } from "react";
import { AppInputProps } from "../../type/input";
import {
  Div,
  Label,
  RadioAndCheckBoxDiv,
  RadioAndCheckBoxInput,
  RadioAndCheckBoxLabel,
} from "./AppInputRadioCheckStyle";

export interface RadioAndCheckBox {
  value: string;
  htmlValue: string;
  checked?: boolean;
}

const AppInputRadioCheck: React.FC<AppInputProps> = ({
  label,
  type,
  onChange,
  defaultValue,
  defaultValues,
  radioAndCheckBoxList,
  className,
}) => {
  radioAndCheckBoxList?.map((object) => {
    if (defaultValue && object.value === defaultValue) {
      object.checked = true;
    }
    if (defaultValues && defaultValues.includes(object.value)) {
      object.checked = true;
    }
    return object;
  });
  return (
    <Div>
      {<Label htmlFor={className}>{label}</Label>}
      {radioAndCheckBoxList?.map((object) => (
        <RadioAndCheckBoxDiv key={object.htmlValue}>
          <RadioAndCheckBoxInput
            type={type}
            onChange={onChange}
            value={object.value}
            id={object.value}
            name={className}
            checked={object.checked}
          />
          <RadioAndCheckBoxLabel htmlFor={object.value}>
            {object.htmlValue}
          </RadioAndCheckBoxLabel>
        </RadioAndCheckBoxDiv>
      ))}
    </Div>
  );
};

export default AppInputRadioCheck;
