import React from "react";
import { UnstyledButtonProps } from "./types";

const UnstyledButton: React.FC<UnstyledButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button className="bg-none border-none p-0 cursor-pointer outline-none" {...props}>
      {children}
    </button>
  );
};

export default UnstyledButton;
