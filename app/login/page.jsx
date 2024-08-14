import LoginForm from "@/components/LoginForm";
import LoginOverview from "@/components/LoginOverview";
const page = () => {
  return (
    <div className="max-w-screen-xl  h-[800px]  flex my-12  m-auto">
      <div className="bg-white w-2/3 h-full flex flex-col justify-between ">
        <LoginForm />
      </div>
      <div className="w-1/3 h-full relative">
        <LoginOverview />
      </div>
    </div>
  );
};

export default page;
