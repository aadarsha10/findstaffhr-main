"use client";
import Image from "next/image";
import React, { useState } from "react";
import Tower from "@/assets/ContactUs/tower.svg";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from 'react-hot-toast';
import { CheckCircle2, XCircle, X } from 'lucide-react';

// Custom toast function for success messages
const successToast = (message: string) => {
  return toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <CheckCircle2 className="h-6 w-6 text-[#06C53C]" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {message}
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#475569] hover:text-gray-500 focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    ),
    { duration: 4000, position: 'top-right' }
  );
};

// Custom toast function for error messages
const errorToast = (message: string) => {
  return toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <XCircle className="h-6 w-6 text-red-500" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {message}
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-[#475569] hover:text-gray-500 focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    ),
    { duration: 4000, position: 'top-right' }
  );
};

export default function ContactHeroSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.message) {
      errorToast('Please fill in all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }
      
      successToast('Your message has been sent successfully!');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      errorToast('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-transparent to-secondary-green/10 h-screen w-full">
      {/* Toast container with custom animations */}
      <Toaster 
        position="top-right"
        toastOptions={{
          className: '',
          style: {
            borderRadius: '8px',
            background: '#fff',
            color: '#0F172A',
            boxShadow: '0px 4px 16px 0px rgba(0,0,0,0.10)',
          },
        }}
      />
      <div className="container mx-auto max-w-7xl px-4 md:px-6 pt-16 pb-0 flex flex-col md:flex-row items-center justify-between gap-8">
        <section className="flex flex-col items-start justify-center w-full md:w-1/2 text-left">
          <header className="flex flex-col items-start justify-items-start w-full">
            <h2 className="text-base text-secondary-green font-medium">
              Contact us
            </h2>
            <h1 className="text-[42px] font-semibold text-left">
              Reach Out to Our Team
            </h1>
            <p>
              We&apos;re here to help—whether you&apos;re hiring or job hunting
              in Dubai. Reach us through the details below.
            </p>
            <Image
              src={Tower}
              alt="hero-about-section"
              className="w-full h-full object-cover mt-4"
            />
            <div className="flex flex-col items-start justify-items-start w-full mt-4">
              <p className="text-[#475569] text-sm font-normal">
                Business Hour
              </p>
              <p className="text-[#0F172A] text-sm font-normal">
                Sunday – Friday <br />9 AM to 6 PM (Neapl Standard Time)
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start justify-between w-full mt-4">
              <div className="flex flex-col items-start justify-items-start w-full">
                <p className="text-[#475569] text-sm font-normal mb-2">
                  Office Address:
                </p>
                <p className="text-[#0F172A] text-sm font-normal">
                  Aarohi HR Solutions (P) Ltd
                  <br />
                  Basundhara-3, Kathmandu
                </p>
              </div>
              <div className="flex flex-col items-start justify-items-start w-full">
                <p className="text-[#475569] text-sm font-normal mb-2">Phone</p>
                <p className="text-[#0F172A] text-sm font-normal">
                  +977 1 4961807
                </p>
              </div>
              <div className="flex flex-col items-start justify-items-start w-full">
                <p className="text-[#475569] text-sm font-normal mb-2">Email</p>
                <p className="text-[#0F172A] text-sm font-normal">
                  info@aarohihrsolutions.com
                </p>
              </div>
            </div>
          </header>
        </section>
        <section className="flex flex-col items-center justify-center w-full md:w-1/2">
          <div className="w-full max-w-[550px] p-8 flex flex-col items-start gap-8 rounded-[24px] border border-[#E2E8F0] bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.10)]">
            <div className="w-full">
              <h2 className="text-[#020617] text-2xl font-normal">Send Message</h2>
            </div>   
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
              <div className="flex flex-col w-full">
                <label htmlFor="fullName" className="text-[#334155] text-sm font-normal mb-2">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-full border border-[#E2E8F0] bg-white text-[#94A3B8] text-sm font-normal"
                  required
                />
              </div>
              
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="text-[#334155] text-sm font-normal mb-2">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-full border border-[#E2E8F0] bg-white text-[#94A3B8] text-sm font-normal"
                  required
                />
              </div>
              
              <div className="flex flex-col w-full">
                <label htmlFor="phone" className="text-[#334155] text-sm font-normal mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-full border border-[#E2E8F0] bg-white text-[#94A3B8] text-sm font-normal"
                />
              </div>
              
              <div className="flex flex-col w-full">
                <label htmlFor="subject" className="text-[#334155] text-sm font-normal mb-2">
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
                <label htmlFor="message" className="text-[#334155] text-sm font-normal mb-2">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] bg-white text-[#94A3B8] text-sm font-normal"
                  required
                ></textarea>
              </div>
              
              <Button
                type="submit"
                variant="withArrow"
                className="h-14 w-[180px] mt-4 pl-[16px] pr-[4px] py-2 relative overflow-hidden font-primary text-sm font-normal group"
                withAnimatedArrow
                arrowSize={28}
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
