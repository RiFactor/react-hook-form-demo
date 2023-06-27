import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface IProps {}

type TField = {
  firstName: string;
  lastName: string;
};

// type TField = yup.InferType<typeof schema>; // can infer if no TS error

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required()
  })
  .required(); // if undefined?

const App: FC<IProps> = props => {
  const {} = props;

  const { register, handleSubmit, formState } = useForm<TField>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<TField> = data => {
    console.log(data);
  };

  console.log(formState.errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("firstName")}></input>
      {formState.errors.firstName && <p>{formState.errors.firstName.message}</p>}
      <input type="text" {...register("lastName")}></input>
      {formState.errors.lastName && <p>{formState.errors.lastName.message}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
