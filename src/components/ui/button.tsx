import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {cva, type VariantProps} from "class-variance-authority";
import {ArrowUpRight} from "lucide-react";

import {cn} from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        withArrow:
          "bg-tertiary-green flex items-center justify-center text-primary-foreground rounded-[999px] shadow-xs",
        withoutArrow:
          "bg-quaternary-green flex items-center justify-center text-primary-green rounded-[999px] shadow-xs",
        withArrowPurple:
          "bg-primary-purple flex items-center justify-center text-primary-foreground rounded-[999px] shadow-xs",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    withAnimatedArrow?: boolean;
    arrowSize?: number;
    arrowColor?: string;
    arrowContainerClassName?: string;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  withAnimatedArrow = false,
  arrowSize = 42,
  arrowColor = "#ffffff",
  arrowContainerClassName = "ml-3.5 flex p-6 items-center justify-center rounded-[999px] bg-white/25 relative overflow-hidden",
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({variant, size, className}))}
      {...props}
    >
      {children}
      {withAnimatedArrow && (
        <div className={arrowContainerClassName}>
          <ArrowUpRight
            className={`size-[${arrowSize}px] text-white absolute transition-all duration-500 delay-[10ms] translate-x-0 translate-y-0 opacity-100 group-hover:translate-x-full group-hover:-translate-y-full group-hover:opacity-0`}
            size={arrowSize}
            color={arrowColor}
            strokeWidth={2.5}
          />
          <ArrowUpRight
            className={`size-[${arrowSize}px] text-white absolute transition-all duration-500 delay-[10ms] -translate-x-full translate-y-full opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100`}
            size={arrowSize}
            color={arrowColor}
            strokeWidth={2.5}
          />
        </div>
      )}
    </Comp>
  );
}

export {Button, buttonVariants, type ButtonProps};
