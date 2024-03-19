"use client";
import { getBasicInfo, getStatInfo, getUnion } from "@/api/nexonAPI";
import { useEffect, useState } from "react";
import "./../globals.css";

interface BasicInfo {
  [key: string]: any;
}
interface UnionInfo {
  [key: string]: any;
}
export default function Home() {
  const [infoData, setInfoData] = useState<BasicInfo | null>(null);
  const [stat, setStat] = useState<Object | null>(null);
  const [union, setUnion] = useState<UnionInfo | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const info: BasicInfo = await getBasicInfo();
        setInfoData(info);
        const stats = await getStatInfo();
        setStat(stats);
        const unions = await getUnion();
        setUnion(unions);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const isClickDetail = (e: React.MouseEvent) => {
    setIsOpen(!isOpen);
  };

  console.log(infoData, stat);
  return (
    <>
      <div className="absolute top-[120px] px-[11px] pb-[18px] flex flex-wrap flex-col items-stretch justify-evenly w-[654px] h-[300px] bg-[#383638] -z-1 w-632 rounded-md">
        <div className="h-[205px] bg-[#FFFFFF] mt-[27px] rounded-md">
          <p className="mx-auto w-[125px] h-[27px] text-center bg-[#778088] text-gray-200 rounded-b-md">
            Lv.{infoData?.character_level}
          </p>
          <p className="absolute top-[42px] left-[20px] w-[161px] h-[28px] bg-[#778088] text-center text-gray-200 rounded-full align-middle leading-7">
            {infoData?.character_class}
          </p>
          <div className="flex flex-row absolute bottom-[90px] justify-between left-[20px] right-[20px]">
            <ol className="ol-list">
              <li className="">
                <span>유니온</span>
                <span id="info">{union?.union_level}</span>
              </li>
              <li className="">무릉도장</li>
              <li className="">인기도</li>
            </ol>
            <img src={infoData?.character_image} alt="character_img" />
            <ol className="ol-list">
              <li id="clan"></li>
              <li>
                <span>길드</span>
                <span id="info">{infoData?.character_guild_name}</span>
              </li>
              <li>연합</li>
            </ol>
          </div>
        </div>
        <div className="h-[27px] bg-[#A5B1BC] mt-[16px] font-semibold text-center rounded-md text-blue-500">
          <button className="cursor-pointer w-full" onClick={isClickDetail}>
            DETAIL
          </button>
        </div>
      </div>
    </>
  );
}
