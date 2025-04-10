import React from "react";
import Stream from "../Atoms/Stream";
import Detail from "../Atoms/Detail";
import ScrollComponent from "../Atoms/Scrol";

const Body = () => {
  return (
    <div className="flex justify-center flex-col gap-5 pt-3">
      <Stream />
      <div className="flex px-4 gap-3">
        <Detail />
        <ScrollComponent />
      </div>
    </div>
  );
};

export default Body;
