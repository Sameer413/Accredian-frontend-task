"use client";
import useReferralModal from "@/hooks/useReferralModal";
import Button from "./Button";
import { FaPlus } from "react-icons/fa6";
import Input from "./Input";
import { FormEvent, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

type ReferType = {
  referrerName: string;
  referrerEmail: string;
  referrerPhone: string;
  referrerRelationship: string;
  refereeName: string;
  refereeEmail: string;
  refereePhone: string;
  courseInterest: string;
  message: string;
};

const ReferralModal = () => {
  const referralModal = useReferralModal();
  const [referral, setReferral] = useState<ReferType>({
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",
    referrerRelationship: "",
    refereeName: "",
    refereeEmail: "",
    refereePhone: "",
    courseInterest: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const resp = await axios.post(
        // "https://accredian-backend-task-7n6s52pif-sameer844s-projects.vercel.app/create-referral",
        "https://accredian-backend-task-tua8.onrender.com/create-referral",
        referral,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      
      toast.success("Referred Successfully!");
      setReferral({
        // Reset referral state to initial values
        referrerName: "",
        referrerEmail: "",
        referrerPhone: "",
        referrerRelationship: "",
        refereeName: "",
        refereeEmail: "",
        refereePhone: "",
        courseInterest: "",
        message: "",
      });

      referralModal.onClose();
    } catch (error) {
      console.error("Error submitting referral:", error);
      toast.error("Failed to refer. Please try again later.");
    }
  };

  return (
    <div
      className={
        referralModal.isOpen
          ? "flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none bg-neutral-800/70 z-50"
          : "hidden"
      }
    >
      <div className="w-2/5 bg-white p-6 rounded-lg shadow-container-shadow">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold font-Roboto uppercase">
            Submit Referral
          </div>
          <FaPlus
            onClick={referralModal.onClose}
            className="rotate-45 cursor-pointer"
            size={24}
          />
        </div>

        <form onSubmit={handleSubmit} className="mt-4 w-full">
          <div className="flex justify-between">
            <Input
              placeholder="Referrer Name"
              className="w-[45%]"
              value={referral.referrerName}
              onChange={(e) =>
                setReferral({ ...referral, referrerName: e.target.value })
              }
            />

            <Input
              placeholder="Referrer Email"
              className="w-[45%]"
              value={referral.referrerEmail}
              onChange={(e) =>
                setReferral({ ...referral, referrerEmail: e.target.value })
              }
            />
          </div>

          <div className="flex justify-between mt-4">
            <Input
              placeholder="Referrer Phone"
              className="w-[45%]"
              value={referral.referrerPhone}
              onChange={(e) =>
                setReferral({ ...referral, referrerPhone: e.target.value })
              }
            />
            <Input
              placeholder="Referrer Relationship"
              className="w-[45%]"
              value={referral.referrerRelationship}
              onChange={(e) =>
                setReferral({
                  ...referral,
                  referrerRelationship: e.target.value,
                })
              }
            />
          </div>

          <div className="flex justify-between mt-4">
            <Input
              placeholder="Referee Name"
              className="w-[45%]"
              value={referral.refereeName}
              onChange={(e) =>
                setReferral({ ...referral, refereeName: e.target.value })
              }
            />
            <Input
              placeholder="Referee Email"
              className="w-[45%]"
              value={referral.refereeEmail}
              onChange={(e) =>
                setReferral({ ...referral, refereeEmail: e.target.value })
              }
            />
          </div>

          <div className="flex justify-between mt-4">
            <Input
              placeholder="Referee Phone"
              className="w-[45%]"
              value={referral.refereePhone}
              onChange={(e) =>
                setReferral({ ...referral, refereePhone: e.target.value })
              }
            />
            <Input
              placeholder="Course Interest"
              className="w-[45%]"
              value={referral.courseInterest}
              onChange={(e) =>
                setReferral({ ...referral, courseInterest: e.target.value })
              }
            />
          </div>

          <Input
            type="text"
            placeholder="Message"
            className="mt-4"
            value={referral.message}
            onChange={(e) =>
              setReferral({ ...referral, message: e.target.value })
            }
          />

          <div className="flex justify-center mt-4">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferralModal;
