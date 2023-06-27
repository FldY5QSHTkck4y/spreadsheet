import React from 'react';
import { StyledText, StyledLabel, StyledMessage, StyledInput } from './Input.styled';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({
  id,
  disabled,
  label,
  message,
  error,
  success,
  onChange,
  placeholder,
  ...props
}) => {
  return <React.Fragment>
    <StyledLabel>
      <StyledText disabled={disabled} error={error}>
        {label}
      </StyledText>
    </StyledLabel>
    <StyledInput
      id={id}
      type="text"
      onChange={onChange}
      disabled={disabled}
      error={error}
      success={success}
      placeholder={placeholder}
      {...props}
    />
    <StyledMessage>
      <StyledText error={error}>{message}</StyledText>
    </StyledMessage>
  </React.Fragment>
}

export default Input;
