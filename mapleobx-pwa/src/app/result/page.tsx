"use client";
import { getBasicInfo } from "@/api/nexonAPI";
import { useEffect, useRef, useState } from "react";

interface BasicInfo {
  [key: string]: any;
}

export default function Home() {
  const [infoData, setInfoData] = useState<BasicInfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: BasicInfo = await getBasicInfo();
        setInfoData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(infoData);
  return (
    <>
      <div className="px-[11px] pb-[18px] flex flex-wrap flex-col items-stretch justify-evenly w-[654px] h-[300px] bg-[#383638] -z-1 w-632">
        <div className="flex-2 h-[205px] bg-white mt-[27px]"></div>
        <div className="h-[27px] bg-white mt-[16px] text-center">
          <button className="cursor-pointer w-full">DETAIL</button>
        </div>
      </div>
    </>
  );
}
