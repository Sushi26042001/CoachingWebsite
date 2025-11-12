import React, { useState } from "react";
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
} from "lucide-react";

const Settings = () => {
  const [banners, setBanners] = useState([]);
  const [courses, setCourses] = useState([]);
  const [toppers, setToppers] = useState([]);
  const [locations, setLocations] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [contact, setContact] = useState({
    phone: "",
    email: "",
    address: "",
  });

  const handleAdd = (setter, data) => setter((prev) => [...prev, data]);
  const handleDelete = (setter, index) =>
    setter((prev) => prev.filter((_, i) => i !== index));

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-800">
      <h1 className="text-4xl font-bold mb-10 flex items-center gap-3 text-gray-800">
        ⚙️ Admin Settings Panel
      </h1>

      <SettingsSection title="Banners" icon={<Image />}>
        <ImageForm
          fields={[
            { name: "title", placeholder: "Banner Title" },
            { name: "subtitle", placeholder: "Banner Subtitle" },
          ]}
          onAdd={(data) => handleAdd(setBanners, data)}
        />
        <ItemList
          items={banners}
          fields={["title", "subtitle"]}
          showImage
          onDelete={(i) => handleDelete(setBanners, i)}
        />
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
        <ItemList
          items={courses}
          fields={["title", "desc", "duration"]}
          showImage
          onDelete={(i) => handleDelete(setCourses, i)}
        />
      </SettingsSection>

      <SettingsSection title="Toppers" icon={<Star />}>
        <ImageForm
          fields={[{ name: "name", placeholder: "Topper Name" }]}
          onAdd={(data) => handleAdd(setToppers, data)}
        />
        <ItemList
          items={toppers}
          fields={["name"]}
          showImage
          onDelete={(i) => handleDelete(setToppers, i)}
        />
      </SettingsSection>

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
        <ItemList
          items={locations}
          fields={[
            "name",
            "institute",
            "address",
            "landmark",
            "mapLink",
          ]}
          showImage
          onDelete={(i) => handleDelete(setLocations, i)}
        />
      </SettingsSection>

      <SettingsSection title="FAQs" icon={<HelpCircle />}>
        <FormWrapper
          fields={[
            { name: "question", placeholder: "FAQ Question" },
            { name: "answer", placeholder: "Answer" },
          ]}
          onAdd={(data) => handleAdd(setFaqs, data)}
        />
        <ItemList
          items={faqs}
          fields={["question", "answer"]}
          onDelete={(i) => handleDelete(setFaqs, i)}
        />
      </SettingsSection>

      <SettingsSection title="Contact Info" icon={<Phone />}>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={contact.phone}
            onChange={handleContactChange}
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={handleContactChange}
            className="w-full border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          name="address"
          placeholder="Address"
          value={contact.address}
          onChange={handleContactChange}
          className="w-full mt-3 border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      </SettingsSection>

      <div className="text-center mt-10">
        <button className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 shadow-md hover:shadow-lg transition-all">
          <Save size={20} /> Save All Settings
        </button>
      </div>
    </div>
  );
};

/* ---------------- Section Wrapper ---------------- */
const SettingsSection = ({ title, icon, children }) => (
  <section className="mb-8 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
    <h2 className="flex items-center gap-3 text-xl font-semibold mb-5 text-gray-800">
      <span className="text-blue-600">{icon}</span>
      {title}
    </h2>
    {children}
  </section>
);

/* ---------------- Image Upload Form ---------------- */
const ImageForm = ({ fields, onAdd }) => {
  const [form, setForm] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
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
    <form
      onSubmit={handleSubmit}
      className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4"
    >
      <div className="flex flex-col">
        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="border border-gray-300 p-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-2 h-24 w-36 object-cover rounded-md border shadow-sm"
          />
        )}
      </div>
      {fields.map((f) => (
        <input
          key={f.name}
          type="text"
          name={f.name}
          value={form[f.name] || ""}
          onChange={handleChange}
          placeholder={f.placeholder}
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      ))}
      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
      >
        <PlusCircle size={18} /> Add
      </button>
    </form>
  );
};

/* ---------------- Text Form ---------------- */
const FormWrapper = ({ fields, onAdd }) => {
  const [form, setForm] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4"
    >
      {fields.map((f) => (
        <input
          key={f.name}
          type="text"
          name={f.name}
          value={form[f.name] || ""}
          onChange={handleChange}
          placeholder={f.placeholder}
          className="border border-gray-300 p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      ))}
      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
      >
        <PlusCircle size={18} /> Add
      </button>
    </form>
  );
};

/* ---------------- Item List ---------------- */
const ItemList = ({ items, fields, showImage, onDelete }) => (
  <div className="mt-4">
    {items.length === 0 ? (
      <p className="text-gray-500 italic">No items added yet.</p>
    ) : (
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="border border-gray-200 bg-white rounded-lg shadow-sm p-4 flex justify-between items-start hover:shadow-md transition-all"
          >
            <div className="flex gap-4">
              {showImage && item.image && (
                <img
                  src={item.image}
                  alt="Uploaded"
                  className="h-16 w-24 object-cover rounded-md border"
                />
              )}
              <div className="text-sm space-y-1">
                {fields.map((f) => (
                  <p key={f}>
                    <span className="font-medium text-gray-700 capitalize">
                      {f}:
                    </span>{" "}
                    {item[f]}
                  </p>
                ))}
              </div>
            </div>
            <button
              onClick={() => onDelete(i)}
              className="text-red-500 hover:text-red-700 transition"
            >
              <Trash2 size={18} />
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Settings;
