const AdminNavBar = () => {
  return (
    <div class=" flex items-center  w-full text-secondary">
      <div>
        <h1 class="text-xl font-semibold">اسم المدير</h1>
        <p class="text-sm ">مرحبا بك</p>
      </div>

      <div class="relative mx-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-bell-ring"
        >
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          <path d="M4 2C2.8 3.7 2 5.7 2 8" />
          <path d="M22 8c0-2.3-.8-4.3-2-6" />
        </svg>
        <span class="absolute top-0 right-0 inline-block w-4 h-4 bg-red-600 text-white text-xs font-bold rounded-full text-center">
          2
        </span>
      </div>

      <div class="flex items-center flex-1 relative">
        <input
          type="text"
          placeholder="بحث..."
          class=" w-full px-4 py-2 border rounded-full"
        />
        <div class="absolute left-3 text-[#c4c4c4]">
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
            class="lucide lucide-search"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AdminNavBar;
