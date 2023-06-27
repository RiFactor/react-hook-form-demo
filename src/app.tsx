import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "./yup.config";
import Form from "./form";
import Input from "./input";

export interface IProps {}

type TField = {
  firstName: string;
  lastName: string;
  shouldDisplay: boolean;
  age: number;
};

// type TField = yup.InferType<typeof schema>; // can infer if no TS error

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    shouldDisplay: yup.boolean().required(),
    age: yup.number().required()
  })
  .required(); // if undefined?

const App: FC<IProps> = props => {
  const {} = props;

  const methods = useForm<TField>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<TField> = data => {
    console.log(data);
  };

  // console.log(methods.formState.errors);

  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <Input type="text" name="firstName"></Input>
      <Input type="text" name="lastName"></Input>
      <Input name="age" type="number" />
      <Input name="shouldDisplay" type="checkbox" />

      <button type="submit">Submit</button>
    </Form>
  );
};

export default App;
