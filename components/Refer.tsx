"use client";
import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import useReferralModal from "@/hooks/useReferralModal";

const mapData = [
  {
    label: "Refer",
    to: "#id-refer",
    active: true,
  },
  {
    label: "Benefits",
    to: "#id-benefits",
  },
  {
    label: "FAQs",
    to: "#id-faqs",
  },
  {
    label: "Support",
    to: "#id-support",
  },
];

const Refer = () => {
  const [active, setActive] = useState<number>(0);
  const referModal = useReferralModal();

  return (
    <section className="h-full">
      <div className="flex justify-center h-full">
        <div className="flex items-start justify-center bg-[#1A73E826] px-10 pt-4 pb-2 rounded-full gap-x-10">
          {mapData.map(({ label, to, active }) => (
            <Link
              key={label}
              href={`${to}`}
              className={`text-2xl flex flex-col items-center font-normal leading-[22px] px-2 font-Roboto ${
                active ? "text-[#1A73E8]" : null
              }`}
            >
              {label}
              {active ? (
                <div className="h-2 w-2 bg-[#1A73E8] rounded-full"></div>
              ) : null}
            </Link>
          ))}
        </div>
      </div>

      {/* Section */}
      <div className="bg-[#EEF5FF] my-6 rounded-[29px] flex items-center relative overflow-hidden shadow-container-shadow h-[692px]">
        <div className="w-[40%] p-10">
          <img
            src="assets/cash.png"
            className="w-[157px] absolute bg-blend-multiply rotate-[100deg] left-2 -top-10"
            alt="cash image"
          />
          <div className="flex flex-col gap-y-6">
            <div className="font-Roboto font-bold text-[88px] leading-[88px] text-[#1A202C] tracking-tight">
              {"Let's Learn & Earn"}
            </div>

            <div className="text-[40px] font-normal leading-[65px] font-Roboto text-[#1A202C]">
              get a chance to win <br /> up-to{" "}
              <span className="text-[54px] font-bold leading-[65px] font-Roboto text-[#1A73E8]">
                Rs. 15,000
              </span>
            </div>
          </div>
          <Button onClick={() => referModal.onOpen()} className="mt-10 px-10">
            Refer Now
          </Button>
        </div>

        <div className="w-[60%] h-full relative">
          <img
            src="assets/cash.png"
            className="w-[157px] absolute bg-blend-multiply -rotate-[70deg] left-[3%] bottom-[5%] z-20"
            alt=""
          />
          <img
            src="assets/cash.png"
            className="w-[157px] absolute bg-blend-multiply rotate-180 right-2 -top-14"
            alt="cash image"
          />
          <img
            src="assets/cash.png"
            className="w-[157px] absolute bg-blend-multiply rotate-[100deg] -right-[2%] bottom-[35%] z-0"
            alt=""
          />
          <img
            src="assets/cash.png"
            className="w-[157px] absolute bg-blend-multiply rotate-180 left-[23%] top-[3%] z-0"
            alt=""
          />

          <img
            src="assets/hero.png"
            className="w-full h-auto absolute bottom-0"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Refer;
