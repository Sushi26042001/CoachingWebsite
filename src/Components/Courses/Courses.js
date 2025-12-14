import React from 'react'

const Courses = () => {


 const courses = [
    {
      title: "UPSC Civil Services (IAS, IPS, IFS, etc.) ",
      desc: "Comprehensive Prelims, Mains, and Interview guidance. ",
      duration: "3 Months",
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: " KPSC – Karnataka Public Service Commission",
      desc: "Full syllabus coverage with bilingual support (English & Kannada). ",
      duration: "6 Months",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: " PSI – Police Sub-Inspector Exam",
      desc: "Special focus on General Studies, Reasoning, and Current Affairs. ",
      duration: "4 Months",
      image:
        "https://media.istockphoto.com/id/1409835176/photo/close-up-shot-of-college-student-writing-notes-on-book-at-classroom-concept-of-examination.webp?a=1&b=1&s=612x612&w=0&k=20&c=HkNYn1VongiErpM6ys4fND9E88uTiaAwnLTasc7uEVg=",
    },
    {
      title: "Group-C Examinations",
      desc: "Foundation classes, test series, and conceptual clarity for all major papers.",
      duration: "2 Months",
      image:
        "https://images.unsplash.com/photo-1604872441539-ef1db9b25f92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGV4YW18ZW58MHx8MHx8fDA%3D",
    },
  ];


  return (
    <div>
         <section id="courses" className="max-w-7xl mx-auto px-6 py-16 pb-5" >
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">
          Our Popular Courses
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <img
                src={c.image}
                alt={c.title}
                className="rounded-t-xl h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">
                  {c.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{c.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">
                    {c.duration}
                  </span>
                  <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Courses