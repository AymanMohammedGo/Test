"use client";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../app/store/slices/authSlice";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://test.omar.rs4it.com/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.data.token) {
        dispatch(loginSuccess(data.data.token));
        router.push("/dashboard");
      } else {
        setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      }
    } catch (err) {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    }
    setLoading(false);
  };
  return (
    <div className="py-24  px-[60px]">
      <h1 className="font-light text-8xl mb-28">أهلن بك</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col  ">
          <label htmlFor="name" className="font-semibold text-lg mb-4 ">
            أسم المستخدم او الإيميل
          </label>
          <input
            placeholder="youremail@guru.com"
            type="text"
            id="name"
            name="name"
            className=" w-full px-2 py-4 border-none  bg-[#F5F7F8]"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col relative">
          <div className="flex items-center justify-between mb-4">
            <label htmlFor="password" className="font-semibold text-lg ">
              كلمة المرور
            </label>
            <Link href="#" className="text-secondary  text-sm ">
              نسيت كلمة المرور؟
            </Link>
          </div>

          <div className="relative">
            <input
              placeholder="أدخل كلمة المرور"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-2 py-4 border-none bg-[#F5F7F8] pl-10"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 left-5 flex items-center pr-3 text-secondary"
            >
              {showPassword ? (
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
                  class="lucide lucide-eye"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
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
                  class="lucide lucide-eye-off"
                >
                  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                  <path d="m2 2 20 20" />
                </svg>
              )}
            </span>
          </div>
        </div>

        <button
          disabled={loading ? true : false}
          type="submit"
          className="w-full font-bold text-lg px-2 py-4 bg-primary text-white"
        >
          {loading ? "جاري تسجيل الدخول..." : "تسجيل دخول"}
        </button>
      </form>
      {error && <p className="text-red-600 mt-3">{error}</p>}

      <p className="text-secondary my-10 text-lg">
        ليس لديك حساب ؟{" "}
        <Link href="#" className="text-primary">
          {" "}
          تواصل معنا
        </Link>
      </p>
      <div className="flex items-center justify-center text-sm">
        <Link href="#" className="mx-3">
          شروط الخصوصية
        </Link>
        <Link href="#" className="mx-3">
          الدعم الفني
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
