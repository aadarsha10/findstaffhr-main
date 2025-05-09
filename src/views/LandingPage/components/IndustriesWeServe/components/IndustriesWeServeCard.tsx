"use client";
import React, { useState } from "react";
import Icon from "@/assets/LandingPage/IndustriesWeServe/Icon.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AlertCircle, XCircle, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface IndustriesWeServeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  jobs: Array<string>;
}

// Toast component for success message with animation
const SuccessToast = ({ message }: { message: string }) => (
  <div className="flex items-start p-4 rounded-lg bg-white shadow-lg border-l-4 border-green-500 max-w-md w-full">
    <div className="flex-shrink-0">
      <CheckCircle className="h-6 w-6 text-green-500" />
    </div>
    <div className="ml-3 flex-1">
      <p className="text-sm font-medium text-gray-900">{message}</p>
    </div>
  </div>
);

// Toast component for error message with animation
const ErrorToast = ({ message }: { message: string }) => (
  <div className="flex items-start p-4 rounded-lg bg-white shadow-lg border-l-4 border-red-500 max-w-md w-full">
    <div className="flex-shrink-0">
      <XCircle className="h-6 w-6 text-red-500" />
    </div>
    <div className="ml-3 flex-1">
      <p className="text-sm font-medium text-gray-900">{message}</p>
    </div>
  </div>
);

// Custom toast functions
const showSuccessToast = (message: string) => {
  toast.custom(
    () => <SuccessToast message={message} />,
    { position: "top-right", duration: 4000 }
  );
};

const showErrorToast = (message: string) => {
  toast.custom(
    () => <ErrorToast message={message} />,
    { position: "top-right", duration: 4000 }
  );
};

// Custom Button component for industry cards
interface CustomButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CustomButton = ({ children, className, onClick }: CustomButtonProps) => {
  return (
    <Button
      className={cn(
        "group bg-gray-100 text-primary-gray rounded-[999px] h-12 w-[150px] md:w-[160px] pl-[14px] pr-[4px] py-2 hover:bg-gray-100 hover:cursor-pointer",
        className
      )}
      withAnimatedArrow
      arrowSize={24}
      arrowColor="#64748B"
      arrowContainerClassName="-ml-3.5 flex p-5 items-center justify-center rounded-[999px] bg-gray-200 relative overflow-hidden"
      StyleBg="#E2E8F0"
      onClick={onClick}
    >
      <span className="w-full text-[12px] md:text-sm md:min-w-[95px]">
        {children}
      </span>
    </Button>
  );
};

