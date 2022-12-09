import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import GlobalContext from "../../context/GlobalContext";
import { getMonth } from "../../utils";

const SmallCalender = () => {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  return (
    <div>
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <button onClick={() => setCurrentMonthIdx((prv) => prv - 1)}>
          <span className="btn btn-ghost material-icons-outlined cursor-pointer text-gray-600 mx-2">
            <BsChevronLeft className="text-xl" />
          </span>
        </button>
        <button onClick={() => setCurrentMonthIdx((prv) => prv + 1)}>
          <span className="btn btn-ghost material-icons-outlined cursor-pointer text-gray-600 mx-2">
            <BsChevronRight className="text-xl" />
          </span>
        </button>
      </header>
    </div>
  );
};

export default SmallCalender;
