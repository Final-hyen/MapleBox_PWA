"use client";
import Image from "next/image";
import search from "/public/img/search.webp";
import { getOcid } from "@/api/nexonAPI";
import { FormEvent, useEffect, useState } from "react";
import moment from "moment";
import { useRecoilState } from "recoil";
import { dateState } from "@/recoil/atom";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useRecoilState(dateState);
  const isClickSearch = (e: FormEvent) => {
    e.preventDefault();
    getOcid(name);
  };
  console.log(date, name);
  useEffect(() => {
    const today = moment().format("YYYY-MM-DD");
    setDate(today);
  }, [setDate]);

  return (
    <div className="h-[980px] flex justify-center items-center bg-[#C5EBAA]">
      <div className="flex w-[500px] flex-col gap-[13px] rounded-[10px] p-[30px]">
        <h2 className="text-center font-bold text-[72px]">Couble</h2>
        <div className="flex w-full flex-col gap-[8px]">
          <form onSubmit={isClickSearch}>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
            <div className="relative">
              <input
                className="flex-grow w-full h-[52px] rounded-[2px] bg-[#EBEBEB] p-[15px_30px_15px_12px]"
                type="text"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="캐릭터 닉네임을 입력해주세요"
              />
              <button type="submit">
                <Image
                  className="absolute right-[13px] top-[13px] w-[25px]"
                  src={search}
                  alt="돋보기 이미지"
                />
              </button>
            </div>
          </form>
        </div>
        <div className="m-[5px] text-center text-[15px] font-semibold">
          <p className="text-red-500">
            * 넥슨 API 데이터는 어제까지의 정보만 제공됩니다.
          </p>
          <p>* 닉네임은 대소문자 구분이 필요합니다.</p>
        </div>
      </div>
    </div>
  );
}
