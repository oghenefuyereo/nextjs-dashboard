import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (credentials?.email === "test@test.com" && credentials.password === "123456") {
          return { id: "1", name: "Test User", email: "test@test.com" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", 
    error: "/login",  
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
