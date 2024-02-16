// imports
import { prisma } from "@/lib/db";
import NextAuth from "next-auth";

// importing providers
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    signIn: async ({ account, profile }) => {      
      if (!account || !profile) {
        throw new Error("Account and Profile cannot be null");
      }

      const existingUser = await prisma.user.findUnique({
        where: { email: profile.email },
      });

      if (!existingUser) {
        // Create new user with profile data
        await prisma.user.create({
          data: {
            email: profile.email || "",
            name: profile.name,
          },
        });
      }

      return true; // Allow sign in regardless of user creation
    },

    redirect(_params) {
      return "/u";
    },
  },
});

export { handler as GET, handler as POST };
