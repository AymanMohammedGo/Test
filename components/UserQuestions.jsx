import { useState, useEffect } from "react";

const UserQuestions = ({ questions, setFormData }) => {
  const [answers, setAnswers] = useState([]);

  const handleAnswerChange = (questionId, answerId) => {
    setAnswers((prevAnswers) => {
      // ابحث عن إجابة موجودة بالفعل لهذا السؤال
      const existingAnswerIndex = prevAnswers.findIndex(
        (ans) => ans.questionId === questionId
      );

      if (existingAnswerIndex > -1) {
        // تحديث الإجابة إذا كانت موجودة بالفعل
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingAnswerIndex] = { questionId, answerId };
        return updatedAnswers;
      } else {
        // إضافة إجابة جديدة إذا لم تكن موجودة
        return [...prevAnswers, { questionId, answerId }];
      }
    });
  };

  // تحديث formData عند تغيير الأجوبة
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      solve: answers,
    }));
  }, [answers, setFormData]);

  return (
    <form>
      {questions?.map((question, index) => (
        <div key={index} className="flex flex-col items-start mb-10">
          <label htmlFor={question.id} className="font-bold text-lg">
            {question.text}
          </label>
          <div className="w-[100%] h-[3px] mx-auto my-5 bg-[#F5F7F8]"></div>
          <div className="flex justify-between w-full">
            {question?.answers?.map((option, optionIndex) => (
              <label key={optionIndex}>
                <input
                  type="radio"
                  name={question.id}
                  value={option.id}
                  checked={answers.find(
                    (ans) =>
                      ans.questionId === question.id &&
                      ans.answerId === option.id
                  )}
                  onChange={() => handleAnswerChange(question.id, option.id)}
                  className="mx-2"
                />
                {option.text}
              </label>
            ))}
          </div>
        </div>
      ))}
    </form>
  );
};

export default UserQuestions;
