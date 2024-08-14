import Link from "next/link";
import { useState, useEffect } from "react";
import ConfirmationDialog from "./ui/ConfirmationDialog";

const AllSurveysTable = ({ data, setData }) => {
  const [averages, setAverages] = useState({});
  const [selectedPollId, setSelectedPollId] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const PullResults = async (id) => {
    const url = `https://test.omar.rs4it.com/solve/${id}`;
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  const DeletePoll = async (id) => {
    const url = `https://test.omar.rs4it.com/poll/${id}`;
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };
    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  useEffect(() => {
    const fetchAverages = async () => {
      const newAverages = {};
      for (const item of data) {
        const result = await PullResults(item.id);
        if (result) {
          const correctAnswers = result.data.answers.filter(
            (item) => item.answer.points === 3
          );
          const totalAnswers = result.data.answers.length;
          const rate = totalAnswers
            ? (correctAnswers.length / totalAnswers) * 100
            : 0;
          newAverages[item.id] = rate.toFixed(2);
        }
      }
      setAverages(newAverages);
    };

    if (data?.length) {
      fetchAverages();
    }
  }, [data]);
  const handleDelete = async () => {
    if (selectedPollId) {
      const result = await DeletePoll(selectedPollId);
      if (result) {
        setData(data.filter((poll) => poll.id !== selectedPollId));
        setIsDialogOpen(false);
      } else {
        console.error("فشل في حذف الاستطلاع");
      }
    }
  };
  const openDialog = (id) => {
    setSelectedPollId(id);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedPollId(null);
  };
  return (
    <table className="w-full my-3">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="text-sm text-[#71778E] p-2 text-start">الأسم</th>
          <th className="text-sm text-[#71778E] p-2 text-start">عدد الأسئلة</th>
          <th className="text-sm text-[#71778E] p-2 text-start">النتائج</th>
          <th className="text-sm text-[#71778E] p-2 text-start">وصف بسيط</th>
          <th className="text-sm text-[#71778E] p-2 text-start">الأجراء</th>
        </tr>
      </thead>

      <tbody>
        {data?.map((item, index) => (
          <tr key={index} className="border-b border-gray-200 text-secondary">
            <td className="text-sm p-2">{item.title}</td>
            <td className="text-sm p-2">{item.questions.length}</td>
            <td className="text-sm p-2 ">
              <div className="flex  items-center">
                <div className="w-2 h-2 bg-green-500 rounded-lg ml-1" />
                {`${averages[item.id] ?? "انتظر.."}%`}
              </div>
            </td>
            <td className="text-sm p-2">{item.description}</td>
            <td className="text-sm p-2 ">
              <div className="flex  items-center">
                <Link
                  href="#"
                  className="mx-2 text-red-500"
                  onClick={() => {
                    openDialog(item.id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-trash-2"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                </Link>
                <Link href="#" className="mx-2 text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-pencil"
                  >
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                    <path d="m15 5 4 4" />
                  </svg>
                </Link>
              </div>
            </td>
          </tr>
        ))}
        <ConfirmationDialog
          isOpen={isDialogOpen}
          onConfirm={handleDelete}
          onCancel={closeDialog}
        />
      </tbody>
    </table>
  );
};

export default AllSurveysTable;
