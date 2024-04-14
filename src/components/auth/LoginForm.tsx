"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button, Card, Input, Label } from "@/components/ui";
import { loginSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    setError("");

    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!result?.ok) {
      setError(result?.error);
      return;
    }
    router.push("/dashboard");
    router.refresh();
  });

  return (
    <Card>
      {error && (
        <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          {error}
        </p>
      )}
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
