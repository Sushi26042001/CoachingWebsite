import React, { useState } from "react";
import {
  Image,
  BookOpen,
  Star,
  MapPin,
  HelpCircle,
  Phone,
  Eye,
  X,
  Pencil,
  Trash2,
} from "lucide-react";

/* ========================= MODAL ========================= */
const Modal = ({ title, onClose, children }) => {
  return (
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
};

/* ========================= SETTINGS CARD ========================= */
const SettingsCard = ({ title, icon, onView, children }) => {
  return (
    <div className="bg-white border rounded-xl shadow-md p-5 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-lg font-semibold">
          {icon}
          {title}
        </div>
        <button
          onClick={onView}
          className="text-blue-600 hover:text-blue-800"
        >
          <Eye />
        </button>
      </div>
      {children}
    </div>
  );
};

/* ========================= DATAGRID ========================= */
const DataGrid = ({ columns, data, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="w-full border-collapse">
        <thead className="bg-blue-900 text-white">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-4 py-3 text-left text-sm font-semibold border-r last:border-r-0"
              >
                {col.header}
              </th>
            ))}
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="text-center py-6 text-gray-500"
              >
                No records found
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-3 text-sm border-t"
                  >
                    {col.type === "image" && row[col.accessor] ? (
                      <img
                        src={URL.createObjectURL(row[col.accessor])}
                        alt="preview"
                        className="w-14 h-14 rounded object-cover"
                      />
                    ) : (
                      row[col.accessor] || "-"
                    )}
                  </td>
                ))}

                {/* ACTIONS */}
                <td className="px-4 py-3 border-t">
                  <div className="flex gap-3">
                    <button
                      onClick={() => onEdit(rowIndex)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => onDelete(rowIndex)}
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
};

