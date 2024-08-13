"use client";
import SurveyOverview from "@/components/SurveyOverview";
import imgSurvey from "/public/survey.png";
import NextButton from "@/components/ui/NextButton";
import SurveryNavBar from "@/components/ui/SurveryNavBar";
import UserInformationForm from "@/components/UserInformationForm";
import { useState } from "react";
export default function Home() {
  const [sectionShow, setSectionShow] = useState(0);
  return (
    <div className="max-w-screen-xl  h-[800px]  flex my-12  m-auto">
      <div className="bg-white w-2/3 h-full flex flex-col justify-between ">
        <div className="pt-12  px-[60px]">
          <SurveryNavBar action={2} />
          <UserInformationForm />
        </div>
        <NextButton />
      </div>
      <div className="w-1/3 h-full relative">
        <SurveyOverview
          imgURL={imgSurvey}
          title="عنوان الأستطلاع"
          des="شرح عن الأستطلاع"
          step="الخطوة الاولى"
          textProgress="25% تم استكمال"
          progress="25%"
        />
      </div>
    </div>
  );
}
