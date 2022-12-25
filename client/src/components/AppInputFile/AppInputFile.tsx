import React from "react";
import { AppInputProps } from "../../type/input";
import {
  Div,
  Label,
  FileInput,
  FileUploadName,
  FileUploadLabel,
} from "./AppInputFileStyle";

const AppInputFile: React.FC<AppInputProps> = ({
  label,
  defaultValue,
  className,
  onChange,
}) => {
  return (
    <Div>
      {<Label htmlFor={className}>{label}</Label>}
      <FileInput
        id="file"
        type="file"
        onChange={onChange}
        className={className}
        accept="image/jpg,image.png,image/jpeg"
      />
      <FileUploadName
        className="uploadName"
        placeholder="jpg,png,jpeg 이미지"
        defaultValue={defaultValue}
      />
      <FileUploadLabel htmlFor="file">업로드</FileUploadLabel>
    </Div>
  );
};

export default AppInputFile;
