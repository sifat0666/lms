import dayjs from "dayjs";
import { createContext } from "react";

const GlobalContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index: number) => {},
  setSmallCalendarMonth: (index: number) => {},
  smallCalendarMonth: 0,
  daySelected: dayjs(),
  setDaySelected: (index: dayjs.Dayjs) => {},
  showEventModal: false,
  setShowEventModal: (show: boolean) => {},
  dispatchCalEvent: ({ type, payload }: any) => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: (e: any) => {},
});

export default GlobalContext;
