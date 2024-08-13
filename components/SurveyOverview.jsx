import Image from "next/image";
import SurveyProgress from "./ui/SurveyProgress";
import LoginButton from "./ui/LoginButton";

const SurveyOverview = ({ imgURL, title, des }) => {
  return (
    <>
      <Image
        src={imgURL}
        width={300}
        height={600}
        alt="imgSurvey"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 right-0 text-white w-full p-8  ">
        <LoginButton />
      </div>
      <div className="absolute bottom-9 right-0 text-white w-full p-8   ">
        <h1 className="font-semibold text-5xl mb-5">{title}</h1>
        <p className="text-xs text-white/70 mb-8">{des}</p>
        <SurveyProgress />
      </div>
    </>
  );
};

export default SurveyOverview;
