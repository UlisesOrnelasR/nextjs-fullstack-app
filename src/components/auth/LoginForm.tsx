"use client";
import { useForm } from "react-hook-form";
import { Button, Card, Input, Label } from "@/components/ui";
import { loginSchema } from "@/app/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Card>
      <form onSubmit={onSubmit} className="flex flex-col gap-y-2">
        <h3 className="text-2xl font-bold text-center mb-4">Login</h3>
        <Label>Email</Label>
        <Input type="emil" placeholder="Email" {...register("email")} />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <Button type="submit" className="block mt-2 w-full">
          Login
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
