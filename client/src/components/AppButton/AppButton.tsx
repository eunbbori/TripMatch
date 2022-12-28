import React from "react";
import { Button } from "./AppButtonStyle";

export interface AppButtonProps {
  width: string;
  text?: React.ReactNode;
  className: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AppButton: React.FC<AppButtonProps> = ({
  width,
  text,
  className,
  onClick,
  type,
}) => {
  return (
    <Button className={className} onClick={onClick} width={width} type={type}>
      {text}
    </Button>
  );
};

export default AppButton;
