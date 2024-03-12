"use client";
import { getBasicInfo } from "@/api/nexonAPI";
import { useEffect } from "react";

export default function Home() {
  let resData;
  console.log(localStorage.getItem("ocid"));
  useEffect(() => {
    resData = getBasicInfo();
  }, []);
  return (
    <>
      <div>결과 페이지</div>
      <div>{resData}</div>
    </>
  );
}
