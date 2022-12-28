import { RefObject } from "react";
import { RadioAndCheckBox } from "../components/AppInputRadioCheck/AppInputRadioCheck";

export interface AppInputProps {
  defaultValue?: string;
  required?: boolean;
  defaultValues?: string[];
  label?: string;
  type: string;
  inputWidth?: string;
  placeholder?: string;
  accept?: string;
  className: string;
  radioAndCheckBoxList?: RadioAndCheckBox[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  refer?: RefObject<HTMLInputElement>;
  min?: number;
}
