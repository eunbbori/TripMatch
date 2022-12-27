import React, { useState } from "react";
import { AppInputProps } from "../../type/input";
import {
  Div,
  Label,
  FileInput,
  FileUploadName,
  FileUploadLabel,
  FileImage,
} from "./AppInputFileStyle";

const AppInputFile: React.FC<AppInputProps> = ({
  defaultValue = "",
  label,
  refer,
  className,
}) => {
  const [imagePreview, setImagePreview] = useState<string>(defaultValue);

  const imageHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const reader = new FileReader();
    const file = event.target.files[event.target.files.length - 1];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(String(reader.result));
    };
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
      {!imagePreview && (
        <FileUploadName
          readOnly
          className="uploadName"
          placeholder="jpg,png,jpeg"
          onClick={() => {
            document.getElementById("file")?.click();
          }}
        />
      )}
      {imagePreview && <FileImage src={imagePreview} />}
      <FileUploadLabel htmlFor="file">업로드</FileUploadLabel>
    </Div>
  );
};

export default AppInputFile;
