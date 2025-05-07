"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import EmploymentContract from "@/assets/Licenses/EmploymentContract.svg"
import TickBadge from "@/assets/LandingPage/CompaniesAndEmployeeCard/tick-badge.svg"

export default function MultipleCards() {
  const [activeTab, setActiveTab] = useState('privacy')

  return (
    <div className='container mx-auto max-w-5xl items-center justify-center px-4 md:px-6 pt-8 font-primary'>
      <div className="flex gap-6 justify-start mb-6">
        <button
          className={`${activeTab === 'privacy' ? 'flex px-2 py-1 justify-center items-center  rounded-full border border-[#E2E8F0] bg-[#F8FAFC]' : ''}`}
          onClick={() => setActiveTab('privacy')}
        >
          Privacy & Policy
        </button>
        <button
          className={`${activeTab === 'registration' ? 'flex px-2 py-1 justify-center items-center  rounded-full border border-[#E2E8F0] bg-[#F8FAFC]' : ''}`}
          onClick={() => setActiveTab('registration')}
        >
          Registration Document
        </button>
        <button
          className={`${activeTab === 'license' ? 'flex px-2 py-1 justify-center items-center  rounded-full border border-[#E2E8F0] bg-[#F8FAFC]' : ''}`}
          onClick={() => setActiveTab('license')}
        >
          License Document
        </button>
      </div>

      <div className="flex flex-col items-center gap-6 p-8 bg-[#F8FAFC] max-w-5xl h-auto mb-24  mx-auto">
        {activeTab === 'privacy' && (
          <div className="flex flex-col items-start w-full">
            <h2 className="text-[#0F172A] text-start  text-3xl font-medium mb-2">Introduction:</h2>
            <p className="text-[#0F172A]  text-base leading-[150%] mb-6">
              At Aarohi HR Solutions, we are committed to protecting your privacy and ensuring that your personal information is handled securely and responsibly. This Privacy Policy outlines the types of information we collect, how we use it, and your rights regarding your personal data.
            </p>
            <div className="w-full">
              <h3 className="text-[#0F172A]  text-2xl font-medium mb-1">Information We Collect:</h3>
              <p className="text-[#334155]  text-base leading-[150%] mb-2">
                We may collect the following types of information:
              </p>
              <ul className="flex flex-col gap-1 mb-6">
                <li className="flex items-center gap-3">
                  <Image src={TickBadge} alt="tick" />
                  <span className="text-[#0F172A]  text-base">Personal identification information (Name, email address, phone number)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image src={TickBadge} alt="tick" />
                  <span className="text-[#0F172A]  text-base">Professional information (Resume, work history, skills)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image src={TickBadge} alt="tick" />
                  <span className="text-[#0F172A]  text-base">Account preferences and settings</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image src={TickBadge} alt="tick" />
                  <span className="text-[#0F172A]  text-base">Usage data and platform interactions</span>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h3 className="text-[#0F172A]  text-2xl font-medium mb-1">How We Use Your Information:</h3>
              <p className="text-[#334155]  text-base leading-[150%] mb-2">
              We use the information we collect for the following purposes:
              </p>
              <ul className="flex flex-col gap-1 mb-6">
                <li className="flex items-center gap-3">
                  <Image src={TickBadge} alt="tick" />
                  <span className="text-[#0F172A]  text-base">To match job seekers with relevant job opportunities.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image src={TickBadge} alt="tick" />
                  <span className="text-[#0F172A]  text-base">To provide staffing services to businesses in Dubai.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image src={TickBadge} alt="tick" />
                  <span className="text-[#0F172A]  text-base">To communicate with you regarding your job application, employment opportunities, or business inquiries.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image src={TickBadge} alt="tick" />
                  <span className="text-[#0F172A]  text-base">To improve the user experience on our website and services.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image src={TickBadge} alt="tick" />
                  <span className="text-[#0F172A]  text-base">To comply with legal obligations.</span>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h3 className="text-[#0F172A]  text-2xl font-medium mb-1">How We Protect Your Information:</h3>
              <p className="text-[#334155]  text-base leading-[150%] mb-2">
              We implement a variety of security measures to maintain the safety of your personal information when you use our services. This includes encryption and secure servers to protect your data from unauthorized access.
              </p>
            </div>
            <div className="w-full">
              <h3 className="text-[#0F172A]  text-2xl font-medium mb-1">Data Sharing</h3>
              <p className="text-[#334155]  text-base leading-[150%] mb-2">
              We will not share your personal information with third parties without your consent, except when:
              </p>
              <ul className="flex flex-col gap-1 mb-6">
                <li className="flex items-center gap-3">
                  <Image src={TickBadge} alt="tick" />
                  <span className="text-[#0F172A]  text-base">Required by law or government authorities.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image src={TickBadge} alt="tick" />
                  <span className="text-[#0F172A]  text-base">In the event of a legal claim or dispute related to services provided.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Image src={TickBadge} alt="tick" />
                  <span className="text-[#0F172A]  text-base">With third-party service providers who assist us in running our business (e.g., hosting services, recruitment software).</span>
                </li>
                
              </ul>
            </div>
            <div className="w-full">
              <h3 className="text-[#0F172A]  text-2xl font-medium mb-1">Your Rights</h3>
              <p className="text-[#334155]  text-base leading-[150%] mb-2">
              You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact us at info@findstaffhr.com.
              </p>
            </div>
            <div className="w-full">
              <h3 className="text-[#0F172A]  text-2xl font-medium mb-1">Cookies and Tracking</h3>
              <p className="text-[#334155]  text-base leading-[150%] mb-2">
              We use cookies to enhance your browsing experience on our website. Cookies help us understand how users interact with our site, and you can choose to disable cookies in your browser settings.
              </p>
            </div>
            <div className="w-full">
              <h3 className="text-[#0F172A]  text-2xl font-medium mb-1">Changes to This Privacy Policy</h3>
              <p className="text-[#334155]  text-base leading-[150%] mb-2">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised date will be updated at the top of the policy.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'registration' && (
          <div className="flex flex-col items-center gap-6 w-full mb-16">
            <h2 className="text-[#0F172A] text-start  text-3xl font-medium mb-2">Employment Contracts</h2>
            <div className="flex justify-center w-full">
              <Image 
                src={EmploymentContract} 
                alt="Employment Contract" 
                className="max-w-full h-auto object-contain"
                width={625} 
                height={833}
              />
            </div>
          </div>
        )}

        {activeTab === 'license' && (
          <div className="flex flex-col items-center gap-6 w-full mb-16">
            <h2 className="text-[#0F172A] text-start  text-3xl font-medium mb-2">Employment Contracts</h2>
            <div className="flex justify-center w-full">
              <Image 
                src={EmploymentContract} 
                alt="License Document" 
                className="max-w-full h-auto object-contain"
                width={625} 
                height={833}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
