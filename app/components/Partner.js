import Image from "next/image";
import React from "react";

const Partner = () => {
  return (
    <div className="bg-[#F4F6FA] py-8 pt-16 px-4">
      <div >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {Array.from({ length: 6 }).map((d,i) => (
              <div className="w-24 bg-white px-4 py-2 rounded-md">
                <Image
                  src={`/partner-${i+1}.svg`}
                  alt="Experian"
                  width={200}
                  height={100}
                  className="h-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Partnered with Trusted Data Providers for the UK's Most
            Comprehensive Vehicle Check
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We perform thousands of vehicle history checks every day, so you
            know you are in safe hands. Join them today and make sure you know
            your car inside out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partner;
