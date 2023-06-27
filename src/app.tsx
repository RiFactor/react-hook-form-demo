import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface IProps {}

type TField = {
  firstName: string;
  lastName: string;
};

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required()
  })
  .required();

const App: FC<IProps> = props => {
  const {} = props;

  const { register, handleSubmit } = useForm<TField>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<TField> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("firstName")}></input>
      <input type="text" {...register("lastName")}></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
