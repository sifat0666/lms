import dayjs from "dayjs";
import React, { ReactNode, useContext } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import GlobalContext from "../../context/GlobalContext";

const CalenderHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrvMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <div className="flex flex-col">
      <header className="px-4 py-2 flex items-center">
        <h1 className="mr-10 text-xl text-gray-500 font-bold">Calender</h1>

        <button
          onClick={handleReset}
          className="btn btn-ghost border rounded py-2 px-4 mr-5"
        >
          Today
        </button>
        <button onClick={handlePrvMonth}>
          <span className="btn btn-ghost material-icons-outlined cursor-pointer text-gray-600 mx-2">
            <BsChevronLeft className="text-xl" />
          </span>
        </button>
        <button onClick={handleNextMonth}>
          <span className="btn btn-ghost material-icons-outlined cursor-pointer text-gray-600 mx-2">
            <BsChevronRight className="text-xl" />
          </span>
        </button>
        <h2 className="ml-4 text-xl text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
      </header>
    </div>
  );
};

export default CalenderHeader;
