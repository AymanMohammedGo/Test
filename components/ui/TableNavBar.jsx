import Link from "next/link";

const TableNavBar = ({ title }) => {
  
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-semibold text-lg">{title}</h2>
      <div>
        <button className="text-primary bg-[#E7E9ED] rounded-lg px-3 py-2 ml-2 text-sm font-bold ">
          تصدير لأكسل
        </button>
        <Link
          href="/dashboard/addPoll"
          className="bg-primary text-white rounded-lg px-3 py-2 text-sm font-bold "
        >
          إضافة
        </Link>
      </div>
    </div>
  );
};

export default TableNavBar;
