import dayjs from "dayjs";
import React, { ReactNode, useState } from "react";
import GlobalContext from "./GlobalContext";

const ContextWrapper = ({ children }: { children: ReactNode }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());

  return (
    <GlobalContext.Provider value={{ monthIndex, setMonthIndex }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
