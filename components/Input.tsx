import React, { ButtonHTMLAttributes, forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ children, className, disabled, type = "text", ...props }, ref) => {
    return (
      <input
        className={twMerge(
          `border-b border-black w-full my-2 outline-none font-Roboto font-medium text-base p-1`,
          className
        )}
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
