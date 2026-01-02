import React, { useState } from "react";

const PDFResources = () => {
  const [showAll, setShowAll] = useState(false);

  const pdfList = [
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
      title: "UPSC Previous Year Questions (2018–2024)",
      desc: "All prelims and mains questions with answers.",
      pdf: "/pdfs/UPSC-Previous-Year-Qs.pdf",
    },
    {
      title: "UPSC Previous Year Questions (2018–2024)",
      desc: "All prelims and mains questions with answers.",
      pdf: "/pdfs/UPSC-Previous-Year-Qs.pdf",
    },
    {
      title: "UPSC Previous Year Questions (2018–2024)",
      desc: "All prelims and mains questions with answers.",
      pdf: "/pdfs/UPSC-Previous-Year-Qs.pdf",
    },
    {
      title: "UPSC Previous Year Questions (2018–2024)",
      desc: "All prelims and mains questions with answers.",
      pdf: "/pdfs/UPSC-Previous-Year-Qs.pdf",
    },
    // add more PDFs freely – scalable
  ];

  const visiblePDFs = pdfList.slice(0, 4);

  const PDFCard = (pdf, i) => (
    <div
      key={i}
      className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col justify-between"
    >
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

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => window.open(pdf.pdf, "_blank")}
          className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition"
        >
          👁️ View
        </button>
        <a
          href={pdf.pdf}
          download
          className="bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700 hover:scale-105 transition"
        >
          📥 Download
        </a>
      </div>
    </div>
  );

  return (
    <section
      id="pdf-resources"
      className="max-w-7xl mx-auto px-6 py-16 pb-12 relative"
    >
      {/* Header */}
      <div className="relative mb-10">
        {/* Centered Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-700">
          UPSC Study PDFs & Notes
        </h2>

        {/* Right aligned Show More */}
        {pdfList.length > 4 && (
          <button
            onClick={() => setShowAll(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-blue-600 font-semibold hover:underline"
          >
            Show More →
          </button>
        )}
      </div>


      {/* Main Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {visiblePDFs.map(PDFCard)}
      </div>

      {/* Modal */}
      {showAll && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white max-w-7xl w-full mx-4 rounded-xl p-6 pb-12 overflow-y-auto max-h-[90vh]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">
                All UPSC PDFs
              </h3>
              <button
                onClick={() => setShowAll(false)}
                className="text-gray-600 text-xl hover:text-red-600"
              >
                ✖
              </button>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 pb-6">
              {pdfList.map(PDFCard)}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default PDFResources;
