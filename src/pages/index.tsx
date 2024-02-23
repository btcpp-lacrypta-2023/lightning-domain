import Head from "next/head";
import Logo from "~/components/Logo";
import Footer from "~/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bitcoin++ Wallet</title>
        <meta name="description" content="LaWallet.Ar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col">
        <div className="flex h-full shrink grow flex-col content-center items-center justify-center gap-[8px]">
          <Logo />
          <p className="text-lg text-[#808080]">Lightning domain</p>
        </div>
        <Footer />
      </main>
    </>
  );
}
