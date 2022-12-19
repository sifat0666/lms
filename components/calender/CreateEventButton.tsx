import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const CreateEventButton = () => {
  const { setShowEventModal } = useContext(GlobalContext);

  return (
    <div onClick={() => setShowEventModal(true)} className="btn btn-primary ">
      Create Event
    </div>
  );
};

export default CreateEventButton;
