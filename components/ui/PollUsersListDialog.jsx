import { useState, useEffect } from "react";

const PollUsersListDialog = ({ setOpenDialog, OpenDialog, pollID }) => {
  const [data, setData] = useState({});
  const [pollPoints, setPollPoints] = useState(0);

  const PollDetails = async (pollID) => {
    const url = `https://test.omar.rs4it.com/solve/${pollID}`;
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        const result = await response.json();
        setData(result.data);
        setPollPoints(result.data.pollPoints);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (pollID) {
      PollDetails(pollID);
    }
  }, [pollID]);
  if (!OpenDialog) return null;

  const usersPoints = data?.answers?.reduce((acc, item) => {
    const userId = item.user.id;
    const userName = item.user.name;
    const points = item.answer.points;

    if (!acc[userId]) {
      acc[userId] = {
        name: userName,
        totalPoints: 0,
        count: 0,
      };
    }

    acc[userId].totalPoints += points;
    acc[userId].count += 1;

    return acc;
  }, {});

  const usersList = usersPoints
    ? Object.values(usersPoints).map((user) => ({
        name: user.name,
        count: user.count,
        education:
          data.answers.find((answer) => answer.user.name === user.name)?.user
            .teaching || "غير متوفر",
        averagePercentage:
          pollPoints > 0
            ? ((user.totalPoints / pollPoints) * 100).toFixed(2)
            : "0.00",
      }))
    : [];

  return (
    <div className="fixed inset-0 p-5 shadow-custom rounded-2xl bg-white mx-auto my-20 max-w-screen-lg flex flex-col justify-between z-10">
      <div>
        <h2 className="font-semibold text-lg text-center">المشاركون</h2>
        <table className="w-full my-3">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-sm text-[#71778E] p-2 text-start">الأسم</th>
              <th className="text-sm text-[#71778E] p-2 text-start">التعليم</th>
              <th className="text-sm text-[#71778E] p-2 text-start">
                عدد الاسئلة
              </th>
              <th className="text-sm text-[#71778E] p-2 text-start">النتائج</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 text-secondary"
              >
                <td className="text-sm p-2">{user.name}</td>
                <td className="text-sm p-2">{user.education}</td>
                <td className="text-sm p-2">{user.count}</td>

                <td className="text-sm p-2">{user.averagePercentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="px-4 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
        onClick={() => setOpenDialog(false)}
      >
        اغلاق
      </button>
    </div>
  );
};

export default PollUsersListDialog;
