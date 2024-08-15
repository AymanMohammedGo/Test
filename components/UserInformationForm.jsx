const UserInformationForm = ({ setFormData, formData, error, setError }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: type === "radio" ? (checked ? value : prevValues[name]) : value,
    }));
  };

  return (
    <form className="space-y-6 mb-5 lg:mb-0">
      <div className="flex items-center ">
        <label htmlFor="name" className="font-semibold text-lg mx-3 w-[25%]">
          الاسم
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-2 py-3 border-none bg-[#F5F7F8]"
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
          value={formData.email}
          onChange={handleChange}
          className="w-full px-2 py-3 border-none bg-[#F5F7F8]"
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
              name="employment_status"
              value="طالب"
              checked={formData.employment_status === "طالب"}
              onChange={handleChange}
              className="mx-2"
            />
            طالب
          </label>
          <label>
            <input
              type="radio"
              name="employment_status"
              value="موظف"
              checked={formData.employment_status === "موظف"}
              onChange={handleChange}
              className="mx-2"
            />
            موظف
          </label>
          <label>
            <input
              type="radio"
              name="employment_status"
              value="صاحب عمل"
              checked={formData.employment_status === "صاحب عمل"}
              onChange={handleChange}
              className="mx-2"
            />
            صاحب عمل
          </label>
        </div>
      </div>

      <div className={`w-[90%] h-[3px] mx-auto bg-[#F5F7F8]`}></div>
      <div className="flex items-center ">
        <label
          htmlFor="teaching"
          className="font-semibold text-lg mx-3 w-[25%]"
        >
          التعليم
        </label>
        <input
          type="text"
          id="teaching"
          name="teaching"
          value={formData.teaching}
          onChange={handleChange}
          className="w-full px-2 py-3 border-none bg-[#F5F7F8]"
        />
      </div>
      <div className="flex items-center ">
        <div className="flex items-center w-full">
          <label
            htmlFor="date_of_birth"
            className="font-semibold text-lg mx-3 w-[41%]"
          >
            تاريخ الميلاد
          </label>
          <input
            type="date"
            id="date_of_birth"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            className="w-[59%] px-2 py-3 border-none bg-[#F5F7F8] "
          />
        </div>

        <div className="flex items-center w-full">
          <label
            htmlFor="age"
            className="font-semibold text-lg text-center mx-3 w-[25%]"
          >
            العمر
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-[70%] px-2 py-3 border-none bg-[#F5F7F8]"
          />
        </div>
      </div>
      <div className="flex items-center ">
        <label htmlFor="address" className="font-semibold text-lg mx-3 w-[25%]">
          عنوان السكن
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-2 py-3 border-none bg-[#F5F7F8]"
        />
      </div>
      <div className={`w-[90%] h-[3px] mx-auto bg-[#F5F7F8]`}></div>

      <div className="flex items-center ">
        <span className="font-semibold text-lg mx-3 w-[25%]">الجنس</span>
        <div className="flex items-center justify-around w-full">
          <label>
            <input
              type="radio"
              name="gender"
              value="ذكر"
              checked={formData.gender === "ذكر"}
              onChange={handleChange}
              className="mx-2"
            />
            ذكر
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="انثى"
              checked={formData.gender === "انثى"}
              onChange={handleChange}
              className="mx-2"
            />
            انثى
          </label>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default UserInformationForm;
