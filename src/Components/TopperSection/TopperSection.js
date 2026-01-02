import React from "react";

const TopperSection = () => {
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
    {
      name: "Pooja Verma (AIR 88)",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <section
      id="toppers"
      className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">
        Our Proud Toppers
      </h2>

      {/* Scroll Container */}
      <div className="relative overflow-hidden">
        <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused] px-6">
          {[...toppers, ...toppers].map((t, i) => (
            <div
              key={i}
              className="min-w-[260px] bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg text-center transition-transform hover:scale-105"
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
      </div>

      {/* Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default TopperSection;
