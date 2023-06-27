import { ErrorMessage } from "@hookform/error-message";
import React, { FC, useEffect, useId } from "react";
import { UseFormRegister, UseFormRegisterReturn, useFormContext } from "react-hook-form";

export interface IProps
  extends Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    keyof UseFormRegisterReturn | "id"
  > {
  name: string;
  label: string;
}

const Input: FC<IProps> = props => {
  const { label, name, ...rest } = props;

  const methods = useFormContext();

  const uid = useId();

  useEffect(() => {
    return () => methods.unregister(name);
  }, [name]); // don't have methods in the dependency array

  return (
    <div>
      <label htmlFor="">{label}</label>
      <input {...methods.register(name)} {...rest} />
      <ErrorMessage errors={methods.formState.errors} name={name} render={({ message }) => <p>{message}</p>} />
    </div>
  );
};

export default Input;
