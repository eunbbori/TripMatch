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
      <Input type="date" className="startDatePicker" width={inputWidth} />
      <p>~</p>
      <Input type="date" className="endDatePicker" width={inputWidth} />
    </DateRange>
  );
};

export default AppInputDateRange;
