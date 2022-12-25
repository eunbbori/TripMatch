import React from "react";
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
}

const AppInputRadioCheck: React.FC<AppInputProps> = ({
  label,
  type,
  onChange,
  radioAndCheckBoxList,
  className,
}) => {
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
