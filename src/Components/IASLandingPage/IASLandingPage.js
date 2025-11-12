import React, { useState, useEffect } from "react";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import { Link, useNavigate } from "react-router-dom";

const IASLandingPage = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [locationIndex, setLocationIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);


const navigate = useNavigate();

  // handleQuiz function to navigate to Quiz page
  const handleQuiz = () => {
    navigate("/quiz");
  };


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

  // --- Locations Data
  const locations = [
    {
      name: "New Delhi",
      institute: "Vajiram & Ravi",
      address: "1-B/7, Pusa Road, Old Rajinder Nagar, New Delhi - 110060",
      landmark: "Adjacent to Gate 5, Karol Bagh Metro Station & Pillar no.103",
      mapLink: "https://maps.app.goo.gl/Qd3YkMoiknKT8J456",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Chennai",
      institute: "Vajiram & Ravi",
      address: "Pushkar's Phoenix, Flat No. 2A, Plot No- 2477, 9th Main Road, Anna Nagar, Chennai - 600040",
      landmark: "Near Anna Nagar Tower Metro / close to Sundaram Medical Foundation, on 9th Main Road",
      mapLink: "https://maps.app.goo.gl/example",
      image: "https://images.unsplash.com/photo-1558642084-5b59b63efd47?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // --- FAQ Data
  const faqs = [
    {
      question: "Which is the best coaching for IAS in Delhi?",
      answer: "Elite IAS Academy is consistently rated as one of the top IAS coaching institutes in Delhi. With experienced faculty, comprehensive study material, personalized mentorship, and a proven track record of producing top rankers, we provide the complete ecosystem for UPSC success."
    },
    {
      question: "How do I choose the right optional subject for UPSC?",
      answer: "Choose your optional subject based on your academic background, interest, and the availability of quality guidance. At Elite IAS, we provide detailed counseling sessions and previous year success analysis to help you make an informed decision about your optional subject."
    },
    {
      question: "What is the success rate of Elite IAS Academy?",
      answer: "Elite IAS Academy has consistently maintained a high success rate with over 500+ selections in civil services in the past 5 years. Our students have secured top ranks including AIR 12, 27, 44, and 65 in recent years, making us one of the most successful coaching institutes."
    },
    {
      question: "Do you provide online classes for working professionals?",
      answer: "Yes, we offer flexible online and hybrid learning options specifically designed for working professionals. Our recorded lectures, live interactive sessions, and digital study materials allow you to prepare effectively while managing your professional commitments."
    }
  ];

  // --- Courses Section (Updated Images)
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

  // --- Topper List
  const toppers = [
    {
      name: "Ananya Sharma (AIR 12)",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Rohit Mehta (AIR 27)",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Sneha Patel (AIR 44)",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Arjun Rao (AIR 65)",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=300&q=80",
    },
  ];

  const nextLocation = () => {
    setLocationIndex((prev) => (prev + 1) % locations.length);
  };

  const prevLocation = () => {
    setLocationIndex((prev) => (prev - 1 + locations.length) % locations.length);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-blue-50 to-white min-h-screen">

      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 text-white py-3 overflow-hidden relative shadow-md">
        <div className="animate-marquee whitespace-nowrap text-center font-semibold text-lg tracking-wide">
          🎓 Admissions Open for UPSC 2025 Batch — Limited Seats! 🚀 Enroll Now for
          Prelims + Mains + Interview Guidance 🔥 | Call: +91 7204602590 |
          info@eliteias.com | Scholarships Available 💼
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

      {/* 📚 PDF Resources Section */}
      <section id="pdf-resources" className="max-w-7xl mx-auto px-6 py-16 pb-20">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">
          UPSC Study PDFs & Notes
        </h2>

        {/* 👇 CHANGED: 4 Cards per row on large screens */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {[
            {
              title: "UPSC Prelims 2025 Syllabus PDF",
              desc: "Official syllabus for GS Paper I & II (CSAT).",
              pdf: "/pdfs/Sushanth.pdf",
            },
            {
              title: "Current Affairs Summary - October 2025",
              desc: "Monthly compilation of important news and analysis.",
              pdf: "/pdfs/Current-Affairs-Oct-2025.pdf",
            },
            {
              title: "Ethics Case Studies - Mains 2024",
              desc: "Solved case studies for UPSC GS Paper IV.",
              pdf: "/pdfs/Ethics-Case-Studies-2024.pdf",
            },
            {
              title: "UPSC Previous Year Questions (2018–2024)",
              desc: "All prelims and mains questions with answers.",
              pdf: "/pdfs/UPSC-Previous-Year-Qs.pdf",
            },
            {
              title: "Geography Notes for Mains",
              desc: "Concise revision-friendly material by toppers.",
              pdf: "/pdfs/Geography-Notes.pdf",
            },
            {
              title: "UPSC Essay Paper Strategy",
              desc: "Tips & tricks for scoring 150+ in essay paper.",
              pdf: "/pdfs/Essay-Strategy.pdf",
            },
            {
              title: "Indian Polity Summary Notes",
              desc: "Comprehensive summary of Laxmikanth chapters.",
              pdf: "/pdfs/Indian-Polity-Notes.pdf",
            },
            {
              title: "Environment & Ecology Compendium",
              desc: "Essential topics for Prelims & Mains with diagrams.",
              pdf: "/pdfs/Environment-Ecology.pdf",
            },
          ].map((pdf, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Top: PDF Icon + Title */}
              <div>
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 text-red-600 w-12 h-12 flex items-center justify-center rounded-lg mr-4 text-2xl">
                    📄
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                    {pdf.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{pdf.desc}</p>
              </div>

              {/* Bottom: Buttons */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => window.open(pdf.pdf, "_blank")}
                  className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 active:scale-95 transition"
                >
                  👁️ View
                </button>
                <a
                  href={pdf.pdf}
                  download
                  className="bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-700 hover:scale-105 active:scale-95 transition"
                >
                  📥 Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏆 Toppers Section */}
      <section
        id="toppers"
        className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Our Proud Toppers</h2>
        <div className="flex flex-wrap justify-center gap-8 px-6 animate-pulse-slow">
          {toppers.map((t, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg w-64 transform hover:scale-105 transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-white shadow"
              />
              <p className="text-lg font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s infinite ease-in-out;
          }
        `}</style>
      </section>
      {/* 📚 IAS Learning Features Section */}
      <section id="ias-features" className="max-w-7xl mx-auto px-6 pt-16 pb-5">

        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Enhance Your IAS Preparation
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* 1️⃣ Current Affairs */}
          <div className="flex flex-col items-start bg-blue-50 hover:bg-blue-100 p-4 h-40 rounded-xl shadow-md transition transform hover:-translate-y-1">
            <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-3">
              📰
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Current Affairs
            </h3>
            <p className="text-gray-600 text-sm">
              Daily News + Analysis
            </p>
          </div>

          {/* 2️⃣ Mains Answer Writing */}
          <div className="flex flex-col items-start bg-green-50 hover:bg-green-100 p-6 h-40  rounded-xl shadow-md transition transform hover:-translate-y-1">
            <div className="bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-3">
              ✍️
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Mains Answer Writing
            </h3>
            <p className="text-gray-600 text-sm">
              Structured Practice
            </p>
          </div>

          {/* 3️⃣ Current Affairs Quiz */}
          <div className="flex flex-col items-start bg-purple-50 hover:bg-purple-100 p-6 h-40  rounded-xl shadow-md transition transform hover:-translate-y-1" onClick={handleQuiz}>
            <div className="bg-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-3">
              🧠
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Current Affairs Quiz
            </h3>
            <p className="text-gray-600 text-sm">
              Test Your Understanding
            </p>
          </div>

          {/* 4️⃣ Toppers’ Mock Interviews */}
          <div className="flex flex-col items-start bg-pink-50 hover:bg-pink-100 p-6 h-40  rounded-xl shadow-md transition transform hover:-translate-y-1">
            <div className="bg-pink-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-3">
              🎤
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Toppers’ Mock Interviews
            </h3>
            <p className="text-gray-600 text-sm">
              Refine Your Interview Skills
            </p>
          </div>

          {/* 5️⃣ Toppers’ Answer Copies */}
          <div className="flex flex-col items-start bg-indigo-50 hover:bg-indigo-100 p-6 h-40 rounded-xl shadow-md transition transform hover:-translate-y-1">
            <div className="bg-indigo-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-3">
              📄
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Toppers’ Answer Copies
            </h3>
            <p className="text-gray-600 text-sm">
              Learn from Evaluated Sheets
            </p>
          </div>
        </div>
      </section>


      {/* Why Institute & Form */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-4 text-blue-700">
            Why Choose MVP Vishwakosha IAS Academy
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
            <li>Highly experienced and dedicated IAS faculty</li>
            <li>Updated study materials & test series</li>
            <li>Personalized mentorship for every aspirant</li>
            <li>Modern classrooms & online hybrid learning</li>
          </ul>
        </div>
        <div className="bg-blue-50 p-6 rounded-xl shadow">
          <h4 className="text-xl font-semibold mb-4 text-blue-700">
            Get Free Expert Counselling
          </h4>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-blue-200 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-blue-200 rounded"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 border border-blue-200 rounded"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white w-full py-2 rounded font-medium hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center"
      >
        <div>
          <h3 className="text-3xl font-bold mb-4 text-blue-700">
            About MVP Vishwakosha IAS Academy
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            MVP Vishwakosha IAS Academy is India's top coaching center guiding aspirants
            for UPSC CSE. With expert faculty, test series, and mentoring, we've
            helped over 500+ students achieve their civil services dream.
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

      {/* 📰 Articles & Announcements Section */}
      <section id="updates" className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Left: Today's Articles */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-xl font-bold text-gray-800 flex items-center">
                <span className="text-red-500 mr-2">🗓️</span> Today’s Articles
              </h3>
              <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                Nov 10, 2025
              </span>
            </div>

            <div className="max-h-[420px] overflow-y-auto">
              {[
                "UPSC Current Affairs Quiz : 10 November 2025",
                "UPSC Insights SECURE SYNOPSIS : 10 November 2025",
                "UPSC Insights SECURE SYNOPSIS : 8 November 2025",
                "UPSC CURRENT AFFAIRS – 10 November 2025",
                "Angola",
                "A Policy Framework for Relocation and Co-existence in India’s Tiger Reserves",
                "The Rules for Sustainable Harnessing of Fisheries in the EEZ",
                "Odd Radio Circles (ORCs)",
                "Exercise Malabar 2025",
                "Janjatiya Gaurav Varsh 2025",
                "COP30 – UN Climate Summit 2025",
                "NALSAR University of Law report on fair trials",
                "Bridging the Gender Gap in Civil Services",
                "Does India need nutritional transformation?",
              ].map((article, index) => (
                <div
                  key={index}
                  className="flex items-start border-b border-gray-100 px-6 py-3 hover:bg-gray-50 transition"
                >
                  <div className="flex items-center justify-center bg-red-50 text-red-500 font-bold text-sm rounded-full w-6 h-6 mr-3">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-sm leading-snug hover:text-blue-600 cursor-pointer">
                    {article}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Important Updates */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h3 className="text-xl font-bold text-gray-800 flex items-center">
                <span className="text-red-500 mr-2">📢</span> Important Updates / Announcements
              </h3>
            </div>

            <div className="max-h-[420px] overflow-y-auto">
              {[
                {
                  title: "UPSC Civil Services Mains Result 2025: Official PDF, Live Updates & Interview Guidance",
                  time: "3 days ago",
                },
                {
                  title: "CSE 2025: Complete Vacancy Break-Up for IAS, IPS, IRS & Other Services (Category-Wise + PwBD)",
                  time: "3 days ago",
                },
                {
                  title: "[Admissions Open] Kannada Literature Optional 2026 Batch-2 | Classes from 19th Nov 2025 | Insights IAS",
                  time: "5 days ago",
                },
                {
                  title: "Prelims Guidance Program by Insights IAS – Decode UPSC PYQs on Medieval India & Art & Culture",
                  time: "1 week ago",
                },
                {
                  title: "Admissions Open – OGP 2026 (Offline & Online Guidance Program) | Starts 24th Nov 2025",
                  time: "1 week ago",
                },
                {
                  title: "UPSC 2026 Strategy Session by Vinay Sir: Mains & Prelims Roadmap",
                  time: "1 week ago",
                },
                {
                  title: "InsightsIAS Interview Guidance Program 2025 – Orientation for All Aspirants",
                  time: "2 weeks ago",
                },
              ].map((update, i) => (
                <div
                  key={i}
                  className="flex items-start border-b border-gray-100 px-6 py-3 hover:bg-gray-50 transition"
                >
                  <div className="text-red-500 text-lg mr-3">🔔</div>
                  <div>
                    <p className="text-gray-800 text-sm font-medium hover:text-blue-600 cursor-pointer leading-snug">
                      {update.title}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{update.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-right px-6 py-4 border-t">
              <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center justify-end w-full">
                View All Updates <span className="ml-1">→</span>
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* Locations Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 pb-5">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Our IAS Coaching Locations
        </h2>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left Side - Location Image with Navigation */}
            <div className="relative">
              <div className="relative h-80 rounded-xl overflow-hidden">
                <img
                  src={locations[locationIndex].image}
                  alt={locations[locationIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevLocation}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-700 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextLocation}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-blue-700 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Location Indicator Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {locations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setLocationIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === locationIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Location Details */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-blue-600 font-semibold text-lg">Location</span>
                <h3 className="text-3xl font-bold text-gray-800 mt-1">
                  {locations[locationIndex].name}
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700 text-lg">
                    {locations[locationIndex].institute}
                  </h4>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    {locations[locationIndex].address}
                  </p>
                </div>

                <div>
                  <span className="font-medium text-gray-700">Landmark:</span>
                  <p className="text-gray-600 mt-1">
                    {locations[locationIndex].landmark}
                  </p>
                </div>

                <a
                  href={locations[locationIndex].mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>View on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Best IAS Coaching FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <div className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                  }`}>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className={`px-6 pb-5 transition-all duration-300 ${openFaq === index ? 'block' : 'hidden'
                }`}>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-gray-900 text-gray-300 py-12 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h4 className="text-xl font-semibold mb-4 text-white">About Us</h4>
              <p className="leading-relaxed">
                Elite IAS Academy prepares UPSC aspirants with guidance,
                discipline, and personalized mentorship. We are committed to
                helping students achieve their civil services dreams through
                comprehensive coaching and expert guidance.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">
                Contact Info
              </h4>
              <div className="space-y-2">
                <p className="flex items-center space-x-3">
                  <span className="text-blue-400">📞</span>
                  <span>+91 7204602590</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-blue-400">📧</span>
                  <span>info@eliteias.com</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-blue-400">📍</span>
                  <span>Delhi, India</span>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-600 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-8 pt-6 border-t border-gray-700">
            © 2025 Elite IAS Academy. All rights reserved.
          </p>
          <WhatsAppButton />
        </div>
      </footer>
    </div>
  );
};

export default IASLandingPage;