import React from 'react'

const Counselling = () => {
  return (
    <div>
         <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-4 text-blue-700">
            Why Choose MVP Vishwakosha IAS Academy
          </h3>

          <p className="text-gray-700 text-lg mb-4">
            At MVP Vishwakosha IAS Academy, we don’t just prepare aspirants for exams,
            we shape leaders with values, vision, and virtue.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
            <li>
              <span className="font-bold text-black">Personalized Mentorship:</span>
              &nbsp;Individual attention and tailored guidance to ensure every aspirant
              achieves their best.
            </li>

            <li>
              <span className="font-bold text-black">Expert Faculty:</span>
              &nbsp;Experienced educators with deep subject knowledge and a passion for mentoring.
            </li>

            <li>
              <span className="font-bold text-black">Integrated Approach:</span>
              &nbsp;Comprehensive coverage for Prelims, Mains, and Interview — all under
              one structured program.
            </li>

            <li>
              <span className="font-bold text-black">Limited Batch Size:</span>
              &nbsp;Small, focused batches for better interaction, performance tracking,
              and mentoring.
            </li>

            <li>
              <span className="font-bold text-black">Consistent Guidance Till Selection:</span>
              &nbsp;Our mentors guide you at every stage — from foundation to final interview.
            </li>
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

            {/* Dropdown - Select Program */}
            <select className="w-full p-3 border border-blue-200 rounded text-gray-700">
              <option value="">Select Program</option>
              <option value="upsc-foundation">UPSC Foundation Course</option>
              <option value="upsc-prelims">UPSC Prelims Coaching</option>
              <option value="upsc-mains">UPSC Mains Coaching</option>
              <option value="interview-guidance">Interview Guidance Program</option>
              <option value="optional-subjects">Optional Subjects Coaching</option>
            </select>

            {/* Dropdown - Preferred Time */}
            <select className="w-full p-3 border border-blue-200 rounded text-gray-700">
              <option value="">Preferred Time</option>
              <option value="morning">Morning (9 AM – 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM – 3 PM)</option>
              <option value="evening">Evening (3 PM – 6 PM)</option>
              <option value="weekend">Weekend Batch</option>
            </select>

            <button
              type="submit"
              className="bg-blue-700 text-white w-full py-2 rounded font-medium hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </form>
        </div>

      </section>
    </div>
  )
}

export default Counselling