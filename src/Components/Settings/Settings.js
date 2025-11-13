// src/AdminPanel.jsx
import React, { useState, useEffect } from "react";
import {
  Image,
  BookOpen,
  MapPin,
  Star,
  HelpCircle,
  Phone,
  PlusCircle,
  Save,
  Trash2,
  FileText,
  FileArchive,
  File,
  FilePlus,
} from "lucide-react";



/* ---------------- Main Admin Panel with Tabs ---------------- */
const Settings = () => {
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: <FileText /> },
    { id: "pdfs", label: "PDFs & Notes", icon: <FileArchive /> },
    { id: "quiz", label: "Quiz", icon: <FilePlus /> },
    { id: "articles", label: "Articles", icon: <File /> },
  ];

  const [activeTab, setActiveTab] = useState("dashboard");

  // Shared state for Dashboard (kept from your original)
  const [banners, setBanners] = useState([]);
  const [courses, setCourses] = useState([]);
  const [toppers, setToppers] = useState([]);
  const [locations, setLocations] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [contact, setContact] = useState({ phone: "", email: "", address: "" });

  // PDFs state
  const [pdfHeadline, setPdfHeadline] = useState("");
  const [pdfDesc, setPdfDesc] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfs, setPdfs] = useState([]); // {id, name, url, headline, desc, uploadedAt}

  // Quiz state
  const [quizHeadline, setQuizHeadline] = useState("");
  const [quizDesc, setQuizDesc] = useState("");
  const [questions, setQuestions] = useState([]); // {q, options: [], correctIndex}

  // Articles state
  const [articleHeadline, setArticleHeadline] = useState("");
  const [subHeadlines, setSubHeadlines] = useState([""]);
  const [articleContent, setArticleContent] = useState("");
  const [articleImageFile, setArticleImageFile] = useState(null);
  const [articleImagePreview, setArticleImagePreview] = useState(null);
  const [articles, setArticles] = useState([]); // {id, headline, subs, content, imageUrl, createdAt}

  /* ---------------- Utility handlers ---------------- */
  const handleAdd = (setter, data) => setter((prev) => [...prev, data]);
  const handleDelete = (setter, index) =>
    setter((prev) => prev.filter((_, i) => i !== index));
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  /* ---------------- PDF handlers ---------------- */
  const handlePdfChange = (e) => {
    const file = e.target.files?.[0];
    setPdfFile(file || null);
  };

  const submitPdf = (e) => {
    e?.preventDefault();
    if (!pdfFile) return alert("Please choose a PDF file to upload.");
    const url = URL.createObjectURL(pdfFile);
    const newPdf = {
      id: Date.now(),
      name: pdfFile.name,
      url,
      headline: pdfHeadline,
      desc: pdfDesc,
      uploadedAt: new Date().toISOString(),
    };
    setPdfs((p) => [newPdf, ...p]);
    setPdfHeadline("");
    setPdfDesc("");
    setPdfFile(null);
    // Note: keep URL alive for listing until user navigates away; you might revoke later if desired
  };

  const removePdf = (idx) => {
    // revoke object URL to free memory
    const pdfToRemove = pdfs[idx];
    if (pdfToRemove?.url) URL.revokeObjectURL(pdfToRemove.url);
    handleDelete(setPdfs, idx);
  };

  /* ---------------- Quiz handlers ---------------- */
  const addQuestion = () =>
    setQuestions((prev) => [
      ...prev,
      { q: "", options: ["", "", "", ""], correctIndex: 0 },
    ]);

  const updateQuestion = (index, patch) =>
    setQuestions((prev) => prev.map((qq, i) => (i === index ? { ...qq, ...patch } : qq)));

  const updateOption = (qIndex, optIndex, value) =>
    setQuestions((prev) =>
      prev.map((qq, i) =>
        i === qIndex ? { ...qq, options: qq.options.map((o, j) => (j === optIndex ? value : o)) } : qq
      )
    );

  const removeQuestion = (index) => handleDelete(setQuestions, index);

  const submitQuiz = (e) => {
    e?.preventDefault();
    if (!quizHeadline) return alert("Add quiz headline first.");
    if (questions.length === 0) return alert("Add at least one question.");
    // Here you would normally send to server. For now, just store in local state.
    const payload = {
      id: Date.now(),
      headline: quizHeadline,
      desc: quizDesc,
      questions,
      createdAt: new Date().toISOString(),
    };
    // store in localStorage or state — for demo we use console + reset
    console.log("Quiz saved:", payload);
    alert("Quiz saved to console (demo). Resetting form.");
    setQuizHeadline("");
    setQuizDesc("");
    setQuestions([]);
  };

  /* ---------------- Article handlers ---------------- */
  useEffect(() => {
    if (!articleImageFile) {
      setArticleImagePreview(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setArticleImagePreview(reader.result);
    reader.readAsDataURL(articleImageFile);
  }, [articleImageFile]);

  const addSubHeadline = () => setSubHeadlines((s) => [...s, ""]);
  const updateSubHeadline = (idx, text) =>
    setSubHeadlines((s) => s.map((v, i) => (i === idx ? text : v)));
  const removeSubHeadline = (idx) => setSubHeadlines((s) => s.filter((_, i) => i !== idx));

  const submitArticle = (e) => {
    e?.preventDefault();
    if (!articleHeadline) return alert("Article headline required.");
    const article = {
      id: Date.now(),
      headline: articleHeadline,
      subs: subHeadlines.filter(Boolean),
      content: articleContent,
      imageUrl: articleImagePreview || null,
      createdAt: new Date().toISOString(),
    };
    setArticles((a) => [article, ...a]);
    // reset
    setArticleHeadline("");
    setSubHeadlines([""]);
    setArticleContent("");
    setArticleImageFile(null);
    setArticleImagePreview(null);
  };

  /* ---------------- Dashboard "Save All" placeholder ---------------- */
  const handleSaveAll = () => {
    // In a real app you'd send everything to an API. We just log here.
    const payload = {
      banners,
      courses,
      toppers,
      locations,
      faqs,
      contact,
      pdfs,
      quizzesPreview: { headline: quizHeadline, questionsCount: questions.length },
      articles,
    };
    console.log("Save All Payload (demo):", payload);
    alert("Save All clicked — payload logged to console (demo).");
  };

  /* ---------------- Original Settings subcomponents (cleaned) ---------------- */
  /* To keep this code manageable I reuse your original UI components with small tweaks */
  const SettingsSection = ({ title, icon, children }) => (
    <section className="mb-8 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
      <h2 className="flex items-center gap-3 text-xl font-semibold mb-5 text-gray-800">
        <span className="text-blue-600">{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  );

  const ImageForm = ({ fields, onAdd }) => {
    const [form, setForm] = useState({});
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleImage = (e) => {
      const file = e.target.files?.[0];
      setImageFile(file || null);
      if (!file) return setPreview(null);
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!imageFile) return alert("Please select an image!");
      onAdd({ ...form, image: preview });
      setForm({});
      setImageFile(null);
      setPreview(null);
    };

    return (
      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <div className="flex flex-col">
          <input type="file" accept="image/*" onChange={handleImage}
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
          {preview && (
            <img src={preview} alt="Preview" className="mt-2 h-24 w-36 object-cover rounded-md border shadow-sm" />
          )}
        </div>
        {fields.map((f) => (
          <input key={f.name} type="text" name={f.name} value={form[f.name] || ""} onChange={handleChange}
            placeholder={f.placeholder}
            className="border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
        ))}
        <button type="submit" className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition-all">
          <PlusCircle size={18} /> Add
        </button>
      </form>
    );
  };

  const FormWrapper = ({ fields, onAdd }) => {
    const [form, setForm] = useState({});
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
      e.preventDefault();
      onAdd(form);
      setForm({});
    };
    return (
      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {fields.map((f) => (
          <input key={f.name} type="text" name={f.name} value={form[f.name] || ""} onChange={handleChange}
            placeholder={f.placeholder}
            className="border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
        ))}
        <button type="submit" className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition-all">
          <PlusCircle size={18} /> Add
        </button>
      </form>
    );
  };

  const ItemList = ({ items, fields, showImage, onDelete }) => (
    <div className="mt-4">
      {items.length === 0 ? (
        <p className="text-gray-500 italic">No items added yet.</p>
      ) : (
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="border border-gray-200 bg-white rounded-lg shadow-sm p-4 flex justify-between items-start hover:shadow-md transition-all">
              <div className="flex gap-4">
                {showImage && item.image && (
                  <img src={item.image} alt="Uploaded" className="h-16 w-24 object-cover rounded-md border" />
                )}
                <div className="text-sm space-y-1">
                  {fields.map((f) => (
                    <p key={f}>
                      <span className="font-medium text-gray-700 capitalize">{f}:</span>{" "}
                      {item[f]}
                    </p>
                  ))}
                </div>
              </div>
              <button onClick={() => onDelete(i)} className="text-red-500 hover:text-red-700 transition">
                <Trash2 size={18} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  /* ---------------- Render ---------------- */
  return (
    <div className="p-6 bg-gray-50 min-h-screen text-gray-800">
      <header className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">⚙️ Admin Settings Panel</h1>
          <p className="text-sm text-gray-600 mt-1">Manage dashboards, PDFs, quizzes and articles</p>
        </div>
        {/* <div className="hidden md:flex items-center gap-3">
          <button onClick={() => setActiveTab("dashboard")} className="text-sm px-4 py-2 rounded-lg bg-white border shadow-sm hover:shadow-md transition">Back to Dashboard</button>
          <button onClick={handleSaveAll} className="inline-flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 shadow-md">
            <Save size={16} /> Save All (demo)
          </button>
        </div> */}
      </header>

      {/* Tabs */}
      <nav className="mb-6 bg-white rounded-xl p-1 flex gap-1 border border-gray-100 shadow-sm">
        {tabs.map((t) => {
          const active = t.id === activeTab;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition font-medium text-sm ${
                active ? "bg-blue-600 text-white shadow-md" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="opacity-90">{t.icon}</span>
              {t.label}
            </button>
          );
        })}
      </nav>

      <main>
        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <section>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <SettingsSection title="Banners" icon={<Image />}>
                  <ImageForm
                    fields={[
                      { name: "title", placeholder: "Banner Title" },
                      { name: "subtitle", placeholder: "Banner Subtitle" },
                    ]}
                    onAdd={(data) => handleAdd(setBanners, data)}
                  />
                  <ItemList items={banners} fields={["title", "subtitle"]} showImage onDelete={(i) => handleDelete(setBanners, i)} />
                </SettingsSection>

                <SettingsSection title="Courses" icon={<BookOpen />}>
                  <ImageForm
                    fields={[
                      { name: "title", placeholder: "Course Title" },
                      { name: "desc", placeholder: "Description" },
                      { name: "duration", placeholder: "Duration" },
                    ]}
                    onAdd={(data) => handleAdd(setCourses, data)}
                  />
                  <ItemList items={courses} fields={["title", "desc", "duration"]} showImage onDelete={(i) => handleDelete(setCourses, i)} />
                </SettingsSection>

                <SettingsSection title="Toppers" icon={<Star />}>
                  <ImageForm fields={[{ name: "name", placeholder: "Topper Name" }]} onAdd={(data) => handleAdd(setToppers, data)} />
                  <ItemList items={toppers} fields={["name"]} showImage onDelete={(i) => handleDelete(setToppers, i)} />
                </SettingsSection>
              </div>

              <div className="space-y-4">
                <SettingsSection title="Locations" icon={<MapPin />}>
                  <ImageForm
                    fields={[
                      { name: "name", placeholder: "City Name" },
                      { name: "institute", placeholder: "Institute Name" },
                      { name: "address", placeholder: "Address" },
                      { name: "landmark", placeholder: "Landmark" },
                      { name: "mapLink", placeholder: "Google Map Link" },
                    ]}
                    onAdd={(data) => handleAdd(setLocations, data)}
                  />
                  <ItemList items={locations} fields={["name", "institute", "address", "landmark", "mapLink"]} showImage onDelete={(i) => handleDelete(setLocations, i)} />
                </SettingsSection>

                <SettingsSection title="FAQs" icon={<HelpCircle />}>
                  <FormWrapper fields={[{ name: "question", placeholder: "FAQ Question" }, { name: "answer", placeholder: "Answer" }]} onAdd={(data) => handleAdd(setFaqs, data)} />
                  <ItemList items={faqs} fields={["question", "answer"]} onDelete={(i) => handleDelete(setFaqs, i)} />
                </SettingsSection>

                <SettingsSection title="Contact Info" icon={<Phone />}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" name="phone" placeholder="Phone" value={contact.phone} onChange={handleContactChange}
                      className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
                    <input type="email" name="email" placeholder="Email" value={contact.email} onChange={handleContactChange}
                      className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <textarea name="address" placeholder="Address" value={contact.address} onChange={handleContactChange}
                    className="w-full mt-3 border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500" />
                </SettingsSection>
              </div>
            </div>

            <div className="text-center mt-6">
              <button onClick={handleSaveAll} className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 shadow-md">
                <Save size={18} /> Save All Settings
              </button>
            </div>
          </section>
        )}

        {/* PDFs & Notes Tab */}
        {activeTab === "pdfs" && (
          <section className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FileArchive /> Upload PDF / Note
              </h3>
              <form onSubmit={submitPdf} className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Headline" value={pdfHeadline} onChange={(e) => setPdfHeadline(e.target.value)}
                  className="border p-3 rounded-lg" />
                <input type="text" placeholder="Short description" value={pdfDesc} onChange={(e) => setPdfDesc(e.target.value)}
                  className="border p-3 rounded-lg" />
                <div className="md:col-span-2 flex gap-3 items-center">
                  <input type="file" accept="application/pdf" onChange={handlePdfChange} className="border p-2 rounded-lg" />
                  <button type="submit" className="ml-auto inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
                    <PlusCircle size={16} /> Add PDF
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-lg font-semibold mb-3">Uploaded PDFs</h3>
              {pdfs.length === 0 ? (
                <p className="text-gray-500">No PDFs uploaded yet.</p>
              ) : (
                <ul className="space-y-3">
                  {pdfs.map((p, i) => (
                    <li key={p.id} className="flex items-center justify-between border rounded p-3">
                      <div>
                        <div className="font-medium">{p.headline || p.name}</div>
                        <div className="text-sm text-gray-600">{p.desc}</div>
                        <div className="text-xs text-gray-400 mt-1">{new Date(p.uploadedAt).toLocaleString()}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded">
                          <FileText size={16} /> View
                        </a>
                        <button onClick={() => removePdf(i)} className="text-red-500 hover:text-red-700">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}

        {/* Quiz Tab */}
        {activeTab === "quiz" && (
          <section className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2"><FilePlus /> Create Quiz</h3>
              <form onSubmit={submitQuiz} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Quiz Headline" value={quizHeadline} onChange={(e) => setQuizHeadline(e.target.value)}
                    className="border p-3 rounded-lg" />
                  <input type="text" placeholder="Short description" value={quizDesc} onChange={(e) => setQuizDesc(e.target.value)} className="border p-3 rounded-lg" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Questions</h4>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={addQuestion} className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded">
                        <PlusCircle size={16} /> Add Question
                      </button>
                    </div>
                  </div>

                  {questions.length === 0 && <p className="text-gray-500">No questions yet. Click "Add Question" to start.</p>}

                  <div className="space-y-3">
                    {questions.map((qq, qi) => (
                      <div key={qi} className="border rounded p-4 bg-gray-50">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1">
                            <input type="text" placeholder={`Question ${qi + 1}`} value={qq.q} onChange={(e) => updateQuestion(qi, { q: e.target.value })}
                              className="w-full border p-2 rounded mb-3" />
                            <div className="grid sm:grid-cols-2 gap-2">
                              {qq.options.map((opt, oi) => (
                                <div key={oi} className="flex items-center gap-2">
                                  <input type="text" placeholder={`Option ${oi + 1}`} value={opt} onChange={(e) => updateOption(qi, oi, e.target.value)}
                                    className="flex-1 border p-2 rounded" />
                                  <label className="text-sm">
                                    <input type="radio" name={`correct-${qi}`} checked={qq.correctIndex === oi} onChange={() => updateQuestion(qi, { correctIndex: oi })} />
                                    <span className="ml-1 text-sm">Correct</span>
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                            <button type="button" onClick={() => removeQuestion(qi)} className="text-red-600">
                              <Trash2 /> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  <button type="submit" className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded">
                    <Save size={16} /> Save Quiz
                  </button>
                </div>
              </form>
            </div>
          </section>
        )}

        {/* Articles Tab */}
        {activeTab === "articles" && (
          <section className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2"><File /> Create Article</h3>

              <form onSubmit={submitArticle} className="space-y-4">
                <input type="text" placeholder="Headline" value={articleHeadline} onChange={(e) => setArticleHeadline(e.target.value)}
                  className="border p-3 rounded-lg w-full" />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="font-medium">Sub-headlines</label>
                    <button type="button" onClick={addSubHeadline} className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded">
                      <PlusCircle size={16} /> Add Subheadline
                    </button>
                  </div>

                  <div className="space-y-2">
                    {subHeadlines.map((s, i) => (
                      <div key={i} className="flex gap-2">
                        <input value={s} onChange={(e) => updateSubHeadline(i, e.target.value)} placeholder={`Subheadline ${i + 1}`}
                          className="flex-1 border p-2 rounded" />
                        <button type="button" onClick={() => removeSubHeadline(i)} className="text-red-600 px-2">
                          <Trash2 />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <textarea placeholder="Article content" value={articleContent} onChange={(e) => setArticleContent(e.target.value)}
                  className="w-full border p-3 rounded-lg h-40" />

                <div className="flex items-center gap-3">
                  <input type="file" accept="image/*" onChange={(e) => setArticleImageFile(e.target.files?.[0] || null)} />
                  {articleImagePreview && <img src={articleImagePreview} alt="preview" className="h-20 rounded" />}
                  <div className="ml-auto">
                    <button type="submit" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded">
                      <PlusCircle size={16} /> Add Article
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-lg font-semibold mb-3">Saved Articles</h3>
              {articles.length === 0 ? (
                <p className="text-gray-500">No articles yet.</p>
              ) : (
                <ul className="space-y-4">
                  {articles.map((a) => (
                    <li key={a.id} className="border rounded p-4 flex gap-4 items-start">
                      {a.imageUrl && <img src={a.imageUrl} alt="article" className="w-28 h-20 object-cover rounded" />}
                      <div className="flex-1">
                        <div className="font-semibold">{a.headline}</div>
                        {a.subs?.length > 0 && <div className="text-sm text-gray-600 mt-1">Subheads: {a.subs.join(" • ")}</div>}
                        <div className="text-sm text-gray-700 mt-2">{a.content?.slice(0, 200)}{a.content?.length > 200 ? "..." : ""}</div>
                        <div className="text-xs text-gray-400 mt-2">{new Date(a.createdAt).toLocaleString()}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Settings;
