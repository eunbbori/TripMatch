import React, { useState } from "react";
import { AppInputProps } from "../../type/input";
import {
  Div,
  Label,
  FileInput,
  FileUploadName,
  FileUploadLabel,
} from "./AppInputFileStyle";

const AppInputFile: React.FC<AppInputProps> = ({ label, className }) => {
  const [imageUploaded, setImageUploaded] = useState<string>();
  const imageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileName = event.target.value;
    setImageUploaded(fileName);
  };
  return (
    <Div>
      {<Label htmlFor={className}>{label}</Label>}
      <FileInput
        id="file"
        type="file"
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
};

export default AppInputFile;
