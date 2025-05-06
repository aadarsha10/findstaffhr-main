import { Button } from "@/components/ui/button";
import React from "react";

// Quarter-circle group component with isolated animation
const QuarterCircleGroup = () => {
  return (
    <div className="absolute top-0 right-0 pointer-events-none z-0">
      <div className="absolute top-0 right-0 w-56 h-56">
        <div
          className="quarter-circle-animation"
          style={{ transformOrigin: "top right" }}
        >
          {/* Largest quarter-circle */}
          <div
            className={`absolute top-0 -right-16 w-[600px] h-[600px] rounded-bl-full bg-green-100`}
          />
          {/* Middle quarter-circle */}
          <div
            className={`absolute top-0 -right-12 w-[500px] h-[500px] rounded-bl-full bg-green-200/40`}
          />
          {/* Smallest quarter-circle */}
          <div
            className={`absolute top-0 -right-8 w-[400px] h-[400px]  rounded-bl-full bg-green-300/30`}
          />
        </div>
      </div>
    </div>
  );
};

export default function ReadyToWork() {
  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6 py-14 font-primary">
      <div className="bg-[#06C53C14] rounded-[24px] shadow-sm p-6 md:p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <QuarterCircleGroup />
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center relative z-10">
          <div className="flex flex-col max-w-2xl items-center justify-center gap-2">
            <h1 className="text-[#020617] text-[36px] font-bold">
              Ready to work with{" "}
              <span className="text-secondary-green">FindStaff</span>
            </h1>
            <p className="text-[#334155] text-base font-normal leading-tight mb-4">
              Whether you&apos;re hiring or job-seeking — let&apos;s build
              something better, together.
            </p>
            <Button
              variant="withArrow"
              className="h-14 w-auto pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group"
              withAnimatedArrow
              arrowSize={28}
            >
              See Our Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
