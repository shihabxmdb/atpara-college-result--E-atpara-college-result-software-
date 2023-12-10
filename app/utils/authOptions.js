// utils/authOptions.js
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/models/user";
import bcrypt from "bcrypt";
import dbConnect from "@/app/utils/dbConnect";
export const authOptions = {
  session: {
    strategy: "jwt",
  },
  // authOptions
  callbacks: {
    // ...
    // add user profile/role to token and session
    jwt: async ({ token, user }) => {
      console.log("token=>", token);
      const userByEmail = await User.findOne({ email: token.email });
      userByEmail.password = undefined;
      token.user = userByEmail;
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        dbConnect();
        const { email, password } = credentials;
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("Invalid email or password");
        }
        // If the user has no password (i.e., they signed up via a social network), throw an error
        if (!user?.password) {
          throw new Error("Please login via the method you used to sign up");
        }
        const isPasswordMatched = await bcrypt.compare(
          password,
          user?.password
        );
        if (!isPasswordMatched) {
          throw new Error("Invalid email or password");
        }
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
