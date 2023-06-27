import React, { FC } from "react";

export interface IProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input: FC<IProps> = props => {
  const { ...rest } = props;
  return <input {...rest} />;
};

export default Input;
