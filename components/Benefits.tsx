"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { programBenefits, programCategory } from "@/lib/data";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Button from "./Button";
import Toggle from "./Toggle";
import useReferralModal from "@/hooks/useReferralModal";

const Benefits = () => {
  const [active, setActive] = useState<number>(1);
  const referralModal = useReferralModal();

  return (
    <div id="id-benefits" className="my-10 mb-28">
      <MaxWidthWrapper>
        <div className="text-[28px] font-semibold leading-9 text-center mb-10">
          What Are The{" "}
          <span className="text-[#1A73E8]">Referral Benefits?</span>
        </div>

        {/* toggle */}
        <div className="flex justify-end my-4">
          <span className="text-xl leading-6 font-normal text-[#3C4852] mr-4">
            Enrolled
          </span>
          {/* Toggle */}

          <Toggle />
        </div>

        {/* Main table */}
        <div className="flex gap-x-2">
          <div className="w-1/4">
            <div className="max-w-[270px] shadow-container-shadow rounded-lg">
              {programCategory.map(
                ({ id, category }: { id: number; category: string }) => (
                  <div
                    key={id}
                    className={`p-2 cursor-pointer my-1 uppercase font-Roboto
                        ${id !== programCategory.length ? "border-b" : null} 
                        ${
                          active === id
                            ? "bg-[#1A73E8] text-white"
                            : "text-[#3C4852]"
                        }
                        ${id === 1 && "rounded-t-lg"}
                    `}
                    onClick={() => setActive(id)}
                  >
                    <div className="flex items-center justify-between font-semibold text-lg leading-7 px-2 ">
                      {category} <IoIosArrowForward />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="w-3/4">
            <table className="w-full border shadow-container-shadow">
              <thead className="">
                <tr className="cursor-pointer font-Roboto bg-[#1A73E859] text-[#1350A0] font-semibold text-xl leading-6 rounded-lg">
                  <th className="text-start p-3 rounded-t-lg rounded-r-none">
                    Programs
                  </th>
                  <th className="p-3 text-center border-l-2 border-r-2 border-black/20">
                    Refrrer Bonus
                  </th>
                  <th className="p-3 rounded-t-lg rounded-l-none text-center">
                    Referee Bonus
                  </th>
                </tr>
              </thead>

              <tbody className="bg-[#EBF3FF59]">
                {programBenefits.map((program) => {
                  return (
                    <tr
                      key={program.programs}
                      className=" font-normal text-lg text-[#3C4852]"
                    >
                      <td className="flex items-start max-w-[387px] p-3 leading-5 tracking-tight">
                        <img
                          src="assets/education.svg"
                          className="w-6 h-auto object-contain mr-2 mt-1.5"
                          alt="education logo"
                        />
                        {program.programs}
                      </td>
                      <td className="border-l-2 border-r-2 p-3 leading-5 tracking-tight text-center border-black/20">
                        {program.referrerBonus}
                      </td>

                      <td
                        className={`p-3 leading-5 tracking-tight text-center ${
                          program.id === programBenefits.length
                            ? " rounded-b-lg"
                            : null
                        }`}
                      >
                        {program.refereeBonus}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <Button className="w-[175px] h-10 flex justify-center bg-transparent text-[#B6B6B6] border-[#B6B6B6] border rounded-lg">
            Show More <IoIosArrowForward className="rotate-90 ml-3" />
          </Button>
        </div>

        <div className="flex justify-center mt-5">
          <Button
            onClick={() => referralModal.onOpen()}
            className="w-[236px] flex justify-center py-3"
          >
            Refer Now
          </Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Benefits;
