import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { IEvents } from "../../types";

const Day = ({ day, rowIdx }: any) => {
  const [dayEvents, setDayEvents] = useState([]);

  const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent } =
    useContext(GlobalContext);

  useEffect(() => {
    const events = savedEvents.filter(
      (evt: IEvents) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );

    setDayEvents(events);
  }, [savedEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p
          onClick={() => {
            setDaySelected(day);
            setShowEventModal(true);
          }}
          className={`text-sm p-1 my-1 text-center cursor-pointer ${getCurrentDayClass()}`}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt: IEvents, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
      {/* Because we made a dynamic class with the label we need to add those classes */}
      <div className="hidden bg-green-200 bg-blue-200 bg-indigo-200 bg-gray-200 bg-red-200 bg-purple-200"></div>
    </div>
  );
};

export default Day;
