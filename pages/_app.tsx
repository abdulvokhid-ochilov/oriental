import "@/styles/globals.css";
import "../assets/fonts/gilroy/gilroy.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/templates/Navbar";
import Footer from "@/components/templates/Footer";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
