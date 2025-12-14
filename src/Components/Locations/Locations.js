import React, { useState } from 'react'

const Locations = () => {
  const [locationIndex, setLocationIndex] = useState(0);

   const nextLocation = () => {
    setLocationIndex((prev) => (prev + 1) % locations.length);
  };

  const prevLocation = () => {
    setLocationIndex((prev) => (prev - 1 + locations.length) % locations.length);
  };

const locations = [
    {
      name: "Bangalore",
      institute: "MVP VISHWAKOSHA IAS ACADEMY",
      address: "1-B/7, Pusa Road, Old Rajinder Nagar, New Delhi - 110060",
      landmark: "Adjacent to Gate 5, Karol Bagh Metro Station & Pillar no.103",
      mapLink: "https://maps.app.goo.gl/Qd3YkMoiknKT8J456",
     image: "https://images.unsplash.com/photo-1697130383976-38f28c444292?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuZ2Fsb3JlfGVufDB8fDB8fHww"
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

  return (
    <div>

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
    </div>
  )
}

export default Locations