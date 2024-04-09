"use client";
import { useForm } from "react-hook-form";
import { Button, Input, Label } from "@/components/ui";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>Email</Label>
      <Input
        type="emil"
        placeholder="Email"
        {...register("email", {
          required: true,
        })}
      />
      <Label>Password</Label>
      <Input
        type="password"
        placeholder="password"
        {...register("password", {
          required: true,
        })}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
