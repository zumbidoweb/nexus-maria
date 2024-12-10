import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/utils/shadcn"

const badgeVariants = cva(
  "inline-flex items-center rounded-none uppercase font-serif  px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300 dark:text-white ",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-900 text-neutral-50  hover:bg-neutral-900/80 dark:bg-neutral-50  dark:hover:bg-neutral-50/80",
        secondary:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800  dark:hover:bg-neutral-800/80",
        destructive:
          "bg-red-500 text-neutral-50  hover:bg-red-500/80 dark:bg-red-900  dark:hover:bg-red-900/80",
        outline: "text-neutral-950 dark:text-neutral-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}

export { Badge, badgeVariants }
