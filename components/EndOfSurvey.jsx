import Image from "next/image";

const EndOfSurvey = ({ des }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Image
        className="ml-20"
        src="/done.png"
        width={350}
        height={350}
        alt="done"
      ></Image>
      <h1 className="font-semibold text-primary text-5xl mb-5"> تم الانتهاء</h1>
      <p className="text-base text-secondary mb-8">{des}</p>
    </div>
  );
};

export default EndOfSurvey;
