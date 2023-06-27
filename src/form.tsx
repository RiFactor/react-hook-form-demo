import React, { FC, PropsWithChildren } from "react";

export interface IProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  //, PropsWithChildren
}

const Form: FC<PropsWithChildren<IProps>> = props => {
  const { children, ...rest } = props;
  return <form {...rest}>{children}</form>;
};

export default Form;
