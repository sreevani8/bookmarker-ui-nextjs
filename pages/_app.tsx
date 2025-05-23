import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from "next/app";
import NavBar from "@/components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <>
        <NavBar/>
        <main>
          <Component {...pageProps} />
        </main>
      </>

  )
}
export default MyApp;