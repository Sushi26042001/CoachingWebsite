import React, { useState } from "react";
import {
  File,
  Trash2,
  Eye,
  X,
  Pencil,
} from "lucide-react";

/* ========================= MODAL ========================= */
const Modal = ({ title, onClose, children }) => (
  <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
    <div className="bg-white w-full max-w-6xl rounded-xl shadow-lg flex flex-col">
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
const DataGrid = ({ data, onEdit, onDelete }) => (
  <div className="overflow-x-auto border rounded-lg">
    <table className="w-full border-collapse">
      <thead className="bg-blue-900 text-white">
        <tr>
          <th className="px-4 py-3 text-left text-sm font-semibold">Headline</th>
          <th className="px-4 py-3 text-left text-sm font-semibold">Subheadlines</th>
          <th className="px-4 py-3 text-left text-sm font-semibold">Image</th>
          <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={4} className="text-center py-6 text-gray-500">
              No articles published
            </td>
          </tr>
        ) : (
          data.map((a, index) => (
            <tr
              key={a.id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className="px-4 py-3 border-t font-medium">
                {a.headline}
              </td>

              <td className="px-4 py-3 border-t">
                {a.subHeadlines.join(", ")}
              </td>

              <td className="px-4 py-3 border-t">
                {a.image && (
                  <img
                    src={a.image}
                    alt=""
                    className="h-12 w-16 object-cover rounded"
                  />
                )}
              </td>

              <td className="px-4 py-3 border-t">
                <div className="flex gap-3">
                  <button
                    onClick={() => onEdit(index)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => onDelete(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
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
const ArticlesSettings = () => {
  const [showModal, setShowModal] = useState(false);

  /* ---------- FORM STATES ---------- */
  const [articleHeadline, setArticleHeadline] = useState("");
  const [subHeadlines, setSubHeadlines] = useState([]);
  const [articleContent, setArticleContent] = useState("");
  const [articleImageFile, setArticleImageFile] = useState(null);
  const [articleImagePreview, setArticleImagePreview] = useState(null);

  /* ---------- ARTICLES LIST ---------- */
  const [articles, setArticles] = useState([]);

  /* ---------- SUBHEADLINE HANDLERS ---------- */
  const addSubHeadline = () => setSubHeadlines([...subHeadlines, ""]);

  const updateSubHeadline = (index, value) => {
    const updated = [...subHeadlines];
    updated[index] = value;
    setSubHeadlines(updated);
  };

  const removeSubHeadline = (index) => {
    setSubHeadlines(subHeadlines.filter((_, i) => i !== index));
  };

  /* ---------- IMAGE ---------- */
  const handleImageChange = (file) => {
    setArticleImageFile(file);
    setArticleImagePreview(URL.createObjectURL(file));
  };

  /* ---------- SUBMIT ARTICLE ---------- */
  const submitArticle = (e) => {
    e.preventDefault();

    const newArticle = {
      id: Date.now(),
      headline: articleHeadline,
      subHeadlines,
      content: articleContent,
      image: articleImagePreview,
    };

    setArticles([...articles, newArticle]);

    setArticleHeadline("");
    setSubHeadlines([]);
    setArticleContent("");
    setArticleImageFile(null);
    setArticleImagePreview(null);
  };

  /* ---------- DELETE ---------- */
  const removeArticle = (index) => {
    setArticles(articles.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* ================= CREATE ARTICLE CARD ================= */}
      <div className="bg-white p-6 rounded-xl shadow-sm border relative">

        {/* Eye icon */}
        <button
          onClick={() => setShowModal(true)}
          className="absolute top-5 right-5 text-blue-600 hover:text-blue-800"
        >
          <Eye />
        </button>

        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <File /> Create Article
        </h3>

        <form onSubmit={submitArticle} className="space-y-4">
          <input
            type="text"
            placeholder="Headline"
            value={articleHeadline}
            onChange={(e) => setArticleHeadline(e.target.value)}
            className="border p-3 rounded-lg w-full"
          />

          <div className="space-y-2">
            {subHeadlines.map((s, i) => (
              <div key={i} className="flex gap-2">
                <input
                  value={s}
                  onChange={(e) => updateSubHeadline(i, e.target.value)}
                  placeholder={`Subheadline ${i + 1}`}
                  className="flex-1 border p-2 rounded"
                />
                <button
                  type="button"
                  onClick={() => removeSubHeadline(i)}
                  className="text-red-500"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addSubHeadline}
              className="text-blue-600 text-sm hover:underline"
            >
              + Add Subheadline
            </button>
          </div>

          <textarea
            placeholder="Article content"
            value={articleContent}
            onChange={(e) => setArticleContent(e.target.value)}
            className="w-full border p-3 rounded-lg h-32"
          />

          <div className="flex gap-4 items-center">
            <input
              type="file"
              onChange={(e) => handleImageChange(e.target.files[0])}
            />
            {articleImagePreview && (
              <img
                src={articleImagePreview}
                className="h-16 rounded"
                alt=""
              />
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Publish Article
          </button>
        </form>
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <Modal title="Published Articles" onClose={() => setShowModal(false)}>
          <DataGrid
            data={articles}
            onEdit={(i) => console.log("Edit article", i)}
            onDelete={removeArticle}
          />
        </Modal>
      )}
    </>
  );
};

export default ArticlesSettings;
