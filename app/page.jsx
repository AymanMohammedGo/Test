"use client";
import SurveyOverview from "@/components/SurveyOverview";
import imgSurvey from "/public/survey.png";
import SurveryNavBar from "@/components/ui/SurveryNavBar";
import UserInformationForm from "@/components/UserInformationForm";
import { useSelector, useDispatch } from "react-redux";
import UserQuestions from "@/components/UserQuestions";
import EndOfSurvey from "@/components/EndOfSurvey";
import { nextSection } from "/app/store/slices/userSectionSlice";
import { useState, useEffect } from "react";
export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employment_status: "",
    teaching: "",
    date_of_birth: "",
    age: "",
    address: "",
    gender: "",
    solve: [],
  });
  const [pollData, setPollData] = useState({});
  const [error, setError] = useState();
  const sectionShow = useSelector((state) => state.section.sectionShow);
  const dispatch = useDispatch();
  const FetchPollsData = async () => {
    const url = "https://test.omar.rs4it.com/poll/70";
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        const data = await response.json();
        setPollData(data.data);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    FetchPollsData();
  }, []);
  const handleFormSubmit = async () => {
    try {
      const response = await fetch("https://test.omar.rs4it.com/solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        dispatch(nextSection());
      } else {
        console.error("فشل إرسال البيانات");
      }
    } catch (error) {
      console.error("حدث خطأ:", error);
    }
  };

  const handleNext = () => {
    if (sectionShow === 0) {
      if (formData.name === "") {
        setError("يجب تسجيل اسم المستخدم");
      } else {
        dispatch(nextSection());
      }
    } else if (sectionShow === 1) {
      handleFormSubmit();
    } else {
      setFormData({
        name: "",
        email: "",
        employment_status: "",
        teaching: "",
        date_of_birth: "",
        age: "",
        address: "",
        gender: "",
        solve: [],
      });
      dispatch(nextSection());
    }
  };

  return (
    <div className="max-w-screen-xl h-full lg:h-[800px]  flex lg:my-12 flex-col lg:flex-row  m-auto">
      <div className="bg-white w-full lg:w-2/3 h-full flex flex-col justify-between ">
        <div className="pt-4 lg:pt-12 px-4 lg:px-[60px]">
          <SurveryNavBar />
          {sectionShow === 0 && (
            <UserInformationForm
              setFormData={setFormData}
              formData={formData}
              error={error}
            />
          )}
          {sectionShow === 1 && (
            <UserQuestions
              questions={pollData.questions}
              setFormData={setFormData}
            />
          )}
          {sectionShow === 2 && <EndOfSurvey des={pollData.description} />}
        </div>
        <button
          onClick={handleNext}
          className="text-xl  font-semibold w-full p-3 text-center bg-primary text-white"
        >
          {sectionShow === 2 ? "تم" : "التالي"}
        </button>
      </div>
      <div className="w-full lg:w-1/3 lg:h-full relative">
        <SurveyOverview
          imgURL={imgSurvey}
          title={pollData.title}
          des={pollData.description}
        />
      </div>
    </div>
  );
}
