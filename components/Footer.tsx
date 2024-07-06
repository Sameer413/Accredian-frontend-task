import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "./Button";
import { footer } from "@/lib/data";
import {
  FaInstagram,
  FaLinkedin,
  FaPlus,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#282828] text-white h-full py-8">
      <MaxWidthWrapper className="max-w-[1200px]">
        <div className="flex justify-between">
          <div className="">
            <img
              src="assets/logoWhite.png"
              className="w-36 h-auto"
              alt="logo"
            />
          </div>

          <div className="mx-16 text-center">
            <Button className="px-10 border-white border rounded-lg">
              Schedule 1-on-1 Call Now
            </Button>
            <span className="font-normal leading-5 text-sm">
              Speak with our Learning Advisor
            </span>
          </div>
        </div>

        {/* Seperator */}
        <div className="border-t mt-8"></div>

        <div className="pt-8 grid grid-cols-3 w-full">
          {/* Programs Section */}
          <div className="pr-8">
            <div className="text-xl leading-[30px] px-3">Programs</div>

            {footer.programs.map((item: string, i: number) => (
              <div
                key={i}
                className="flex items-center p-3 my-1 text-base font-bold justify-between cursor-pointer"
              >
                {item} <FaPlus />
              </div>
            ))}
          </div>
          {/* Contact Us Section */}
          <div className="">
            <div className="text-xl leading-[30px] px-3">Contact Us</div>
            <div className="flex flex-col gap-y-1 pt-3">
              {footer.ContactUs.map((item: string, i: number) => (
                <div
                  key={i}
                  className="text-sm font-normal px-3 leading-5 tracking-[0.13px]"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="px-3 text-lg">Why Accredian</div>
            <div className="px-3 text-xl font-light">Follow Us</div>
            <div className="flex px-3">
              <Link href={"/"} className="mr-4 cursor-pointer">
                <FaFacebookSquare size={28} />
              </Link>
              <Link href={"/"} className="mr-4 cursor-pointer">
                <FaLinkedin size={28} />
              </Link>
              <Link href={"/"} className="mr-4 cursor-pointer">
                <FaTwitter size={28} />
              </Link>
              <Link href={"/"} className="mr-4 cursor-pointer">
                <FaInstagram size={28} />
              </Link>
              <Link href={"/"} className="mr-4 cursor-pointer">
                <FaYoutube size={28} />
              </Link>
            </div>
          </div>

          {/* Accredian Section */}
          <div className="pr-8">
            <div className="text-xl leading-[30px] px-3">Accredian</div>

            <div className="pt-3">
              {footer.Accredian.map((item: string, i: number) => (
                <div
                  key={i}
                  className="text-sm font-normal px-3 leading-5 tracking-[0.13px]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-10 text-sm leading-5 text-center">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved.
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