// Contact Form Component - Used for both Apply Job and Request Staff
const ContactForm = ({ 
  title, 
  description, 
  formType 
}: { 
  title: string; 
  description: string; 
  formType: 'apply' | 'request' 
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: formType === 'apply' ? `Application for ${title}` : `Staff Request for ${title}`,
    message: formType === 'apply' 
      ? `I'm interested in job opportunities in ${title}. ${description}` 
      : `I'm looking to hire staff for ${title}. ${description}`,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    if (!phone) return true; // Phone is optional
    const regex = /^[0-9+\-\s()]{7,20}$/;
    return regex.test(phone);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear error when user types
    if (errors[id as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    };

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Validate phone (optional field)
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Choose the appropriate endpoint based on form type
      const endpoint = formType === 'apply' 
        ? "/api/apply-for-job"  // New endpoint for job applications
        : "/api/request-staff";  // New endpoint for staff requests

      // Include form type and category in the request data
      const requestData = {
        ...formData,
        formType,
        category: title,
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      // Check if the response is ok before attempting to parse JSON
      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = `Error: ${response.status} ${response.statusText}`;
        
        try {
          // Try to parse the error as JSON
          const errorJson = JSON.parse(errorText);
          if (errorJson.error) {
            errorMessage = errorJson.error;
          }
        } catch (parseError) {
          // If the error isn't valid JSON, just use the status text
          console.error("Could not parse error response:", parseError);
        }
        
        throw new Error(errorMessage);
      }

      // If response is OK, try to parse the JSON
      try {
        const text = await response.text();
        // No need to store the result if we're not using it
        JSON.parse(text);
      } catch (parseError) {
        console.error("Error parsing success response:", parseError);
        // Even if we can't parse the response, it was a success (status 200)
      }

      showSuccessToast(`Your ${formType === 'apply' ? 'application' : 'staff request'} has been sent successfully!`);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        subject: formType === 'apply' ? `Application for ${title}` : `Staff Request for ${title}`,
        message: formType === 'apply' 
          ? `I'm interested in job opportunities in ${title}. ${description}` 
          : `I'm looking to hire staff for ${title}. ${description}`,
      });

    } catch (error) {
      console.error(`Error sending ${formType}:`, error);
      showErrorToast(`Failed to send your ${formType === 'apply' ? 'application' : 'request'}. ${error instanceof Error ? error.message : 'Please try again later.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col w-full">
          <label
            htmlFor="fullName"
            className="text-[#334155] text-sm font-normal mb-2"
          >
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`w-full px-4 py-3 rounded-full border ${
              errors.fullName ? "border-red-500" : "border-[#E2E8F0]"
            } bg-white text-[#94A3B8] text-sm font-normal`}
            required
          />
          {errors.fullName && (
            <div className="flex items-center mt-1 text-red-500 text-xs">
              <AlertCircle className="h-3 w-3 mr-1" />
              <span>{errors.fullName}</span>
            </div>
          )}
        </div>
        
        <div className="flex flex-col w-full">
          <label
            htmlFor="email"
            className="text-[#334155] text-sm font-normal mb-2"
          >
            Email Address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className={`w-full px-4 py-3 rounded-full border ${
              errors.email ? "border-red-500" : "border-[#E2E8F0]"
            } bg-white text-[#94A3B8] text-sm font-normal`}
            required
          />
          {errors.email && (
            <div className="flex items-center mt-1 text-red-500 text-xs">
              <AlertCircle className="h-3 w-3 mr-1" />
              <span>{errors.email}</span>
            </div>
          )}
        </div>
      
        <div className="flex flex-col w-full">
          <label
            htmlFor="phone"
            className="text-[#334155] text-sm font-normal mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className={`w-full px-4 py-3 rounded-full border ${
              errors.phone ? "border-red-500" : "border-[#E2E8F0]"
            } bg-white text-[#94A3B8] text-sm font-normal`}
          />
          {errors.phone && (
            <div className="flex items-center mt-1 text-red-500 text-xs">
              <AlertCircle className="h-3 w-3 mr-1" />
              <span>{errors.phone}</span>
            </div>
          )}
        </div>
      
        <div className="flex flex-col w-full">
          <label
            htmlFor="company"
            className="text-[#334155] text-sm font-normal mb-2"
          >
            {formType === 'apply' ? 'Current Company' : 'Your Company'}{formType === 'request' && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={handleChange}
            required={formType === 'request'}
            placeholder={formType === 'apply' ? "Current or previous employer" : "Company name"}
            className="w-full px-4 py-3 rounded-full border border-[#E2E8F0] bg-white text-[#94A3B8] text-sm font-normal"
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label
          htmlFor="subject"
          className="text-[#334155] text-sm font-normal mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Enter message subject"
          className="w-full px-4 py-3 rounded-full border border-[#E2E8F0] bg-white text-[#94A3B8] text-sm font-normal"
        />
      </div>

      <div className="flex flex-col w-full">
        <label
          htmlFor="message"
          className="text-[#334155] text-sm font-normal mb-2"
        >
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here"
          className={`w-full px-4 py-3 rounded-xl border ${
            errors.message ? "border-red-500" : "border-[#E2E8F0]"
          } bg-white text-[#94A3B8] text-sm font-normal`}
          required
        ></textarea>
        {errors.message && (
          <div className="flex items-center mt-1 text-red-500 text-xs">
            <AlertCircle className="h-3 w-3 mr-1" />
            <span>{errors.message}</span>
          </div>
        )}
      </div>

      <Button
        type="submit"
        variant="withArrow"
        className="h-14  w-[180px] mt-4 pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group"
        withAnimatedArrow
        arrowSize={28}
        disabled={isSubmitting}
        StyleBg="#11BC41"
      >
        <span>{isSubmitting ? "Sending..." : formType === 'apply' ? "Apply for Job" : "Request Staff"}</span>
      </Button>
    </form>
  );
};

export default function IndustriesWeServeCard({
  title,
  description,
  imageUrl,
  jobs,
}: IndustriesWeServeCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [openApplyJob, setOpenApplyJob] = useState(false);
  const [openRequestStaff, setOpenRequestStaff] = useState(false);

  return (
    <>
      <div
        className={`relative w-full h-full rounded-[24px] p-[2px] transition-all duration-300 ease-in-out ${
          isHovered
            ? "bg-gradient-to-b from-[#E9EEF3] to-[#06C53C]"
            : "bg-transparent border border-gray-200"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundClip: "padding-box", // Ensure gradient only covers padding area (border)
        }}
      >
        {/* Card content */}
        <div className="flex flex-col h-full bg-white rounded-[23px] overflow-hidden relative border border-transparent">
          <div
            className="w-full h-[160px] bg-center bg-no-repeat bg-cover rounded-t-[22px]"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div
            className={`p-6 flex flex-col  transition-all duration-300 ease-in-out ${
              isHovered ? "h-[280px]" : "h-[230px]"
            }`}
          >
            <div className="flex flex-grow flex-col ">
              <h3
                className={`font-primary text-lg font-semibold mb-2 transition-colors duration-300 ease-in-out ${
                  isHovered ? "text-[#06C53C]" : ""
                }`}
              >
                {title}
              </h3>
              <p className="text-[#334155] font-primary text-sm mb-4 font-normal">
                {description}
              </p>
              <div className="flex flex-wrap gap-2   ">
                {jobs.map((job) => (
                  <p
                    key={job}
                    className="bg-quaternary-green flex items-center gap-2 rounded-full px-2 py-1 text-primary-gray font-primary text-sm font-normal"
                  >
                    <Image src={Icon} alt="icon" />
                    {job}
                  </p>
                ))}
              </div>
            </div>
            <div
              className={`flex gap-2 overflow-hidden transition-all duration-300 ease-in-out ${
                isHovered ? "opacity-100  h-[48px]" : "opacity-0  h-0"
              }`}
            >
              <Dialog open={openApplyJob} onOpenChange={setOpenApplyJob}>
                <DialogTrigger asChild>
                  <div>
                    <CustomButton onClick={() => setOpenApplyJob(true)}>
                      Apply for Job
                    </CustomButton>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[650px] p-0 overflow-y-auto h-auto animate-in fade-in-0 zoom-in-95 duration-300">
                  <div className="p-8 flex flex-col items-start gap-8">
                    <DialogHeader className="w-full">
                      <DialogTitle className="text-[#020617] text-2xl font-normal">
                        Apply for Job in {title}
                      </DialogTitle>
                      <DialogDescription className="text-gray-600 pt-2">
                        Submit your application for a position in {title}. Please fill out the form below and we&apos;ll get back to you soon.
                      </DialogDescription>
                    </DialogHeader>
                    <ContactForm 
                      title={title} 
                      description={description} 
                      formType="apply" 
                    />
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={openRequestStaff} onOpenChange={setOpenRequestStaff}>
                <DialogTrigger asChild>
                  <div>
                    <CustomButton onClick={() => setOpenRequestStaff(true)}>
                      Request Staff
                    </CustomButton>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-[650px] p-0 overflow-y-auto h-auto animate-in fade-in-0 zoom-in-95 duration-300">
                  <div className="p-8 flex flex-col items-start gap-8">
                    <DialogHeader className="w-full">
                      <DialogTitle className="text-[#020617] text-2xl font-normal">
                        Request Staff for {title}
                      </DialogTitle>
                      <DialogDescription className="text-gray-600 pt-2">
                        Looking to hire staff for {title}? Fill out this form with your requirements and we&apos;ll help you find the perfect candidate.
                      </DialogDescription>
                    </DialogHeader>
                    <ContactForm 
                      title={title} 
                      description={description} 
                      formType="request" 
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
