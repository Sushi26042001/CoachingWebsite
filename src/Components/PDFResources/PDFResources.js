import React from 'react'

const PDFResources = () => {
  return (
    <div>
         <section id="pdf-resources" className="max-w-7xl mx-auto px-6 py-16 pb-20">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">
          UPSC Study PDFs & Notes
        </h2>

        {/* 👇 CHANGED: 4 Cards per row on large screens */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {[
            {
              title: "UPSC Prelims 2025 Syllabus PDF",
              desc: "Official syllabus for GS Paper I & II (CSAT).",
              pdf: "/pdfs/Brochure_MVP.pdf",
            },
            {
              title: "Current Affairs Summary - October 2025",
              desc: "Monthly compilation of important news and analysis.",
              pdf: "/pdfs/Current-Affairs-Oct-2025.pdf",
            },
            {
              title: "Ethics Case Studies - Mains 2024",
              desc: "Solved case studies for UPSC GS Paper IV.",
              pdf: "/pdfs/Ethics-Case-Studies-2024.pdf",
            },
            {
              title: "UPSC Previous Year Questions (2018–2024)",
              desc: "All prelims and mains questions with answers.",
              pdf: "/pdfs/UPSC-Previous-Year-Qs.pdf",
            },
            {
              title: "Geography Notes for Mains",
              desc: "Concise revision-friendly material by toppers.",
              pdf: "/pdfs/Geography-Notes.pdf",
            },
            {
              title: "UPSC Essay Paper Strategy",
              desc: "Tips & tricks for scoring 150+ in essay paper.",
              pdf: "/pdfs/Essay-Strategy.pdf",
            },
            {
              title: "Indian Polity Summary Notes",
              desc: "Comprehensive summary of Laxmikanth chapters.",
              pdf: "/pdfs/Indian-Polity-Notes.pdf",
            },
            {
              title: "Environment & Ecology Compendium",
              desc: "Essential topics for Prelims & Mains with diagrams.",
              pdf: "/pdfs/Environment-Ecology.pdf",
            },
          ].map((pdf, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Top: PDF Icon + Title */}
              <div>
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 text-red-600 w-12 h-12 flex items-center justify-center rounded-lg mr-4 text-2xl">
                    📄
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                    {pdf.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{pdf.desc}</p>
              </div>

              {/* Bottom: Buttons */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => window.open(pdf.pdf, "_blank")}
                  className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition"
                >
                  👁️ View
                </button>
                <a
                  href={pdf.pdf}
                  download
                  className="bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700 hover:scale-105 active:scale-95 transition"
                >
                  📥 Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default PDFResources