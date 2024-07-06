"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "./Button";
import { IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  const [active, setActive] = useState<boolean>(true);
  const [active1, setActive1] = useState<boolean>(false);

  return (
    <div id="id-faqs" className="my-10">
      <MaxWidthWrapper>
        <div className="text-[28px] font-semibold leading-9 text-center mb-10">
          Frequently Asked <span className="text-[#1A73E8]">Questions</span>
        </div>

        <div className="flex">
          <div className="w-1/4">
            <Button
              className={`my-5 w-[259px] flex justify-center py-5 font-semibold leading-7 ${
                true
                  ? "bg-white text-[#1A73E8] shadow-button-shadow"
                  : "bg-transparent border-2 border-[#737373] text-[#737373]"
              } `}
            >
              Eligibility
            </Button>

            <Button className="my-5 w-[259px] flex justify-center py-5 bg-transparent border-2 border-[#737373] text-[#737373] font-semibold leading-7">
              How To Use?
            </Button>
            <Button className="my-5 w-[259px] flex justify-center py-5 bg-transparent border-2 border-[#737373] text-[#737373] font-semibold leading-7">
              Terms & Conditions
            </Button>
          </div>

          <div className="w-3/4 my-5">
            <div className="select-none">
              <div
                onClick={() => setActive(!active)}
                className={`py-5 font-semibold leading-7  flex items-center justify-between cursor-pointer ${
                  active && "text-[#1A73E8]"
                }`}
              >
                <div className="">
                  Do I need to have prior Product Management and Project
                  Management experience to enroll in the program?
                </div>
                <IoIosArrowUp
                  color="#737373"
                  size={20}
                  className={`mr-8 ${
                    active ? "rotate-180" : "rotate-0"
                  } transition-all ease-linear duration-150`}
                />
              </div>
              {active ? (
                <div className="pl-3 font-normal leading-6 cursor-default">
                  No, the program is designed to be inclusive of all levels of
                  experience. All topics will be covered from the basics, making
                  it suitable for individuals from any field of work.
                </div>
              ) : null}
            </div>
            <div className="select-none">
              <div
                onClick={() => setActive1(!active1)}
                className={`py-5 font-semibold leading-7  flex items-center justify-between cursor-pointer ${
                  active1 && "text-[#1A73E8]"
                }`}
              >
                <div className="">
                  Do I need to have prior Product Management and Project
                  Management experience to enroll in the program?
                </div>
                <IoIosArrowUp
                  color="#737373"
                  size={20}
                  className={`mr-8 ${
                    active1 ? "rotate-180" : "rotate-0"
                  } transition-all ease-linear duration-150`}
                />
              </div>
              {active1 ? (
                <div className="pl-3 font-normal leading-6 cursor-default">
                  Information will be field soon.
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default FAQ;
