const UserQuestions = () => {
  const questions = [
    {
      id: "q1",
      options: ["جواب 1", "جواب 2", "جواب 3", "جواب 4"],
    },
    {
      id: "q2",
      options: ["جواب 1", "جواب 2", "جواب 3", "جواب 4"],
    },
    {
      id: "q3",
      options: ["جواب 1", "جواب 2", "جواب 3", "جواب 4"],
    },
    {
      id: "q4",
      options: ["جواب 1", "جواب 2", "جواب 3", "جواب 4"],
    },
  ];
  return (
    <form className="">
      {questions.map((question, index) => (
        <div key={index} className="flex flex-col items-start mb-10">
          <label htmlFor={question.id} className="font-bold text-lg">
            السؤال {index + 1}
          </label>
          <div className="w-[100%] h-[3px] mx-auto my-5 bg-[#F5F7F8]"></div>
          <div className="flex justify-between w-full">
            {question.options.map((option, optionIndex) => (
              <label key={optionIndex}>
                <input
                  type="radio"
                  name={question.id}
                  value={`A${optionIndex + 1}`}
                  className="mx-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
    </form>
  );
};

export default UserQuestions;
