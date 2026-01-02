import React, { useState } from "react";
import {
  FileArchive,
  FileText,
  PlusCircle,
  Trash2,
  Eye,
  X,
} from "lucide-react";

/* ========================= MODAL ========================= */
const Modal = ({ title, onClose, children }) => (
  <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
    <div className="bg-white w-full max-w-5xl rounded-xl shadow-lg flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button onClick={onClose}>
          <X />
        </button>
      </div>

      {/* Scrollable Body */}
      <div className="px-6 py-4 overflow-y-auto max-h-[70vh]">
        {children}
      </div>
    </div>
  </div>
);

/* ========================= DATAGRID ========================= */
const DataGrid = ({ data, onDelete }) => (
  <div className="overflow-x-auto border rounded-lg">
    <table className="w-full border-collapse">
      <thead className="bg-blue-900 text-white">
        <tr>
          <th className="px-4 py-3 text-left text-sm font-semibold">Headline</th>
          <th className="px-4 py-3 text-left text-sm font-semibold">Description</th>
          <th className="px-4 py-3 text-left text-sm font-semibold">Uploaded At</th>
          <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={4} className="text-center py-6 text-gray-500">
              No PDFs uploaded
            </td>
          </tr>
        ) : (
          data.map((p, index) => (
            <tr
              key={p.id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className="px-4 py-3 border-t">{p.headline}</td>
              <td className="px-4 py-3 border-t">{p.desc}</td>
              <td className="px-4 py-3 border-t text-sm text-gray-600">
                {new Date(p.uploadedAt).toLocaleString()}
              </td>
              <td className="px-4 py-3 border-t">
                <div className="flex gap-3">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded text-sm"
                  >
                    <FileText size={14} /> View
                  </a>
                  <button
                    onClick={() => onDelete(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

/* ========================= MAIN COMPONENT ========================= */
const PDFSettings = () => {
  const [showModal, setShowModal] = useState(false);

  /* ---------- FORM STATES ---------- */
  const [pdfHeadline, setPdfHeadline] = useState("");
  const [pdfDesc, setPdfDesc] = useState("");
  const [pdfFile, setPdfFile] = useState(null);

  /* ---------- LIST STATE ---------- */
  const [pdfs, setPdfs] = useState([]);

  /* ---------- HANDLERS ---------- */
  const handlePdfChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const submitPdf = (e) => {
    e.preventDefault();

    if (!pdfFile) return;

    const newPdf = {
      id: Date.now(),
      headline: pdfHeadline,
      desc: pdfDesc,
      url: URL.createObjectURL(pdfFile),
      uploadedAt: new Date().toISOString(),
    };

    setPdfs([...pdfs, newPdf]);
    setPdfHeadline("");
    setPdfDesc("");
    setPdfFile(null);
  };

  const removePdf = (index) => {
    setPdfs(pdfs.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* ================= UPLOAD CARD ================= */}
      <div className="bg-white p-6 rounded-xl shadow-sm border relative">
        {/* Eye icon */}
        <button
          onClick={() => setShowModal(true)}
          className="absolute top-5 right-5 text-blue-600 hover:text-blue-800"
        >
          <Eye />
        </button>

        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <FileArchive /> Upload PDF / Note
        </h3>

        <form onSubmit={submitPdf} className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Headline"
            value={pdfHeadline}
            onChange={(e) => setPdfHeadline(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Short description"
            value={pdfDesc}
            onChange={(e) => setPdfDesc(e.target.value)}
            className="border p-3 rounded-lg"
          />

          <div className="md:col-span-2 flex gap-3 items-center">
            <input
              type="file"
              accept="application/pdf"
              onChange={handlePdfChange}
              className="border p-2 rounded-lg"
            />
            <button
              type="submit"
              className="ml-auto inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              <PlusCircle size={16} /> Add PDF
            </button>
          </div>
        </form>
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <Modal title="Uploaded PDFs" onClose={() => setShowModal(false)}>
          <DataGrid data={pdfs} onDelete={removePdf} />
        </Modal>
      )}
    </>
  );
};

export default PDFSettings;
