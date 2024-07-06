import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "./Button";
import { IoIosArrowForward } from "react-icons/io";

const Support = () => {
  return (
    <div id="id-support" className="mb-10">
      <MaxWidthWrapper className="bg-[#1A73E8] rounded-xl h-[210px] overflow-hidden">
        <div className="flex justify-between items-center h-[210px] bg-getInTouchBg bg-contain bg-no-repeat bg-bottom bg-right p-14">
            
          <div className="flex gap-x-5 items-center">
            <img src="assets/service.svg" alt="service image" />

            <div className="text-white">
              <div className="font-semibold text-[28px]">
                Want to delve deeper into the program?
              </div>
              <div className="font-medium leading-7">
                Share your details to receive expert insights from our program
                team!
              </div>
            </div>
          </div>
          <div className="">
            <Button className="bg-white text-[#1A73E8] font-Roboto">
              Get in touch <IoIosArrowForward size={20} className="ml-1" />
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Support;
