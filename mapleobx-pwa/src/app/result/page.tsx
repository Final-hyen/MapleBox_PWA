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
      try{
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
      <div>결과 페이지</div>
    </>
  );
}
