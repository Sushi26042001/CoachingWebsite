import React from 'react'

const Courses = () => {


 const courses = [
    {
      title: "General Studies Prelims",
      desc: "Full coverage of Prelims syllabus with test series.",
      duration: "3 Months",
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Mains Advanced Program",
      desc: "Answer writing & essay improvement sessions.",
      duration: "6 Months",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Optional Subject Coaching",
      desc: "Expert mentorship for optional subjects.",
      duration: "4 Months",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Interview Guidance",
      desc: "Mock interviews by senior IAS officers.",
      duration: "2 Months",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
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