import "../styles/index.css";
import { MoralisProvider } from "react-moralis";
import { SessionProvider } from "next-auth/react";
import MainProvider from "../src/context/Provider";
import Head from "next/head";

const APP_ID = "gfz8jdvD2mrP8tSb6GmaPFVKEKWxcWafPsN5IsBO";
const SERVER_URL = "https://bdzksvclam7m.usemoralis.com:2053/server";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <MainProvider>
        <SessionProvider session={session}>
          <Head>
            <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Koulen&display=swap');
            </style>
            <title>Simple Joe</title>
            <meta charset="UTF-8" />
            <meta
              name="description"
              content="width=device-width, initial-scale=1.0"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </SessionProvider>
      </MainProvider>
    </MoralisProvider>
  );
}

export default MyApp;
