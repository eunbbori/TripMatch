import React, { useState } from "react";

import {
  Div,
  Input,
  Label,
  RadioAndCheckBoxInput,
  RadioAndCheckBoxLabel,
  RadioAndCheckBoxDiv,
  FileInput,
  FileUploadName,
  FileUploadLabel,
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
  accept?: string;
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
  const [imageUploaded, setImageUploaded] = useState<string>();

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
  } else if (type === "file") {
    const imageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      const fileName = event.target.value;
      setImageUploaded(fileName);
    };
    return (
      <Div>
        {label && <Label htmlFor={className}>{label}</Label>}
        <FileInput
          id="file"
          type={type}
          placeholder={placeholder}
          className={className}
          accept="image/jpg,image.png,image/jpeg"
          onChange={imageHandler}
        />
        <FileUploadName
          className="uploadName"
          placeholder="jpg,png,jpeg 이미지"
          value={imageUploaded}
        />
        <FileUploadLabel htmlFor="file">업로드</FileUploadLabel>
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
