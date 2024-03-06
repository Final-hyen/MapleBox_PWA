"use client";
import Image from "next/image";
import search from "/public/img/search.webp";
export default function Home() {
  return (
    <div className="flex-1 h-full bg-[#C5EBAA]">
      <div className="flex justify-between lg:justify-center">
        <div className="flex w-[500px] flex-col gap-[13px] rounded-[10px] p-[30px]">
          <div className="flex w-full flex-col gap-[8px] px-[48px] mo:px-[24px]">
            <div className="relative">
              <input
                className="flex-grow w-full h-[44px] rounded-[2px] bg-[#EBEBEB] p-[15px_30px_15px_12px]"
                type="text"
                name="nickName"
                placeholder="캐릭터 닉네임을 입력해주세요"
              />
              <button>
                <Image
                  className="absolute right-[13px] top-[13px] w-[18px]"
                  src={search}
                  alt="돋보기 이미지"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
