import NextAuth from "next-auth";
import BattleNetProvider from "next-auth/providers/battlenet";

export default NextAuth({
  providers: [
    BattleNetProvider({
      clientId: process.env.BATTLENET_CLIENT_ID,
      clientSecret: process.env.BATTLENET_CLIENT_SECRET,
      issuer: "https://us.battle.net/oauth",
      authorization: { params: { scope: "wow.profile" } },
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: "temp",
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session(session, token) {
      session.access_token = token.accessToken;
      return session;
    },
  },
});
