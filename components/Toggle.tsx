import React from "react";

const Toggle = () => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input type="checkbox" value="" className="sr-only peer" />
      <div
        className="
      relative
      w-11
      h-6
      outline
    outline-[#3C4852]
      rounded-full
      peer
    bg-white
      peer-checked:after:translate-x-full
      rtl:peer-checked:after:-translate-x-full
      peer-checked:after:border-white
      after:content-['']
      after:absolute
      after:top-[2px]
      after:start-[2px]
      after:bg-[#1A73E8]
      after:border-gray-300
      after:border
      after:rounded-full
      after:h-5
      after:w-5
      after:transition-all
      "
      ></div>
    </label>
  );
};

export default Toggle;
