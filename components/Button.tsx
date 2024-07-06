import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={twMerge(
          `border-transparent px-[18px] py-2 font-medium hover:opacity-85 transition-all bg-[#1A73E8] rounded-md flex items-center text-white leading-6`,
          className
        )}
        type={type}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;