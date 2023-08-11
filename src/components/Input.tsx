import React, { ChangeEvent } from "react";
import styled from "styled-components";

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: boolean;
}

const InputField = styled.input<InputProps>`
  height: 3rem;
  width: 15rem;
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 1rem;
  border: ${(props) => (props.error ? "2px solid red" : "2px solid #ccc")};
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.25rem;
`;

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  className,
  error,
}) => {
  return (
    <div className={className}>
      <InputLabel htmlFor={name}>{label}:</InputLabel>
      <InputField
        label={label}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
      />
    </div>
  );
};

export default Input;
