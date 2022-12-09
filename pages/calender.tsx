import React, { useContext, useEffect, useState } from "react";
import CalenderHeader from "../components/calender/CalenderHeader";
import Month from "../components/calender/Month";
import Sidebar from "../components/calender/Sidebar";
import GlobalContext from "../context/GlobalContext";
import { getMonth } from "../utils";

const calender = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="h-screen flex flex-col">
      <CalenderHeader />
      <div className="flex flex-1">
        <Sidebar />
        <Month month={currentMonth} />
      </div>
    </div>
  );
};

export default calender;
