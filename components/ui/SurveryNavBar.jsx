import Link from "next/link";

const navItems = [
  {
    id: 1,
    title: "الموافقة",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-circle-check-big"
      >
        <path d="M21.801 10A10 10 0 1 1 17 3.335" />
        <path d="m9 11 3 3L22 4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "الأسئلة",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-circle-help"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <path d="M12 17h.01" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "المعلومات الخاصة بك",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-info"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
];
const SurveryNavBar = ({ action }) => {
  return (
    <nav className="flex items-center pb-20 ">
      {navItems.map((item, index) => (
        <div key={index} className="flex items-center w-full ">
          <span
            className={`font-bold text-lg ${
              action === index ? "text-primary" : "text-secondary"
            }  `}
          >
            {item.title}
          </span>
          <span
            className={`${
              action === index ? "text-primary" : "text-secondary"
            } mx-4 `}
          >
            {item.icon}
          </span>
          {index !== navItems.length - 1 && (
            <div
              className={`w-full h-[1px] ml-4 ${
                action === index ? "bg-primary" : "bg-secondary"
              }`}
            ></div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default SurveryNavBar;
