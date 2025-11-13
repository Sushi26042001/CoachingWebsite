import React from 'react'

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
  ];
  return (
    <div>
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
    </div>
  )
}

export default TopperSection