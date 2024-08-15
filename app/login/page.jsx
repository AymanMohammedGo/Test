import LoginForm from "@/components/LoginForm";
import LoginOverview from "@/components/LoginOverview";
const page = () => {
  return (
    <div className="max-w-screen-xl h-full lg:h-[800px]  flex lg:my-12 flex-col lg:flex-row mx-auto ">
      <div className="bg-white w-full lg:w-2/3 h-full flex flex-col justify-between ">
        <LoginForm />
      </div>
      <div className="w-full lg:w-1/3 h-full relative">
        <LoginOverview />
      </div>
    </div>
  );
};

export default page;
