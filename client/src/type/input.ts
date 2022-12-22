import { RadioAndCheckBox } from "../components/AppInputRadioCheck/AppInputRadioCheck";

export interface AppInputProps {
  label?: string;
  type: string;
  inputWidth?: string;
  placeholder?: string;
  accept?: string;
  className: string;
  radioAndCheckBoxList?: RadioAndCheckBox[];
}
