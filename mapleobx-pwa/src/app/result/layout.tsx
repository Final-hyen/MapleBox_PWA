"use client";
import axios from "axios";
import { getInfo } from "@/api/nexonAPI";
import { useEffect, useState } from "react";
import "./../globals.css";

interface Info {
  [key: string]: any;
}

export default function Home({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [infoData, setInfoData] = useState<Info | null>(null);
  const [stat, setStat] = useState<Info | null>(null);
  const [union, setUnion] = useState<Info | null>(null);
  const [dojang, setDojang] = useState<Info | null>(null);
  const [popularity, setPopularity] = useState<Info | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [basicInfo, stat, union, dojang, popularity] = await axios.all([
          getInfo("character/basic"),
          getInfo("character/stat"),
          getInfo("user/union"),
          getInfo("character/dojang"),
          getInfo("character/popularity"),
        ]);
        setInfoData(basicInfo);
        setUnion(union);
        setDojang(dojang);
        setPopularity(popularity);
        localStorage.setItem("stat", JSON.stringify(stat.final_stat));
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
    fetchData();
  }, []);

  const isClickDetail = (e: React.MouseEvent) => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  console.log(infoData);
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
              <li>
                <span>무릉도장</span>
                <span id="info">
                  {dojang?.dojang_best_floor !== 0
                    ? `${dojang?.dojang_best_floor}층`
                    : "-"}
                </span>
              </li>
              <li className="">
                <span>인기도</span>
                <span id="info">{popularity?.popularity}</span>
              </li>
            </ol>
            <img src={infoData?.character_image} alt="character_img" />
            <ol className="ol-list">
              <li id="clan">길드 정보</li>
              <li>
                <span>길드</span>
                <span id="info">
                  {infoData?.character_guild_name == null
                    ? "-"
                    : `${infoData?.character_guild_name}`}
                </span>
              </li>
              <li>
                <span>연합</span>
                <span id="info">-</span>
              </li>
            </ol>
          </div>
        </div>
        <div className="h-[27px] bg-[#A5B1BC] mt-[16px] font-semibold text-center rounded-md text-blue-500">
          <button className="cursor-pointer w-full" onClick={isClickDetail}>
            DETAIL
          </button>
        </div>
      </div>
      {isOpen ? (
        <div>{children}</div>
      ) : (
        <div>result</div>
      )}
    </>
  );
}
