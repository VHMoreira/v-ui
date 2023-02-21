import React from "react";
import ButtonProps from "../../types/Button";
import { StyledButton } from "./styles";

const Button: React.FC<ButtonProps> = ({
  outlined,
  color,
  disabled,
  text,
  fullWidth,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      color={color}
      disabled={disabled}
      outlined={outlined}
      fullWidth={fullWidth}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
