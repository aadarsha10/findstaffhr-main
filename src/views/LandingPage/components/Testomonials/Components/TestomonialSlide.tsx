import Image from "next/image";
import { memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import quote from "@/assets/LandingPage/Testomonials/quote.svg";
import {
  companyTestimonials,
  employeeTestimonials,
  Testimonial,
} from "../../../../../data/testimonials";
import { useTestimonial } from "../../../../../hooks/useTestimonial";

interface TestomonialSlideProps {
  isForCompanies: boolean;
}

// Updated animation variants for a more engaging text effect
const slideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    y: direction < 0 ? 40 : -40,
    opacity: 0,
    scale: 0.9,
  }),
};

const scaleVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
};

export default function TestomonialSlide({
  isForCompanies,
}: TestomonialSlideProps) {
  // Get the active testimonials based on isForCompanies
  const activeTestimonials = isForCompanies
    ? companyTestimonials
    : employeeTestimonials;

  // Use custom hook for state management
  const {
    currentIndex,
    direction,
    currentTestimonial,
    handlePrevious,
    handleNext,
    handleDotClick,
  } = useTestimonial({
    testimonials: activeTestimonials,
    isForCompanies,
  });

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[920px] bg-white rounded-lg p-4 md:p-6 shadow-2xl flex flex-col md:flex-row items-stretch gap-6 relative h-[280px] md:h-[320px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-6 -left-6 md:-top-10 md:-left-10"
        >
          <Image
            src={quote}
            alt="quote"
            width={75}
            height={75}
            className="w-auto h-auto"
          />
        </motion.div>

        <div className="w-full md:w-3/5 flex flex-col justify-center gap-6 md:gap-10 p-4 overflow-y-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`text-container-${currentIndex}`}
              className="overflow-hidden"
            >
              <motion.p
                key={`text-${currentIndex}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                  velocity: 10,
                }}
                className="text-lg md:text-xl font-primary text-primary-gray leading-normal"
              >
                {currentTestimonial.text}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-3">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-[2px] bg-secondary-green rounded-full"
              style={{ originX: 0 }}
            ></motion.div>

            <AnimatePresence mode="wait">
              <motion.p
                key={`position-${currentIndex}`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm md:text-base font-primary text-secondary-green font-normal leading-normal"
              >
                {currentTestimonial.position}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <div className="w-full md:w-2/5 bg-quaternary-green rounded-lg p-4 md:p-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`logo-${currentIndex}`}
              variants={scaleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex items-center justify-center w-[144px] h-[144px] relative overflow-hidden"
            >
              <Image
                src={currentTestimonial.logo}
                alt={currentTestimonial.logoAlt}
                width={144}
                height={144}
                className={`object-contain ${
                  !isForCompanies ? "rounded-full" : ""
                }`}
                priority
                unoptimized={currentIndex === 3 && !isForCompanies}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <NavigationControls
        activeTestimonials={activeTestimonials}
        currentIndex={currentIndex}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handleDotClick={handleDotClick}
        isForCompanies={isForCompanies}
      />
    </div>
  );
}

// Extracted Navigation Controls component for better code organization
interface NavigationControlsProps {
  activeTestimonials: Testimonial[];
  currentIndex: number;
  handlePrevious: () => void;
  handleNext: () => void;
  handleDotClick: (index: number) => void;
  isForCompanies: boolean;
}

const NavigationControls = memo(function NavigationControls({
  activeTestimonials,
  currentIndex,
  handlePrevious,
  handleNext,
  handleDotClick,
  isForCompanies,
}: NavigationControlsProps) {
  return (
    <div className="flex items-center justify-center mt-8">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 flex-shrink-0 focus:outline-none"
        onClick={handlePrevious}
        aria-label="Previous testimonial"
      >
        <ArrowLeft size={24} className="text-black" />
      </motion.button>

      <div className="flex items-center justify-center gap-4 mx-4 overflow-x-auto scrollbar-hide">
        {activeTestimonials.map((testimonial, index) => (
          <TestimonialDot
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
            currentIndex={currentIndex}
            handleDotClick={handleDotClick}
            isForCompanies={isForCompanies}
          />
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 flex-shrink-0 focus:outline-none"
        onClick={handleNext}
        aria-label="Next testimonial"
      >
        <ArrowRight size={24} className="text-black" />
      </motion.button>
    </div>
  );
});

// Testimonial dot component with improved image handling
interface TestimonialDotProps {
  testimonial: Testimonial;
  index: number;
  currentIndex: number;
  handleDotClick: (index: number) => void;
  isForCompanies: boolean;
}

const TestimonialDot = memo(function TestimonialDot({
  testimonial,
  index,
  currentIndex,
  handleDotClick,
  isForCompanies,
}: TestimonialDotProps) {
  return (
    <motion.button
      onClick={() => handleDotClick(index)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Go to testimonial ${index + 1}`}
      className="focus:outline-none transition-transform duration-300 flex-shrink-0"
    >
      <motion.div
        animate={{
          width: currentIndex === index ? 35 : 25,
          height: currentIndex === index ? 35 : 25,
          border: currentIndex === index ? "2px solid #55B947" : "none",
        }}
        className="relative rounded-full flex items-center justify-center"
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-transparent p-[2px]">
          <Image
            src={testimonial.logo}
            alt={`${testimonial.logoAlt} index`}
            width={currentIndex === index ? 42 : 30}
            height={currentIndex === index ? 42 : 30}
            className={`object-cover transition-all duration-300 ease-in-out mix-blend-multiply ${
              !isForCompanies ? "rounded-full" : ""
            }`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            unoptimized={index === 3 && !isForCompanies}
          />
        </div>
      </motion.div>
    </motion.button>
  );
});