/* ========================= MAIN COMPONENT ========================= */
const DashboardSettings = () => {
  const [activeModal, setActiveModal] = useState(null);

  /* ---------- FORM STATES ---------- */
  const [banner, setBanner] = useState({ title: "", subtitle: "", image: null });
  const [course, setCourse] = useState({ title: "", desc: "", duration: "", image: null });
  const [topper, setTopper] = useState({ name: "", image: null });
  const [location, setLocation] = useState({
    name: "",
    institute: "",
    address: "",
    landmark: "",
    mapLink: "",
  });
  const [faq, setFaq] = useState({ question: "", answer: "" });
  const [contact, setContact] = useState({ phone: "", email: "", address: "" });

  /* ---------- GRID DATA ---------- */
  const [   bannersList, setBannersList] = useState([]);
  const [coursesList, setCoursesList] = useState([]);
  const [toppersList, setToppersList] = useState([]);
  const [locationsList, setLocationsList] = useState([]);
  const [faqsList, setFaqsList] = useState([]);
  const [contactsList, setContactsList] = useState([]);

  /* ---------- SUBMIT ---------- */
  const submitBanner = () => setBannersList([...bannersList, banner]);
  const submitCourse = () => setCoursesList([...coursesList, course]);
  const submitTopper = () => setToppersList([...toppersList, topper]);
  const submitLocation = () => setLocationsList([...locationsList, location]);
  const submitFaq = () => setFaqsList([...faqsList, faq]);
  const submitContact = () => setContactsList([...contactsList, contact]);

  /* ---------- DELETE ---------- */
  const deleteItem = (setter, list, index) =>
    setter(list.filter((_, i) => i !== index));

  return (
    <>
      {/* ================= SETTINGS CARDS ================= */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* LEFT COLUMN */}
        <div className="space-y-6">

          <SettingsCard title="Banners" icon={<Image />} onView={() => setActiveModal("banners")}>
            <input className="input" placeholder="Banner Title"
              onChange={(e) => setBanner({ ...banner, title: e.target.value })} />
            <input className="input" placeholder="Banner Subtitle"
              onChange={(e) => setBanner({ ...banner, subtitle: e.target.value })} />
            <input type="file" className="input"
              onChange={(e) => setBanner({ ...banner, image: e.target.files[0] })} />
            <button className="btn" onClick={submitBanner}>Save Banner</button>
          </SettingsCard>

          <SettingsCard title="Courses" icon={<BookOpen />} onView={() => setActiveModal("courses")}>
            <input className="input" placeholder="Course Title"
              onChange={(e) => setCourse({ ...course, title: e.target.value })} />
            <input className="input" placeholder="Description"
              onChange={(e) => setCourse({ ...course, desc: e.target.value })} />
            <input className="input" placeholder="Duration"
              onChange={(e) => setCourse({ ...course, duration: e.target.value })} />
            <input type="file" className="input"
              onChange={(e) => setCourse({ ...course, image: e.target.files[0] })} />
            <button className="btn" onClick={submitCourse}>Save Course</button>
          </SettingsCard>

          <SettingsCard title="Toppers" icon={<Star />} onView={() => setActiveModal("toppers")}>
            <input className="input" placeholder="Topper Name"
              onChange={(e) => setTopper({ ...topper, name: e.target.value })} />
            <input type="file" className="input"
              onChange={(e) => setTopper({ ...topper, image: e.target.files[0] })} />
            <button className="btn" onClick={submitTopper}>Save Topper</button>
          </SettingsCard>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">

          <SettingsCard title="Locations" icon={<MapPin />} onView={() => setActiveModal("locations")}>
            <input className="input" placeholder="City Name"
              onChange={(e) => setLocation({ ...location, name: e.target.value })} />
            <input className="input" placeholder="Institute Name"
              onChange={(e) => setLocation({ ...location, institute: e.target.value })} />
            <input className="input" placeholder="Address"
              onChange={(e) => setLocation({ ...location, address: e.target.value })} />
            <input className="input" placeholder="Landmark"
              onChange={(e) => setLocation({ ...location, landmark: e.target.value })} />
            <input className="input" placeholder="Google Map Link"
              onChange={(e) => setLocation({ ...location, mapLink: e.target.value })} />
            <button className="btn" onClick={submitLocation}>Save Location</button>
          </SettingsCard>

          <SettingsCard title="FAQs" icon={<HelpCircle />} onView={() => setActiveModal("faqs")}>
            <input className="input" placeholder="Question"
              onChange={(e) => setFaq({ ...faq, question: e.target.value })} />
            <textarea className="input" placeholder="Answer"
              onChange={(e) => setFaq({ ...faq, answer: e.target.value })} />
            <button className="btn" onClick={submitFaq}>Save FAQ</button>
          </SettingsCard>

          <SettingsCard title="Contact Info" icon={<Phone />} onView={() => setActiveModal("contact")}>
            <input className="input" placeholder="Phone"
              onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
            <input className="input" placeholder="Email"
              onChange={(e) => setContact({ ...contact, email: e.target.value })} />
            <textarea className="input" placeholder="Address"
              onChange={(e) => setContact({ ...contact, address: e.target.value })} />
            <button className="btn" onClick={submitContact}>Save Contact</button>
          </SettingsCard>
        </div>
      </div>

      {/* ================= MODALS ================= */}
      {activeModal === "banners" && (
        <Modal title="Banners" onClose={() => setActiveModal(null)}>
          <DataGrid
            columns={[
              { header: "Title", accessor: "title" },
              { header: "Subtitle", accessor: "subtitle" },
              { header: "Image", accessor: "image", type: "image" },
            ]}
            data={bannersList}
            onEdit={(i) => console.log("Edit Banner", i)}
            onDelete={(i) => deleteItem(setBannersList, bannersList, i)}
          />
        </Modal>
      )}

      {activeModal === "courses" && (
        <Modal title="Courses" onClose={() => setActiveModal(null)}>
          <DataGrid
            columns={[
              { header: "Title", accessor: "title" },
              { header: "Description", accessor: "desc" },
              { header: "Duration", accessor: "duration" },
              { header: "Image", accessor: "image", type: "image" },
            ]}
            data={coursesList}
            onEdit={(i) => console.log("Edit Course", i)}
            onDelete={(i) => deleteItem(setCoursesList, coursesList, i)}
          />
        </Modal>
      )}

      {activeModal === "toppers" && (
        <Modal title="Toppers" onClose={() => setActiveModal(null)}>
          <DataGrid
            columns={[
              { header: "Name", accessor: "name" },
              { header: "Image", accessor: "image", type: "image" },
            ]}
            data={toppersList}
            onEdit={(i) => console.log("Edit Topper", i)}
            onDelete={(i) => deleteItem(setToppersList, toppersList, i)}
          />
        </Modal>
      )}

      {activeModal === "locations" && (
        <Modal title="Locations" onClose={() => setActiveModal(null)}>
          <DataGrid
            columns={[
              { header: "City", accessor: "name" },
              { header: "Institute", accessor: "institute" },
              { header: "Address", accessor: "address" },
              { header: "Landmark", accessor: "landmark" },
              { header: "Map Link", accessor: "mapLink" },
            ]}
            data={locationsList}
            onEdit={(i) => console.log("Edit Location", i)}
            onDelete={(i) => deleteItem(setLocationsList, locationsList, i)}
          />
        </Modal>
      )}

      {activeModal === "faqs" && (
        <Modal title="FAQs" onClose={() => setActiveModal(null)}>
          <DataGrid
            columns={[
              { header: "Question", accessor: "question" },
              { header: "Answer", accessor: "answer" },
            ]}
            data={faqsList}
            onEdit={(i) => console.log("Edit FAQ", i)}
            onDelete={(i) => deleteItem(setFaqsList, faqsList, i)}
          />
        </Modal>
      )}

      {activeModal === "contact" && (
        <Modal title="Contact Info" onClose={() => setActiveModal(null)}>
          <DataGrid
            columns={[
              { header: "Phone", accessor: "phone" },
              { header: "Email", accessor: "email" },
              { header: "Address", accessor: "address" },
            ]}
            data={contactsList}
            onEdit={(i) => console.log("Edit Contact", i)}
            onDelete={(i) => deleteItem(setContactsList, contactsList, i)}
          />
        </Modal>
      )}

      {/* ================= COMMON STYLES ================= */}
      <style>{`
        .input {
          width: 100%;
          border: 1px solid #d1d5db;
          padding: 10px;
          border-radius: 8px;
        }
        .btn {
          background: #2563eb;
          color: white;
          padding: 10px 16px;
          border-radius: 8px;
          margin-top: 10px;
        }
      `}</style>
    </>
  );
};

export default DashboardSettings;
