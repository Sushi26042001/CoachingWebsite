import React from 'react'

const Articles = () => {
  return (
    <div>

         <section id="updates" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Left: Today's Articles */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-xl font-bold text-gray-800 flex items-center">
                <span className="text-red-500 mr-2">🗓️</span> Today’s Articles
              </h3>
              <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                Nov 10, 2025
              </span>
            </div>

            <div className="max-h-[420px] overflow-y-auto">
              {[
                "UPSC Current Affairs Quiz : 10 November 2025",
                "UPSC Insights SECURE SYNOPSIS : 10 November 2025",
                "UPSC Insights SECURE SYNOPSIS : 8 November 2025",
                "UPSC CURRENT AFFAIRS – 10 November 2025",
                "Angola",
                "A Policy Framework for Relocation and Co-existence in India’s Tiger Reserves",
                "The Rules for Sustainable Harnessing of Fisheries in the EEZ",
                "Odd Radio Circles (ORCs)",
                "Exercise Malabar 2025",
                "Janjatiya Gaurav Varsh 2025",
                "COP30 – UN Climate Summit 2025",
                "NALSAR University of Law report on fair trials",
                "Bridging the Gender Gap in Civil Services",
                "Does India need nutritional transformation?",
              ].map((article, index) => (
                <div
                  key={index}
                  className="flex items-start border-b border-gray-100 px-6 py-3 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center justify-center bg-red-50 text-red-500 font-bold text-sm rounded-full w-6 h-6 mr-3">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-sm leading-snug hover:text-blue-600 cursor-pointer">
                    {article}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Important Updates */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-xl font-bold text-gray-800 flex items-center">
                <span className="text-red-500 mr-2">📢</span> Important Updates / Announcements
              </h3>
            </div>

            <div className="max-h-[420px] overflow-y-auto">
              {[
                {
                  title: "UPSC Civil Services Mains Result 2025: Official PDF, Live Updates & Interview Guidance",
                  time: "3 days ago",
                },
                {
                  title: "CSE 2025: Complete Vacancy Break-Up for IAS, IPS, IRS & Other Services (Category-Wise + PwBD)",
                  time: "3 days ago",
                },
                {
                  title: "[Admissions Open] Kannada Literature Optional 2026 Batch-2 | Classes from 19th Nov 2025 | Insights IAS",
                  time: "5 days ago",
                },
                {
                  title: "Prelims Guidance Program by Insights IAS – Decode UPSC PYQs on Medieval India & Art & Culture",
                  time: "1 week ago",
                },
                {
                  title: "Admissions Open – OGP 2026 (Offline & Online Guidance Program) | Starts 24th Nov 2025",
                  time: "1 week ago",
                },
                {
                  title: "UPSC 2026 Strategy Session by Vinay Sir: Mains & Prelims Roadmap",
                  time: "1 week ago",
                },
                {
                  title: "InsightsIAS Interview Guidance Program 2025 – Orientation for All Aspirants",
                  time: "2 weeks ago",
                },
              ].map((update, i) => (
                <div
                  key={i}
                  className="flex items-start border-b border-gray-100 px-6 py-3 hover:bg-gray-50 transition"
                >
                  <div className="text-red-500 text-lg mr-3">🔔</div>
                  <div>
                    <p className="text-gray-800 text-sm font-medium hover:text-blue-600 cursor-pointer leading-snug">
                      {update.title}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{update.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-right px-6 py-4 border-t">
              <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center justify-end w-full">
                View All Updates <span className="ml-1">→</span>
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Articles