"use client";
import { useForm } from "react-hook-form";
import { Button, Card, Input, Label } from "@/components/ui";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Card>
      <form onSubmit={onSubmit} className="flex flex-col gap-y-2">
        <h3 className="text-2xl font-bold text-center mb-4">Login</h3>
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
        <Button type="submit" className="block mt-2 w-full">
          Login
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
