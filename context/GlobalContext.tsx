import { createContext } from "react";

const GlobalContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index: number) => {},
});

export default GlobalContext;
