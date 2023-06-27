import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "./yup.config";
import Form from "./form";
import Input from "./input";
import mockApi from "./mockAPI";

export interface IProps {}

type TField = {
  firstName: string;
  lastName: string;
  shouldDisplay: boolean;
  age: number;
  location: string | undefined;
};

// type TField = yup.InferType<typeof schema>; // can infer if no TS error

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    shouldDisplay: yup.boolean().required(),
    age: yup.number().required(),
    location: yup.string() // notRequired
  })
  .required(); // if undefined?

const App: FC<IProps> = props => {
  const {} = props;

  const methods = useForm<TField>({
    resolver: yupResolver(schema),
    defaultValues: async () => await mockApi() // ignore error, still works
  });

  const onSubmit: SubmitHandler<TField> = data => {
    console.log(data);
  };

  console.log(methods.formState.isLoading);

  // console.log(methods.formState.errors);

  const shouldDisplay = methods.watch("shouldDisplay"); // true or false

  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <Input type="text" name="firstName" label="First Name"></Input>
      <Input type="text" name="lastName" label="Last Name"></Input>
      <Input name="age" type="number" label="Age" />
      <Input name="shouldDisplay" type="checkbox" label="Add Location" />
      {shouldDisplay && <Input name="location" label="Address" />}

      <button type="submit">Submit</button>
    </Form>
  );
};

export default App;
