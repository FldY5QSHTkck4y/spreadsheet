import React from 'react';
import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return <StyledButton
    type="button"
    onClick={onClick}
    primary={primary}
    disabled={disabled}
    size={size}
    {...props}
  >
    {text}
  </StyledButton>
};

export default Button;
