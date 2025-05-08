"use client"
import React, { useState, useMemo, useCallback } from 'react'
import Image from 'next/image'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

// Set up the worker source directly using pdfjs from react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

// Import license image
import license from "@/assets/Licenses/license.png"
import TickBadge from "@/assets/LandingPage/CompaniesAndEmployeeCard/tick-badge.svg"

// PDF files path - use the one from public assets
const documentsPath = '/assets/Licenses/documents.pdf'

export default function MultipleCards() {
  const [activeTab, setActiveTab] = useState('privacy')
  const [legalNumPages, setLegalNumPages] = useState<number | null>(null)
  const [legalPageNumber, setLegalPageNumber] = useState<number>(1)
  
  // Memoize tab change handlers
  const handlePrivacyTab = useCallback(() => setActiveTab('privacy'), []);
  const handleLegalTab = useCallback(() => setActiveTab('legal'), []);
  const handleLicenseTab = useCallback(() => setActiveTab('license'), []);
  
  // Memoize callback to prevent unnecessary re-renders
  const onLegalDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setLegalNumPages(numPages)
  }, []);

  // Memoize navigation functions
  const goToPrevPage = useCallback(() => 
    setLegalPageNumber(p => Math.max(1, p - 1))
  , []);
  
  const goToNextPage = useCallback(() => 
    setLegalPageNumber(p => Math.min(legalNumPages || 1, p + 1))
  , [legalNumPages]);

  // PDF loading options for optimal performance
  // Memoize options to prevent unnecessary re-renders
  const options = useMemo(() => ({
    cMapUrl: '/cmaps/',
    cMapPacked: true,
    standardFontDataUrl: '/standard_fonts/'
  }), []); // Empty dependency array means this only runs once

  return (
    <div className='container mx-auto max-w-5xl items-center justify-center px-4 md:px-6 pt-8 font-primary'>
      <div className="flex gap-3 justify-start mb-8">
        <button
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'privacy' 
              ? 'bg-[#F8FAFC] text-[#0F172A] font-medium shadow-sm border border-[#E2E8F0]' 
              : 'text-[#64748B] hover:text-[#334155] hover:bg-[#F1F5F9]'
          }`}
          onClick={handlePrivacyTab}
        >
          Privacy & Policy
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'legal' 
              ? 'bg-[#F8FAFC] text-[#0F172A] font-medium shadow-sm border border-[#E2E8F0]' 
              : 'text-[#64748B] hover:text-[#334155] hover:bg-[#F1F5F9]'
          }`}
          onClick={handleLegalTab}
        >
          Legal Documents
        </button>
        <button
          className={`px-4 py-2 rounded-md transition-colors ${
            activeTab === 'license' 
              ? 'bg-[#F8FAFC] text-[#0F172A] font-medium shadow-sm border border-[#E2E8F0]' 
              : 'text-[#64748B] hover:text-[#334155] hover:bg-[#F1F5F9]'
          }`}
          onClick={handleLicenseTab}
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

        {activeTab === 'legal' && (
          <div className="flex flex-col items-center gap-6 w-full mb-16">
            <h2 className="text-[#0F172A] text-start  text-3xl font-medium mb-2">Legal Documents</h2>
            <div className="flex justify-center w-full flex-col items-center">
              <div className="shadow-lg rounded-[24px] overflow-hidden bg-white border border-[#E2E8F0] p-2">
                <Document
                  file={documentsPath}
                  onLoadSuccess={onLegalDocumentLoadSuccess}
                  options={options}
                  loading={
                    <div className="flex flex-col items-center justify-center py-20">
                      <div className="w-12 h-12 border-4 border-[#E2E8F0] border-t-[#0F172A] rounded-full animate-spin mb-4"></div>
                      <p className="text-[#64748B] text-base">Loading document...</p>
                    </div>
                  }
                  error={
                    <div className="flex flex-col items-center justify-center py-20 px-4">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="40" 
                        height="40" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#EF4444" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="mb-4"
                      >
                        <path d="M12 9v4"></path>
                        <path d="M12 16h.01"></path>
                        <path d="M6 19L3.8 5.2c-.2-1 .3-2 1.3-2.4c.5-.1 1-.2 1.4 0l7.6 3c.2.1.3.2.4.3C16 3.9 19 2.4 20.5 2c.9-.2 1.8.2 2.3 1c.2.4.2.8.2 1.2c0 1-.4 1.9-.2 2.9c.1.9-.4 1.8-1.2 2.2c-.8.5-1.8.5-2.8.7c-1.4.2-2.8.9-3.5 2.2c-.3.5-.5 1.1-.5 1.7v.1c0 1.9.9 3.7 2.4 4.8c.9.7 1.3 1.9 1 3c-.4 1.1-1.5 1.9-2.7 1.9h-2c-1 0-1.4-.6-2-1.2C9.7 21.2 7 17.7 6 19Z"></path>
                      </svg>
                      <p className="text-[#0F172A] text-base font-medium mb-2">Failed to load PDF</p>
                      <p className="text-[#64748B] text-center">The document could not be loaded. Please try again later.</p>
                    </div>
                  }
                  className="max-w-full"
                >
                  <Page
                    pageNumber={legalPageNumber}
                    renderTextLayer={false}
                    className="max-w-full h-auto object-contain bg-white"
                    width={625}
                  />
                </Document>
              </div>
              
              {legalNumPages && (
                <div className="flex justify-between items-center w-full mt-6 max-w-md">
                  <button
                    onClick={goToPrevPage}
                    disabled={legalPageNumber <= 1}
                    className="flex items-center justify-center gap-1 px-4 py-2 text-[#334155] bg-white hover:bg-[#F1F5F9] border border-[#E2E8F0] rounded-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                    Previous
                  </button>
                  <div className="flex items-center bg-[#F8FAFC] border border-[#E2E8F0] rounded-md px-4 py-2">
                    <span className="font-medium text-[#0F172A]">{legalPageNumber}</span>
                    <span className="mx-2 text-[#64748B]">/</span>
                    <span className="text-[#64748B]">{legalNumPages}</span>
                  </div>
                  <button
                    onClick={goToNextPage}
                    disabled={legalPageNumber >= legalNumPages}
                    className="flex items-center justify-center gap-1 px-4 py-2 text-[#334155] bg-white hover:bg-[#F1F5F9] border border-[#E2E8F0] rounded-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'license' && (
          <div className="flex flex-col items-center gap-6 w-full mb-16">
            <h2 className="text-[#0F172A] text-start  text-3xl font-medium mb-2">License Document</h2>
            <div className="flex justify-center w-full">
              <Image 
                src={license} 
                alt="License Document" 
                className="max-w-full h-auto object-contain rounded-[24px] bg-lightgray bg-no-repeat bg-center bg-cover shadow-[-8px_8px_8px_0px_rgba(0,0,0,0.10)]"
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
