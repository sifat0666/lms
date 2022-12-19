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

  const { monthIndex, setSmallCalendarMonth, daySelected, setDaySelected } =
    useContext(GlobalContext);

  function getDayClass(day: any) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currDay === slcDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }
  }

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <div className="flex items-center">
          <p className="text-gray-500 font-bold px-2">
            {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
              "MMMM YYYY"
            )}
          </p>
          <button
            onClick={() => setCurrentMonthIdx((prv) => prv - 1)}
            className="btn btn-ghost p-2"
          >
            <BsChevronLeft />
          </button>
          <button
            onClick={() => setCurrentMonthIdx((prv) => prv + 1)}
            className="btn btn-ghost p-2"
          >
            <BsChevronRight />
          </button>
        </div>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span className="pl-2" key={i}>
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, id) => (
              <button
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day as any);
                }}
                key={id}
                className={`py-1 w-full ${getDayClass(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalender;
