import { ButtonHTMLAttributes, forwardRef } from "react";

import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  `inline-flex items-center justify-center text-lg font-medium transition-colors
   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 
   focus-visible:ring-offset-2 active:scale-95 disabled:cursor-not-allowed  
   disabled:opacity-50 border disabled:active:scale-100`,
  {
    variants: {
      variant: {
        default: `bg-gray-900 dark:bg-slate-400 text-white border-gray-900
         dark:border-slate-400`,
        outline:
          "bg-transparent dark:hover:bg-slate-400 border-gray-900 dark:border-slate-400 hover:text-white",
      },
      size: {
        lg: "py-3 px-9 rounded-2xl",
        default: "py-1 px-7 rounded-2xl",
        sm: "py-1 px-4 rounded-2xl",
      },
      animation: {
        none: "",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
      },
      isLoading: {
        none: "",
        progress: "disabled:cursor-progress",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
      isLoading: "none",
    },
  }
);

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    { className, size, variant, animation, isLoading, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, animation, className, isLoading })
        )}
        {...props}
      >
        {isLoading === "progress" && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
