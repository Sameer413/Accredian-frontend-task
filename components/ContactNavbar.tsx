import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const ContactNavbar = () => {
  return (
    <div className="bg-[#1A73E826] py-4">
      <MaxWidthWrapper className="text-center font-medium leading-7 text-gray-800">
        Navigate your ideal career path with tailored expert advice{" "}
        
        <Link href={"/"} className="text-[#1A73E8] ml-2 font-medium">
          Contact Expert
        </Link>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactNavbar;

// width: Fill (1,920px)px;
// height: Hug (60px)px;
// padding: 16px 648.04px 16px 648.05px;
// gap: 0px;
// opacity: 0px;
