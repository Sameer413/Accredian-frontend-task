import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Button from "./Button";
import { IoIosArrowDown } from "react-icons/io";

const MainNavbar = () => {
  return (
    <div className="py-4 h-20">
      <MaxWidthWrapper className="flex justify-between items-center">
        {/* Logo and courses button section*/}
        <div className="flex gap-x-8 items-center">
          <div className="">
            <Link href={"/"}>
              <img
                src="assets/accredianLogo.png"
                className="w-32 h-auto"
                alt="logo"
              />
            </Link>
          </div>

          <div className="">
            <Button>
              Courses <IoIosArrowDown className="ml-1" size={16} />
            </Button>
          </div>
        </div>

        {/* Navigation links section */}
        <div className="flex gap-x-8">
          <Button className="bg-transparent text-gray-900 px-0">
            Refer & Earn
          </Button>

          <Button className="bg-transparent text-gray-900 px-0">
            Resources
          </Button>

          <Button className="bg-transparent text-gray-900 px-0">
            About Us
          </Button>

          <div className="flex gap-x-4">
            <Link href={"https://home.accredian.com/login"} target="_blank">
              <Button className="bg-slate-400/20 text-gray-900">Login</Button>
            </Link>

            <Link href={"https://trial.accredian.com/"} target="_blank">
              <Button>Try for free</Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default MainNavbar;
