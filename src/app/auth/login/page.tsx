import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
  openGraph: {
    title: "Login",
  },
};

const LoginPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
