"use client";

import Image from "next/image";
import Link from "next/link";

import Eggs from "./Eggs";

export default function Footer() {
  return (
    <footer className="flex flex-col content-center justify-center bg-[#262626] py-[48px]">
      <div className="copy flex justify-center gap-[4px]">
        <p className="text-[#808080]">made with</p>
        <Eggs />
        <p className="text-[#808080]">by</p>
      </div>
      <div className="flex justify-center">
        <Link href="https://lacrypta.ar/" target="_blank">
          <Image
            src="/la-crypta-logo.svg"
            alt="LaCrypta logo"
            width={135}
            height={30}
          />
        </Link>
      </div>
    </footer>
  );
}
