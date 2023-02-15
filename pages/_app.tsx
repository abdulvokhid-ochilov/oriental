import "@/styles/globals.css";
import "../assets/fonts/gilroy/gilroy.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/templates/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
