import React, { FC, PropsWithChildren } from "react";
import { FieldValues, FormProvider, UseFormReturn, useForm } from "react-hook-form";

export interface IProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  //, PropsWithChildren
  methods: UseFormReturn<any>;
}

const Form: FC<PropsWithChildren<IProps>> = props => {
  const { methods, children, ...rest } = props;

  //   const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form {...rest}>{children}</form>
    </FormProvider>
  );
};

export default Form;
