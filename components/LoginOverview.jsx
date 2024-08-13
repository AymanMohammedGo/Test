import Image from "next/image";

const LoginOverview = () => {
  return (
    <>
      <Image
        src="/login.png"
        width={300}
        height={600}
        alt="imgLogin"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 text-center text-white w-full p-8   ">
        <h1 className="font-semibold text-5xl mb-8">تسجيل الدخول</h1>
        <p className="text-xs text-white/70 mb-8">شرح بسيط</p>
      </div>
    </>
  );
};

export default LoginOverview;
