import { InputHTMLAttributes, forwardRef } from "react";

import { cn } from "@/utils/cn";

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full border-b-2",
          "border-purple bg-transparent px-1 py-2 text-sm font-light",
          "placeholder:text-gray-900 focus-visible:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
