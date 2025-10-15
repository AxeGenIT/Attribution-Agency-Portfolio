"use client";

import { useState } from "react";
import Image from "next/image";

export default function Banner() {
  const [activeTab, setActiveTab] = useState("free");
  const [registrationNumber, setRegistrationNumber] = useState("");

  return (
    <div className="    py-20 w-full bg-gradient-to-r from-[#015CB9] via-[#0180D0] to-[#019CE2] flex items-center justify-center p-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side with image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-64 h-64">
              <Image
                src="/banner-image.webp"
                alt="Car keys illustration"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right side with content */}
          <div className="w-full md:w-2/3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Buy a car without the worry
            </h1>

            <div className="mb-8">
              <p className="text-lg mb-1">
                Did you know 1 in 3 cars has a hidden past?
              </p>
              <p className="text-lg">
                Check your vehicle history instantly with Car Certify
              </p>
            </div>
          </div>
        </div>
          <div className="  flex items-center justify-center p-4">
            <div className="w-full max-w-xl">
              <div className="flex rounded-t-lg overflow-hidden">
                <button
                  onClick={() => setActiveTab("buy")}
                  className={`flex-1 py-4 px-6 text-center font-medium ${
                    activeTab === "buy"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-blue-800 text-white"
                  }`}
                >
                  Buy Full Check
                </button>
                <button
                  onClick={() => setActiveTab("free")}
                  className={`flex-1 py-4 px-6 text-center font-medium ${
                    activeTab === "free"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-blue-800 text-white"
                  }`}
                >
                  Free Check
                </button>
              </div>

              <div className="bg-blue-100 rounded-b-lg p-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Enter registration number"
                    className="flex-1 px-4 py-3 rounded border-0 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
                  />
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded transition-colors">
                    Check Vehicle
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
