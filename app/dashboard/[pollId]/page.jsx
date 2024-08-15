"use client";
import AdminNavBar from "@/components/ui/AdminNavBar";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

const EditPollPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { pollId } = useParams();

  useEffect(() => {
    const fetchPollData = async () => {
      const url = `https://test.omar.rs4it.com/poll/${pollId}`;
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      try {
        const response = await fetch(url, requestOptions);
        if (response.ok) {
          const data = await response.json();
          setTitle(data.data.title);
          setDescription(data.data.description);
          setQuestions(data.data.questions);
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    };
    fetchPollData();
  }, [pollId]);

  const updatePoll = async (pollData) => {
    setLoading(true);

    try {
      const updateQuestionsPromises = pollData.questions.map(
        async (question, index) => {
          const url = `https://test.omar.rs4it.com/question/${question.id}`;
          const requestOptions = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              text: question.text,
              answers: question.answers,
            }),
            redirect: "follow",
          };
          const response = await fetch(url, requestOptions);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        }
      );

      await Promise.all(updateQuestionsPromises);

      const url = `https://test.omar.rs4it.com/poll/${pollId}`;
      const requestOptions = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pollData),
        redirect: "follow",
      };
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        setLoading(false);
        router.push("/dashboard");
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating poll:", error);
      setLoading(false);
    }
  };

  const handleQuestionChange = (index, event) => {
    const { name, value } = event.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index][name] = value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (qIndex, aIndex, event) => {
    const { name, value } = event.target;
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answers[aIndex][name] =
      name === "points" ? parseFloat(value) : value;
    setQuestions(updatedQuestions);
  };

  const addAnswer = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].answers.push({ text: "", points: 0 });
    setQuestions(updatedQuestions);
  };

  const removeAnswer = (qIndex, aIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answers.splice(aIndex, 1);
    setQuestions(updatedQuestions);
  };

  const removeQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const surveyData = { title, description, questions };
    updatePoll(surveyData);
  };

  return (
    <div className="max-w-screen-xl h-full lg:min-h-[800px]  flex lg:my-12 flex-col lg:flex-row  m-auto">
      <div className="bg-white w-full lg:w-[80%]  flex flex-col flex-1 px-4  lg:px-12 py-8">
        <AdminNavBar />
        <form className="space-y-6 mt-5 " onSubmit={handleSubmit}>
          <div className="flex items-center ">
            <label
              htmlFor="name"
              className="font-semibold text-lg mx-3 w-[25%]"
            >
              اسم الاستطلاع
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" w-full px-2 py-3 border-none  bg-[#F5F7F8]"
              required
            />
          </div>
          <div className="flex items-center ">
            <label
              htmlFor="name"
              className="font-semibold text-lg mx-3 w-[25%]"
            >
              وصف الاستطلاع
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className=" w-full px-2 py-3 border-none  bg-[#F5F7F8]"
              required
            />
          </div>
          {questions.map((question, qIndex) => (
            <div key={qIndex}>
              <div key={qIndex} className="flex items-center mb-3">
                <label className="font-semibold text-base mx-3 w-[100px] ">
                  نص السؤال
                </label>
                <input
                  type="text"
                  name="text"
                  value={question.text}
                  onChange={(e) => handleQuestionChange(qIndex, e)}
                  className=" w-full px-2 py-3 border-none  bg-[#F5F7F8]"
                />
                <Link
                  href="#"
                  className="mx-2 text-red-500"
                  onClick={() => removeQuestion(qIndex)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-trash-2"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                </Link>
              </div>
              {question.answers.map((answer, aIndex) => (
                <div key={aIndex} className="flex items-center mb-3">
                  <label className="font-semibold text-base mx-3 w-[13.5%]">
                    نص الاجابة
                  </label>
                  <input
                    type="text"
                    name="text"
                    value={answer.text}
                    onChange={(e) => handleAnswerChange(qIndex, aIndex, e)}
                    className=" w-full px-2 py-3 border-none  bg-[#F5F7F8]"
                  />
                  <label className="font-semibold text-base mx-3">النقاط</label>
                  <input
                    type="number"
                    name="points"
                    value={answer.points}
                    onChange={(e) => handleAnswerChange(qIndex, aIndex, e)}
                    className=" w-[15%] px-2 py-3 border-none  bg-[#F5F7F8]"
                  />
                  <Link
                    href="#"
                    className="mx-2 text-red-500"
                    onClick={() => removeAnswer(qIndex, aIndex)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-trash-2"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                  </Link>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addAnswer(qIndex)}
                className="px-4 py-1 bg-secondary text-white rounded mr-[106px]"
              >
                اضافةاجابة
              </button>
            </div>
          ))}

          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 bg-primary text-white rounded"
          >
            {loading ? "جاري التعديل" : "حفظ التعديلات"}
          </button>
        </form>
      </div>
      <div className="hidden lg:block w-[20%]  relative">
        <Image
          src="/login.png"
          width={300}
          height={600}
          alt="imgLogin"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default EditPollPage;
