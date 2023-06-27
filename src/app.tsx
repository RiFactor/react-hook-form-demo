import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export interface IProps {}

const App: FC<IProps> = props => {
  const {} = props;

  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<any> = data => {
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
