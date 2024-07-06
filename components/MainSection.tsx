'use client'
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "./Button";
import Refer from "./Refer";
import Support from "./Support";
import Benefits from "./Benefits";
import FAQ from "./FAQ";
import useReferralModal from "@/hooks/useReferralModal";

const MainSection = () => {
  const referralModal = useReferralModal();

  return (
    <section className="">
      <MaxWidthWrapper className="h-auto">
        <Refer />
      </MaxWidthWrapper>

      <div className="bg-[#EEF5FF] my-4">
        <MaxWidthWrapper>
          <div className="py-8 font-Roboto font-semibold text-3xl text-center">
            How Do I <span className="text-[#1A73E8]">Refer?</span>
          </div>

          <div className="relative bg-referImg w-full bg-contain bg-no-repeat h-[491px] flex justify-around items-center">
            <div className="flex items-center justify-center flex-col absolute left-[14%] top-[30%]">
              <img src="assets/addFriend.svg" alt="addFriend image" />

              <div className="w-[193px] font-Roboto text-center leading-[22px] font-normal my-4">
                {"Submit referrals easily via our website's referral section."}
              </div>
            </div>

            <div className="flex items-center justify-center flex-col absolute top-[30%]">
              <img src="assets/clipBoard.svg" alt="clipBoard image" />

              <div className="w-[193px] font-Roboto text-center leading-[22px] font-normal my-4">
                Earn rewards once your referral joins an Accredian program.
              </div>
            </div>

            <div className="flex items-center justify-center flex-col absolute right-[15%] top-[30%]">
              <img src="assets/wallet.svg" alt="wallet image" />

              <div className="w-[193px] font-Roboto text-center leading-[22px] font-normal my-4">
                Both parties receive a bonus 30 days after program enrollment.
              </div>
            </div>
          </div>

          <div className="flex justify-center py-1 pb-5">
            <Button
              onClick={() => referralModal.onOpen()}
              className="text-xl font-normal font-Roboto leading-6 px-8"
            >
              Refer Now
            </Button>
          </div>
        </MaxWidthWrapper>
      </div>

      <Benefits />
      <FAQ />

      <Support />
    </section>
  );
};

export default MainSection;
