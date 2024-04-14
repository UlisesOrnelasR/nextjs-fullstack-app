"use client";
import { useForm } from "react-hook-form";
import { Button, Card, Input, Label } from "@/components/ui";
import { registerSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  });

  return (
    <Card>
      <form onSubmit={onSubmit} className="flex flex-col gap-y-2">
        <h3 className="text-2xl font-bold text-center mb-4">SignUp</h3>
        <Label>Name</Label>
        <Input type="text" placeholder="Name" {...register("name")} />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <Label>LastName</Label>
        <Input type="text" placeholder="LastName" {...register("lastname")} />
        {errors.lastname && (
          <p className="text-red-500">{errors.lastname.message}</p>
        )}
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
          SignUp
        </Button>
      </form>
    </Card>
  );
};

export default RegisterForm;
