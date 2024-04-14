import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

export const handler = NextAuth({
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
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };
