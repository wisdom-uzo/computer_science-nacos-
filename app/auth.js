import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from '../auth.config';

import bcrypt from 'bcryptjs';
import { User } from './lib/models';
import { connectToDB } from './lib/utils';
 
const login = async (credentials) => {
    try {
      connectToDB();
      const user = await User.findOne({ email: credentials.email });
       
       
      //if (!user || !user.isAdmin) throw new Error("email does not exist!");
  
      const isPasswordCorrect = await bcrypt.compare(
        credentials.password,
        user.password
      );
  
      if (!isPasswordCorrect) throw new Error("incorrect password!");
  
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
          token.email = user.email;
          token.fullName = user.fullName;
          token.matricNo = user.matricNo;
          token.level = user.level;
          token.phone = user.phone;
          token.address = user.address;

        }
        return token;
      },
      async session({ session, token }) {
        if (token) {
          session.user = {
            username: token.username,
            email: token.email,
            fullName: token.fullName,
            matricNo: token.matricNo,
            level: token.level,
            phone: token.phone,
            address: token.address,
            // Set other necessary user details from token to session
          };
        }
        return session;
      },
    },
  }); 