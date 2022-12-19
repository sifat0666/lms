// @ts-ignore

import React, { useContext, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import {
  Md10K,
  MdBookmarkBorder,
  MdCheck,
  MdDeleteOutline,
  MdDragHandle,
  MdSchedule,
  MdSegment,
} from "react-icons/md";
import GlobalContext from "../../context/GlobalContext";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

const EventModal = () => {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  }: any = useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e: any) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: Date.now(),
    };

    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-primary-content rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="p-2">
            <MdDragHandle className="text-xl font-bold" />
          </span>
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({ type: "delete", payload: selectedEvent });
                  setShowEventModal(false);
                }}
                className="text-gray-400 cursor-pointer btn btn-ghost"
              >
                <MdDeleteOutline />
              </span>
            )}
            <button
              onClick={() => setShowEventModal(false)}
              className="btn btn-ghost"
            >
              <span>
                <GrFormClose />
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className=" text-gray-400">
              <MdSchedule className="text-2xl" />
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span>
              <MdSegment className="text-xl" />
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add description"
              value={description}
              required
              className="pt-3 border-0 text-gray-600 text-sm font-semibold w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            />
            <span>
              <MdBookmarkBorder />
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((label, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(label)}
                  className={`bg-${label}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === label ? (
                    <MdCheck className="text-white" />
                  ) : (
                    ""
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            save
          </button>
        </footer>
      </form>
      {/* Because we made a dynamic class with the label we need to add those classes */}
      <div className="hidden bg-green-500 bg-blue-500 bg-indigo-500 bg-gray-500 bg-red-500 bg-purple-500"></div>
    </div>
  );
};

export default EventModal;
