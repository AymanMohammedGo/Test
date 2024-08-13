"use client";
import { useSelector, useDispatch } from "react-redux";
import { nextSection } from "../../app/store/slices/userSectionSlice";
const NextButton = () => {
  const sectionShow = useSelector((state) => state.section.sectionShow);
  const dispatch = useDispatch();
  const handleNext = () => {
    dispatch(nextSection());
  };
  return (
    <button
      onClick={handleNext}
      className="text-xl  font-semibold w-full p-3 text-center bg-primary text-white"
    >
      {sectionShow === 2 ? "تم" : "التالي"}
    </button>
  );
};

export default NextButton;
