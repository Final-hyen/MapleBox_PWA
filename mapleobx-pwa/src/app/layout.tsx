import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import Mark from "/public/img/Mark.png";
import RecoilRootWrapper from "@/recoil/RecoilWrapper";

export const metadata: Metadata = {
  title: "Maple Cube",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="my-2 h-[50px] w-full bg-white">
          <ol className="flex h-full items-center justify-between">
            <li className="m1-16 flex h-full items-center gap-[45px] text-[21px]">
              <Link className="flex flex-row font-bold items-center" href={`/`}>
                <Image
                  className="w-[48px] h-[48px] m-[10px]"
                  src={Mark}
                  alt="마크 이미지"
                />
                Cuoble
              </Link>
              <Link className="mr-10 hover:text-blue-600" href={`/result`}>
                결과
              </Link>
              <Link className="hover:text-blue-600" href={`/cube`}>
                큐브 시뮬레이터
              </Link>
            </li>
          </ol>
        </header>
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
        <footer className="flex flex-col items-center justify-center text-center text-[18px] bg-[#A5DD9B] text-gray-50 h-[100px]">
          <p>
            Copyright 2024. 스카니아@풀타수집, all rights reserved. Cuogle is
            not associated with NEXON Korea.
          </p>
          <p>contact: jwx9797@gmail.com</p>
        </footer>
      </body>
    </html>
  );
}
