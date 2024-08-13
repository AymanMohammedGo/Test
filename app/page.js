"use client";
import SurveyOverview from "@/components/SurveyOverview";
import imgSurvey from "/public/survey.png";
import NextButton from "@/components/ui/NextButton";
import SurveryNavBar from "@/components/ui/SurveryNavBar";
import UserInformationForm from "@/components/UserInformationForm";
import { useSelector } from "react-redux";
import UserQuestions from "@/components/UserQuestions";
import EndOfSurvey from "@/components/EndOfSurvey";
export default function Home() {
  const sectionShow = useSelector((state) => state.section.sectionShow);
  return (
    <div className="max-w-screen-xl  h-[800px]  flex my-12  m-auto">
      <div className="bg-white w-2/3 h-full flex flex-col justify-between ">
        <div className="pt-12  px-[60px]">
          <SurveryNavBar />
          {sectionShow === 0 && <UserInformationForm />}
          {sectionShow === 1 && <UserQuestions />}
          {sectionShow === 2 && <EndOfSurvey />}
        </div>
        <NextButton />
      </div>
      <div className="w-1/3 h-full relative">
        <SurveyOverview
          imgURL={imgSurvey}
          title="عنوان الأستطلاع"
          des="شرح عن الأستطلاع"
        />
      </div>
    </div>
  );
}
