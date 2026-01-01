import { useEffect, useState } from "react";

const FreeCounsellingModal = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    time: "",
  });

  useEffect(() => {
    setOpen(true); // auto open on site load
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Counselling Data:", formData);

    // TODO: API integration
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-xl animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-center text-2xl font-bold text-[#002D68]">
          Free Counselling Session
        </h2>
        <p className="mt-1 text-center text-sm text-gray-600">
          Talk to our experts & plan your UPSC journey
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#002D68] focus:outline-none"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#002D68] focus:outline-none"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#002D68] focus:outline-none"
            onChange={handleChange}
          />

          <select
            name="program"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#002D68] focus:outline-none"
            onChange={handleChange}
          >
            <option value="">Select Program</option>
            <option value="UPSC Prelims">UPSC Prelims</option>
            <option value="UPSC Mains">UPSC Mains</option>
            <option value="Foundation Course">Foundation Course</option>
            <option value="Optional Coaching">Optional Coaching</option>
          </select>

          <select
            name="time"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#002D68] focus:outline-none"
            onChange={handleChange}
          >
            <option value="">Preferred Time</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#002D68] py-3 font-semibold text-white hover:bg-[#001f4d] transition"
          >
            Book Free Counselling
          </button>
        </form>
      </div>
    </div>
  );
};

export default FreeCounsellingModal;
