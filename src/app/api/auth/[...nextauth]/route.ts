import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied

        console.log(credentials);
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
});

export { handler as GET, handler as POST };
