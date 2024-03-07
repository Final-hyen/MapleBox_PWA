"use client";
import Image from "next/image";
import search from "/public/img/search.webp";
import { getOcid } from "@/api/nexonAPI";
import { FormEvent, useState } from "react";
export default function Home() {
  const [name, setName] = useState<string>("")
  const isClickSearch = (e: FormEvent) => {
    e.preventDefault();
    getOcid(name);
  };
  return (
    <div className="h-[980px] flex justify-center bg-[#C5EBAA]">
      <div className="flex justify-center items-center">
        <div className="flex w-[500px] flex-col gap-[13px] rounded-[10px] p-[30px]">
          <h2 className="text-center font-bold text-[72px]">Couble</h2>
          <div className="flex w-full flex-col gap-[8px]">
            <div className="relative">
              <form onSubmit={isClickSearch}>
                <input
                  className="flex-grow w-full h-[52px] rounded-[2px] bg-[#EBEBEB] p-[15px_30px_15px_12px]"
                  type="text"
                  name="name"
                  onChange={(e) => {setName(e.target.value)}}
                  placeholder="캐릭터 닉네임을 입력해주세요"
                />
                <button type="submit">
                  <Image
                    className="absolute right-[13px] top-[13px] w-[25px]"
                    src={search}
                    alt="돋보기 이미지"
                  />
                </button>
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
      </div>
    </div>
  );
}
