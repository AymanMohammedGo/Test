import React from "react";

const SurveyProgress = ({ step, textProgress, progress }) => {
  return (
    <div>
      <span className="text-xs text-white/70 ">{step}</span>
      <p className="font-bold my-1"> {textProgress}</p>
      <div className="bg-white h-4 rounded-full overflow-hidden mt-3">
        <div className={`bg-primary h-full w-[${progress}] rounded-full`}></div>
      </div>
    </div>
  );
};

export default SurveyProgress;
