import { ErrorMessage } from "@hookform/error-message";
import React, { FC } from "react";
import { UseFormRegister, UseFormRegisterReturn, useFormContext } from "react-hook-form";

export interface IProps
  extends Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    keyof UseFormRegisterReturn
  > {
  name: string;
}

const Input: FC<IProps> = props => {
  const { name, ...rest } = props;

  const methods = useFormContext();

  return (
    <div>
      <input {...methods.register(name)} {...rest} />
      <ErrorMessage errors={methods.formState.errors} name={name} render={({ message }) => <p>{message}</p>} />{" "}
    </div>
  );
};

export default Input;
