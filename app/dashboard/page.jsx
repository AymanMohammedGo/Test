"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";
import AdminNavBar from "@/components/ui/AdminNavBar";
import AdminStatistics from "@/components/AdminStatistics";
import AllSurveysTable from "@/components/AllSurveysTable";
import TableNavBar from "@/components/ui/TableNavBar";

const Dashborad = () => {
  const router = useRouter();
  const token = useSelector((state) => state.auth.token);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   if (!token) {
  //     router.push("/login");
  //   }
  // }, [token, router]);
  const FetchAllPollsData = async () => {
    const url = "https://test.omar.rs4it.com/poll";
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        const data = await response.json();
        setData(data.data);
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    FetchAllPollsData();
  }, []);
  return (
    <div className="max-w-screen-xl  h-[800px]  flex my-12  m-auto">
      <div className="bg-white w-[80%] h-full flex flex-col   px-12 py-8">
        <AdminNavBar />
        <AdminStatistics />
        <div className="p-5 shadow-custom rounded-2xl h-full">
          <TableNavBar />
          <AllSurveysTable data={data} setData={setData} />
        </div>
      </div>
      <div className="w-[20%] h-full relative">
        <Image
          src="/login.png"
          width={300}
          height={600}
          alt="imgLogin"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Dashborad;
