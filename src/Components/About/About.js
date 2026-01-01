import React, { useEffect, useState } from "react";

const images = [
  "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800",
];


const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000); // ⏱️ change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center"
    >
      {/* TEXT SECTION */}
      <div>
        <h3 className="text-3xl font-bold mb-4 text-blue-700">
          About MVP Vishwakosha IAS Academy
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          MVP Vishwakosha IAS Academy stands as a centre of excellence in Civil
          Services education, dedicated to guiding aspirants toward success in
          UPSC, KPSC, and other competitive examinations. With a focus on
          discipline, conceptual clarity, and holistic learning, the Academy
          nurtures analytical thinking, ethical values, and leadership qualities.
          Our mission is to empower every aspirant with the confidence and
          competence to serve the nation with integrity.
        </p>
      </div>

      {/* IMAGE SLIDER */}
      <div className="relative w-full h-[320px] overflow-hidden flex justify-center">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Students"
              className="w-full flex-shrink-0 rounded-3xl shadow-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
