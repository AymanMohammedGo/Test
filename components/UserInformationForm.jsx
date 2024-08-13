const UserInformationForm = () => {
  return (
    <form className="space-y-6">
      <div className="flex items-center ">
        <label htmlFor="name" className="font-semibold text-lg mx-3 w-[25%]">
          الاسم
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className=" w-full px-2 py-3 border-none  bg-[#F5F7F8]"
          required
        />
      </div>

      <div className="flex items-center ">
        <label htmlFor="email" className="font-semibold text-lg mx-3 w-[25%]">
          البريد الإلكتروني
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className=" w-full px-2 py-3 border-none  bg-[#F5F7F8]"
          required
        />
      </div>
      <div className={`w-[90%] h-[3px] mx-auto bg-[#F5F7F8]`}></div>

      <div className="flex items-center">
        <span className="font-semibold text-lg mx-3 w-[25%]">
          الحالة الوظيفية
        </span>
        <div className="flex items-center justify-around w-full">
          <label>
            <input
              type="radio"
              name="job_status"
              value="student"
              className="mx-2"
            />
            طالب
          </label>
          <label>
            <input
              type="radio"
              name="job_status"
              value="employee"
              className="mx-2"
            />
            موظف
          </label>
          <label>
            <input
              type="radio"
              name="job_status"
              value="employer"
              className="mx-2"
            />
            صاحب عمل
          </label>
        </div>
      </div>

      <div className={`w-[90%] h-[3px] mx-auto bg-[#F5F7F8]`}></div>
      <div className="flex items-center ">
        <label
          htmlFor="education"
          className="font-semibold text-lg mx-3 w-[25%]"
        >
          التعليم
        </label>
        <input
          type="text"
          id="education"
          name="education"
          className=" w-full px-2 py-3 border-none  bg-[#F5F7F8]"
          required
        />
      </div>
      <div className="flex items-center ">
        <div className="flex items-center w-full">
          <label htmlFor="dob" className=" font-semibold text-lg mx-3 w-[41%]">
            تاريخ الميلاد
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className=" w-[59%] px-2 py-3 border-none  bg-[#F5F7F8] "
            required
          />
        </div>

        <div className="flex items-center w-full">
          <label htmlFor="age" className="font-semibold text-lg text-center mx-3 w-[25%]">
            العمر
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="w-[70%] px-2 py-3 border-none  bg-[#F5F7F8]"
            required
          />
        </div>
      </div>
      <div className="flex items-center ">
        <label
          htmlFor="location"
          className="font-semibold text-lg mx-3 w-[25%]"
        >
          عنوان السكن
        </label>
        <input
          type="text"
          id="location"
          name="location"
          className=" w-full px-2 py-3 border-none  bg-[#F5F7F8]"
          required
        />
      </div>
      <div className={`w-[90%] h-[3px] mx-auto bg-[#F5F7F8]`}></div>

      <div className="flex items-center">
        <span className="font-semibold text-lg mx-3 w-[25%]">الجنس</span>
        <div className="flex items-center justify-around w-full">
          <label>
            <input type="radio" name="Gender" value="Male" className="mx-2" />
            ذكر
          </label>
          <label>
            <input type="radio" name="Gender" value="female" className="mx-2" />
            انثى
          </label>
        </div>
      </div>
    </form>
  );
};

export default UserInformationForm;
