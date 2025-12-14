import React from 'react'

const About = () => {
  return (
    <div>
        <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h3 className="text-3xl font-bold mb-4 text-blue-700">
            About MVP Vishwakosha IAS Academy
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            MVP Vishwakosha IAS Academy stands as a centre of excellence in Civil
            Services education, dedicated to guiding aspirants toward success in UPSC, KPSC,
            and other competitive examinations.
            With a focus on discipline, conceptual clarity, and holistic learning, the Academy
            nurtures analytical thinking, ethical values, and leadership qualities.
            Our mission is to empower every aspirant with the confidence and competence to
            serve the nation with integrity.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80"
            alt="Students"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </section>
    </div>
  )
}

export default About