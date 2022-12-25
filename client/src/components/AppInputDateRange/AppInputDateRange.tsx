import React from "react";
import { AppInputProps } from "../../type/input";
import { DateRange, Label, Input } from "./AppInputDateRangeStyle";

const AppInputDateRange: React.FC<AppInputProps> = ({
  label,
  inputWidth,
  className,
}) => {
  return (
    <DateRange>
      {<Label htmlFor={className}>{label}</Label>}
      <Input type="date" className="datePicker" width={inputWidth} />
    </DateRange>
  );
};

export default AppInputDateRange;
