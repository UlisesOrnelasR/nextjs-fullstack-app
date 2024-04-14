import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const userFound = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        console.log(userFound);

        if (!userFound) {
          throw new Error("User not found");
        }

        const matchPassword = await bcrypt.compare(
          password,
          userFound.password
        );

        if (!matchPassword) {
          throw new Error("Invalid password");
        }

        return {
          id: userFound.id,
          name: userFound?.name,
          email: userFound?.email,
          last_name: userFound?.last_name,
          role: userFound?.role,
          confirmed_email: userFound?.confirmed_email,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token = { ...token, ...user };
      }

      return token;
    },
    async session({ session, token }) {
      // console.log("session", session);
      // console.log("user", user);
      console.log("token", token);
      if (token) {
        session.user = {
          ...session.user,
          ...token,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};
