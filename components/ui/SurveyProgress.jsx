import { useSelector } from "react-redux";

const SurveyProgress = () => {
  const sectionShow = useSelector((state) => state.section.sectionShow);
  const sectionDetails = [
    {
      step: "الخطوة الاولى",
      textProgress: "25% تم استكمال",
      width: "w-[25%]",
    },
    {
      step: "الخطوة الثانية",
      textProgress: "50% تم استكمال",
      width: "w-[50%]",
    },
    {
      step: "تم الانتهاء",
      textProgress: "100% تم استكمال",
      width: "w-[100%]",
    },
  ];
  const values = sectionDetails[sectionShow];
  return (
    <div>
      <span className="text-xs text-white/70 ">{values.step}</span>
      <p className="font-bold my-1"> {values.textProgress}</p>
      <div className="bg-white h-4 rounded-full overflow-hidden mt-3">
        <div
          className={`bg-primary h-full ${values.width}  rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default SurveyProgress;
