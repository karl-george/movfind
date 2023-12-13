import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import CredentialsProvider from 'next-auth/providers/credentials';
import { User } from './lib/models';
import bcrypt from 'bcrypt';
import { connectToDB } from './lib/utils';

const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({
      username: credentials.username,
    });

    if (!user || !user.isAdmin) throw new Error('Not user or admin');

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error('Password incorrect');

    return user;
  } catch (error) {
    console.log(error);
    throw new Error('failed to login');
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          console.log('failed to authorize');
          return null;
        }
      },
    }),
  ],
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
