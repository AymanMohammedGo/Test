const AdminStatistics = () => {
  const data = [
    {
      title: "عدد المشاركين",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-circle-user-round"
        >
          <path d="M18 20a6 6 0 0 0-12 0" />
          <circle cx="12" cy="10" r="4" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      date: "التاريخ",
      number: "23344",
      bgColor: "bg-[#E9EDF5]",
      textColor: "text-primary",
    },
    {
      title: "عدد الأستطلاعات المنتهية",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-clipboard-check"
        >
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      ),
      date: "التاريخ",
      number: "23344",
      bgColor: "bg-[#2A2828]",
      textColor: "text-white",
    },
    {
      title: "نسبة النتائج",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chart-no-axes-combined"
        >
          <path d="M12 16v5" />
          <path d="M16 14v7" />
          <path d="M20 10v11" />
          <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
          <path d="M4 18v3" />
          <path d="M8 14v7" />
        </svg>
      ),
      date: "التاريخ",
      number: "10% زيادة أسبوعية ",
      bgColor: "bg-[#007B8D]",
      textColor: "text-white",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between ">
      {data.map((item, index) => (
        <div
          key={index}
          className={`${item.bgColor} ${item.textColor} p-6 mx-4 my-2 lg:my-8 rounded-xl flex flex-col w-full `}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">{item.title}</h3>
            <div>{item.icon}</div>
          </div>
          <div className="flex items-center mb-3">
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
              class="lucide lucide-calendar-range ml-2"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M16 2v4" />
              <path d="M3 10h18" />
              <path d="M8 2v4" />
              <path d="M17 14h-6" />
              <path d="M13 18H7" />
              <path d="M7 14h.01" />
              <path d="M17 18h.01" />
            </svg>
            <span className="text-xs">{item.date}</span>
          </div>
          <div className="flex items-center ">
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
              class="lucide lucide-users-round ml-2"
            >
              <path d="M18 21a8 8 0 0 0-16 0" />
              <circle cx="10" cy="8" r="5" />
              <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
            </svg>
            <span className="text-xs">{item.number}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminStatistics;
