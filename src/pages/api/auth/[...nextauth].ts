// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import NextAuth from 'next-auth';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';
import { api } from 'lib/axios';
import { Base64 } from 'js-base64';
// import from 'base'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          name: profile.name,
          sub: profile.sub,
          email: profile.email,
          avatar_url: profile.picture
        };
      }
    })
  ],
  callbacks: {
    async signIn({ user, profile }) {
      try {
        const login = Base64.encode(Base64.encode(Base64.encode(user.email)));
        const password = Base64.encode(
          Base64.encode(Base64.encode(profile?.sub))
        );

        const headers = {
          user_localizapet: login,
          password_localizapet: password
        };

        const response = await api.get('token', { headers: headers });

        console.log(response.data);
        return true;
      } catch (error) {
        if (error.response.status === 401) {
          const response = await api.post('user', [
            {
              name: user.name,
              email: user.email,
              password: profile?.sub + '',
              emailVerified: 1,
              photo: profile?.picture
            }
          ]);
          if (response.status == 200) {
            console.log('----FOi ?"');
            return true;
          }

          if (response.status != 200) {
            console.error('Failed to save user', error);
            return false;
          }
          return false;
        }
      }
      return true;
    },
    async session({ session, user }) {
      return {
        ...session
      };
    }
  }
});
//
