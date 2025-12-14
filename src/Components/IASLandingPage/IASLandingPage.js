import React, { useState, useEffect } from "react";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import { Link, useNavigate } from "react-router-dom";
import Courses from "../Courses/Courses";
import PDFResources from "../PDFResources/PDFResources";
import TopperSection from "../TopperSection/TopperSection";
import Locations from "../Locations/Locations";
import LearningFeatures from "../LearningFeatures/LearningFeatures";
import Articles from "../Articles/Articles";
import FAQSection from "../FAQSection/FAQSection";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Counselling from "../Counselling/Counselling";

const IASLandingPage = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [locationIndex, setLocationIndex] = useState(0);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Banner Section (Slower speed: 7s)
  const banners = [
    {
      image:
        "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=1600&q=80",
      title: "Excel in UPSC CSE",
      subtitle: "Guided by India's Best IAS Mentors",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
      title: "Achieve Your IAS Dream",
      subtitle: "Prelims, Mains & Interview Coaching in One Place",
    },
    {
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80",
      title: "Learn. Lead. Serve.",
      subtitle: "Join the Academy Trusted by Toppers",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % banners.length);
    }, 4000); // slower transitions
    return () => clearInterval(timer);
  }, [banners.length]);


  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-blue-50 to-white min-h-screen">

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white py-3 overflow-hidden relative shadow-md">
        <div className="animate-marquee whitespace-nowrap text-center font-semibold text-lg tracking-wide">
          🎓 Admissions Open for UPSC 2025 Batch — Limited Seats! 🚀 Enroll Now for
          Prelims + Mains + Interview Guidance 🔥 | Call: +91 8792783540 |
          info@mvpvishwakoshaias.com  | Scholarships Available 💼
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 25s linear infinite;
          }
        `}</style>
      </div>

      {/* Banner */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {banners.map((b, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === bannerIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={b.image}
              alt={b.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                {b.title}
              </h2>
              <p className="text-lg md:text-xl">{b.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Courses */}
      <Courses />
      {/* 📚 PDF Resources Section */}
      <PDFResources />
      {/* 🏆 Toppers Section */}
      <TopperSection />
      {/* 📚 IAS Learning Features Section */}
      <LearningFeatures />
      {/* Why Institute & Form */}
     <Counselling/>
      {/* About */}
      <About/>
      {/* 📰 Articles & Announcements Section */}
      <Articles />
      {/* Locations Section */}
      <Locations />
      {/* FAQ Section */}
      <FAQSection/>
      {/* Footer */}
     <Footer/>
    </div>
  );
};

export default IASLandingPage;