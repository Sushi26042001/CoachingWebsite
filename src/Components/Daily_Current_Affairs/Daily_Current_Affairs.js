import React from "react";

const Daily_Current_Affairs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      {/* Container */}
      <div className="max-w-8xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">

        {/* Heading */}
        <div className="p-6 border-b">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            India Strengthens Renewable Energy Push to Achieve Net-Zero Goals
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            📅 January 2, 2026 | 📰 Daily Current Affairs
          </p>
        </div>

        {/* Image */}
        <div className="w-full h-[300px] md:h-[420px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
            alt="Renewable Energy India"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">

          {/* Sub Headline */}
          <h2 className="text-xl md:text-2xl font-semibold text-blue-700">
            Government accelerates solar and wind energy investments across states
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-700 leading-relaxed text-justify">
            The Government of India has intensified its focus on renewable energy
            development as part of its long-term commitment to achieve net-zero
            carbon emissions by 2070. With rising concerns over climate change,
            energy security, and sustainable growth, policymakers are prioritizing
            clean energy sources such as solar, wind, and green hydrogen.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify">
            According to the Ministry of New and Renewable Energy, India has already
            crossed 180 GW of installed renewable energy capacity. Large-scale solar
            parks in Rajasthan and Gujarat, along with offshore wind projects along
            the western coastline, are expected to significantly boost capacity
            over the next decade.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify">
            Experts believe that increased private sector participation, improved
            grid infrastructure, and policy reforms such as single-window clearances
            will further attract domestic and foreign investments. The push toward
            renewable energy is also expected to generate employment opportunities,
            particularly in rural and semi-urban regions.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify">
            However, challenges remain in terms of land acquisition, storage
            technology, and grid stability. To address these issues, the government
            is promoting battery energy storage systems and research into advanced
            energy solutions. The transition toward renewable energy is viewed as
            a critical step in ensuring India’s sustainable and resilient future.
          </p>

          {/* Key Points Box */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-md">
            <h3 className="font-semibold text-blue-800 mb-2">
              🔑 Key Takeaways for Exams
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>India targets net-zero emissions by 2070</li>
              <li>Renewable capacity crossed 180 GW</li>
              <li>Focus on solar, wind, and green hydrogen</li>
              <li>Supports UPSC, KPSC, and State PSC preparation</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Daily_Current_Affairs;
