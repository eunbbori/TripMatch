import React from "react";
import {
  Div,
  Input,
  Label,
  RadioAndCheckBoxInput,
  RadioAndCheckBoxLabel,
  RadioAndCheckBoxDiv,
} from "./AppInputStyle";

interface RadioAndCheckBox {
  value: string;
  htmlValue: string;
}
interface AppInputProps {
  label: string;
  type: string;
  inputWidth?: string;
  placeholder?: string;
  className: string;
  radioAndCheckBoxList?: RadioAndCheckBox[];
}

const AppInput: React.FC<AppInputProps> = ({
  label,
  type,
  inputWidth,
  radioAndCheckBoxList,
  className,
  placeholder,
}) => {
  if (type === "radio" || type === "checkbox") {
    return (
      <Div>
        {label && <Label htmlFor={className}>{label}</Label>}
        {radioAndCheckBoxList?.map((object) => (
          <RadioAndCheckBoxDiv key={object.htmlValue}>
            <RadioAndCheckBoxInput
              type={type}
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
  } else {
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
  }
};

export default AppInput;
