import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

export const authOptions = {
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      authorize: async function (credentials) {
        const mongo_client = await connectToDatabase();
        const db = mongo_client
          .db(process.env.DATABASE_NAME)
          .collection("users");

        const user = await db.findOne({
          email_address: credentials.email_address,
        });
        if (!user) {
          mongo_client.close();
          throw new Error("Authentication Failed due to bad credentials");
        }

        if (!(await verifyPassword(credentials.password, user.password))) {
          mongo_client.close();
          throw new Error("Authentication Failed due to bad credentials");
        }

        mongo_client.close();
        return {
          email: credentials.email_address,
          createdAt: user.createdAt,
          logs: user.logs,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true,
  },
};

export default NextAuth(authOptions);
