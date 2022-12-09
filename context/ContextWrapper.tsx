import dayjs from "dayjs";
import React, { ReactNode, useState } from "react";
import GlobalContext from "./GlobalContext";
import { UserContext } from "./userContext";

const ContextWrapper = ({ children }: { children: ReactNode }) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());

  return (
    <GlobalContext.Provider value={{ monthIndex, setMonthIndex } as any}>
      <UserContext>{children}</UserContext>
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
