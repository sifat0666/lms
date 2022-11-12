import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import ContextWrapper from "../context/ContextWrapper";

// import Cart from './cart'

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  const queryClient = new QueryClient();

  return (
    <div data-thme="light">
      <QueryClientProvider client={queryClient}>
        <ContextWrapper>
          <Toaster />
          <Navbar />
          <Component {...pageProps} />
        </ContextWrapper>
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
