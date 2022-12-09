import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, ReactNode } from "react";

const Context = createContext({});

export function UserContext({ children }: { children: ReactNode }) {
  const hello = "world";

  const { data } = useQuery(["me"], () =>
    fetch("/api/user").then((res) => res.json())
  );
  return (
    <>
      <Context.Provider value={{ data }}>{children}</Context.Provider>
    </>
  );
}

export function useUserContext() {
  return useContext(Context);
}
