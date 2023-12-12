import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from '../auth.config';

//import { User } from "./lib/models";
import bcrypt from 'bcryptjs';
import { User } from './lib/models';
import { connectToDB } from './lib/utils';
 
const login = async (credentials) => {
    try {
      connectToDB();
      const user = await User.findOne({ username: credentials.username });
  
      if (!user || !user.isAdmin) throw new Error("Wrong credentials!");
  
      const isPasswordCorrect = await bcrypt.compare(
        credentials.password,
        user.password
      );
  
      if (!isPasswordCorrect) throw new Error("Wrong credentials!");
  
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to login!");
    }
  };
 
  export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
        async authorize(credentials) {
          try {
            const user = await login(credentials);
            return user;
          } catch (err) {
            return null;
          }
        },
      }),
    ],
    // ADD ADDITIONAL INFORMATION TO SESSION
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.username = user.username;
          token.img = user.img;
        }
        return token;
      },
      async session({ session, token }) {
        if (token) {
          session.user.username = token.username;
          session.user.img = token.img;
        }
        return session;
      },
    },
  });