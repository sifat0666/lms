import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import ContextWrapper from "../context/ContextWrapper";
import EventModal from "../components/calender/EventModal";
import GlobalContext from "../context/GlobalContext";

// import Cart from './cart'

function MyApp({ Component, pageProps }: AppProps) {
  const [isSSR, setIsSSR] = useState(true);
  const { showEventModal } = useContext(GlobalContext);
  console.log(
    "🚀 ~ file: _app.tsx:17 ~ MyApp ~ showEventModal",
    showEventModal
  );
  // console.log(showEventModal);

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
          {showEventModal && <EventModal />}
          {/* <EventModal /> */}
          <Navbar>
            <Component {...pageProps} />
          </Navbar>
        </ContextWrapper>
      </QueryClientProvider>
    </div>
  );
}

export default MyApp;
