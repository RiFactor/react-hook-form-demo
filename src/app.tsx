import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "./yup.config";
import { ErrorMessage } from "@hookform/error-message";
import Form from "./form";
import Input from "./input";

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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" {...register("firstName")}></Input>
      <ErrorMessage errors={formState.errors} name="firstName" render={({ message }) => <p>{message}</p>} />
      <Input type="text" {...register("lastName")}></Input>
      <ErrorMessage errors={formState.errors} name="firstName" render={({ message }) => <p>{message}</p>} />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default App;
