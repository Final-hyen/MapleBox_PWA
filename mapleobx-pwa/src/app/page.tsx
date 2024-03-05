"use client";
import Image from "next/image";
import search from "/public/img/search.webp";
export default function Home() {
  return (
    <div className="w-full flex flex-row items-center">
      <input
        className="flex-grow h-auto text-lg bg-[#EBEBEB] border-solid border-1 border-black pl-2"
        type="text"
        name="nickName"
        placeholder="캐릭터 닉네임을 입력해주세요"
      />
      <button>
        <Image width="20" height="20" src={search} alt="돋보기 이미지" />
      </button>
    </div>
  );
}
