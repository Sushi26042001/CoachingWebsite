import React, { useState } from "react";

const Courses = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const courses = [
    {
      title: "UPSC Civil Services (IAS, IPS, IFS, etc.)",
      desc: "Comprehensive Prelims, Mains, and Interview guidance.",
      duration: "3 Months",
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "KPSC – Karnataka Public Service Commission",
      desc: "Full syllabus coverage with bilingual support (English & Kannada).",
      duration: "6 Months",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    },
    { title: " PSI – Police Sub-Inspector Exam", desc: "Special focus on General Studies, Reasoning, and Current Affairs. ", duration: "4 Months", image: "https://media.istockphoto.com/id/1409835176/photo/close-up-shot-of-college-student-writing-notes-on-book-at-classroom-concept-of-examination.webp?a=1&b=1&s=612x612&w=0&k=20&c=HkNYn1VongiErpM6ys4fND9E88uTiaAwnLTasc7uEVg=", },
    {
      title: "Group-C Examinations",
      desc: "Foundation classes, test series & conceptual clarity.",
      duration: "2 Months",
      image:
        "https://images.unsplash.com/photo-1604872441539-ef1db9b25f92",
    },
  ];

  const openModal = (courseTitle) => {
    setSelectedCourse(courseTitle);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse("");
  };

  return (
    <>
      {/* COURSES SECTION */}
      <section id="courses" className="max-w-7xl mx-auto px-6 py-16  pb-2">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">
          Our Popular Courses
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition hover:-translate-y-2"
            >
              <img
                src={c.image}
                alt={c.title}
                className="rounded-t-xl h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{c.desc}</p>

                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">
                    {c.duration}
                  </span>
                  <button
                    onClick={() => openModal(c.title)}
                    className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded hover:bg-blue-700"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPLY MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-lg rounded-xl shadow-lg relative p-6">
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-black"
            >
              ×
            </button>

            <h3 className="text-xl font-bold mb-1 text-blue-700">
              Course Registration
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Applying for: <b>{selectedCourse}</b>
            </p>

            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="text"
                value={selectedCourse}
                readOnly
                className="w-full border p-2 rounded bg-gray-100"
              />
              <input
                type="text"
                placeholder="Qualification"
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full border p-2 rounded"
              />

              <select className="w-full border p-2 rounded">
                <option>Preferred Language</option>
                <option>English</option>
                <option>Kannada</option>
                <option>English & Kannada</option>
              </select>

              <textarea
                placeholder="Message (optional)"
                rows="3"
                className="w-full border p-2 rounded"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
