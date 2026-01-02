import React from "react";
import { useNavigate } from "react-router-dom";

const LearningFeatures = () => {
  const navigate = useNavigate();

  const handleQuiz = () => {
    navigate("/quiz");
  };

  const handleCurrentAffairs = () => {
    navigate("/Daily_Current_Affairs");
  };

  const handleMonthlyAffairs = () => {
    navigate("/ArticlesSettings");
  };

  return (
    <section id="ias-features" className="px-6 pt-16 pb-5">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Enhance Your IAS Preparation
      </h2>

      {/* ✅ CENTER EVERYTHING */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="flex flex-col items-center text-center bg-blue-50 hover:bg-blue-100 p-6 h-40 w-56 rounded-xl shadow-md transition transform hover:-translate-y-1"
          onClick={handleCurrentAffairs}>
            <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-3">
              📰
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Daily Current Affairs
            </h3>
            <p className="text-gray-600 text-sm">
              Daily News + Analysis
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center bg-green-50 hover:bg-green-100 p-6 h-40 w-56 rounded-xl shadow-md transition transform hover:-translate-y-1"
            onClick={handleMonthlyAffairs}>
            <div className="bg-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-3">
              ✍️
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Monthly Current Affairs
            </h3>
            <p className="text-gray-600 text-sm">
              Structured Practice
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="flex flex-col items-center text-center bg-purple-50 hover:bg-purple-100 p-6 h-40 w-56 rounded-xl shadow-md transition transform hover:-translate-y-1 cursor-pointer"
            onClick={handleQuiz}
          >
            <div className="bg-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-3">
              🧠
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Static Quiz
            </h3>
            <p className="text-gray-600 text-sm">
              Test Your Understanding
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center bg-indigo-50 hover:bg-indigo-100 p-6 h-40 w-56 rounded-xl shadow-md transition transform hover:-translate-y-1">
            <div className="bg-indigo-600 text-white w-12 h-12 flex items-center justify-center rounded-full mb-3">
              📄
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Mains Practice Questions
            </h3>
            <p className="text-gray-600 text-sm">
              Learn from Evaluated Sheets
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearningFeatures;
