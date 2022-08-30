import { Header } from "components";
import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const headerOptions = [
    { title: "Home", link: "/" },
    { title: "Search", link: "/search" },
  ];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header headerOptions={headerOptions}>
        <Component {...pageProps} />
      </Header>
    </>
  );
}

export default MyApp;
