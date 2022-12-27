import React, { useState } from "react";
import { AppInputProps } from "../../type/input";
import {
  Div,
  Label,
  FileInput,
  FileUploadName,
  FileUploadLabel,
} from "./AppInputFileStyle";

const AppInputFile: React.FC<AppInputProps> = ({ label, refer, className }) => {
  const [imageUploaded, setImageUploaded] = useState<File>();

  const imageHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];
    setImageUploaded(file);
  };

  return (
    <Div>
      {<Label htmlFor={className}>{label}</Label>}
      <FileInput
        id="file"
        type="file"
        ref={refer}
        onChange={imageHandler}
        className={className}
        accept="image/jpg,image.png,image/jpeg"
      />
      <FileUploadName
        readOnly
        className="uploadName"
        placeholder="jpg,png,jpeg"
        defaultValue={imageUploaded?.name}
        onClick={() => {
          document.getElementById("file")?.click();
        }}
      />
      <FileUploadLabel htmlFor="file">업로드</FileUploadLabel>
    </Div>
  );
};

export default AppInputFile;
