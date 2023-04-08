import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "@/shared/ui/Layout/ui/Layout";
import { ToastContainer } from "react-toastify";
import "@/styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@/shared/ui/Layout/ui/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Watch With Friends</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Component {...pageProps} />
        <ToastContainer theme={"dark"} autoClose={1500} limit={2} />
      </Layout>
    </>
  );
}
