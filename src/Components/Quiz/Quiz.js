import React, { useState, useEffect } from "react";

const Quiz = () => {
  const quizData = [
    {
      question: "Which country recently launched the world's first 6G experimental satellite?",
      options: ["India", "China", "Japan", "USA"],
      correctAnswer: "China",
    },
    {
      question: "Who is the current Chief Justice of India (as of November 2025)?",
      options: [
        "Justice D.Y. Chandrachud",
        "Justice N.V. Ramana",
        "Justice U.U. Lalit",
        "Justice S.A. Bobde",
      ],
      correctAnswer: "Justice D.Y. Chandrachud",
    },
    {
      question: "Which organization publishes the ‘World Energy Outlook’ report?",
      options: ["IMF", "World Bank", "IEA", "UNDP"],
      correctAnswer: "IEA",
    },
  ];

  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Disable body scroll globally while quiz is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleStartQuiz = () => {
    setIsStarted(true);
    setIsFinished(false);
    setShowAnswers(false);
    setSelectedAnswers({});
  };

  const handleSelect = (qIndex, option) => {
    setSelectedAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };

  const handleFinishQuiz = () => {
    setIsFinished(true);
    setIsStarted(false);
  };

  const handleRestartQuiz = () => {
    handleStartQuiz();
  };

  const handleViewQuestions = () => {
    setShowAnswers(true);
  };

  return (
    <div className="flex justify-center bg-gray-100 h-screen overflow-hidden pt-10">
      {/* Scrollable Card */}
      <div className="w-[96%] h-[88vh] bg-white rounded-2xl shadow-xl p-8 pt-20 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {!isStarted && !isFinished && !showAnswers && (
          <>
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              UPSC Current Affairs Quiz : 11 November 2025
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Current Affairs Quiz is a daily quiz based on the DAILY CURRENT AFFAIRS AND PIB SUMMARY
              from the previous day, as posted on our website. It covers all relevant news sources and is
              designed to test your knowledge of current events. Solving these questions will help you retain
              both concepts and facts relevant to the UPSC IAS civil services exam.
            </p>
            <p className="text-lg font-medium text-green-600 mb-6">
              Best of luck! 🙂
            </p>
            <button
              onClick={handleStartQuiz}
              className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-all"
            >
              Start Quiz
            </button>
          </>
        )}

        {isStarted && (
          <div>
            {quizData.map((q, index) => (
              <div key={index} className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  {index + 1}. {q.question}
                </h2>
                <div className="space-y-2">
                  {q.options.map((option, i) => (
                    <label
                      key={i}
                      className={`block border rounded-lg px-4 py-2 cursor-pointer transition-all ${
                        selectedAnswers[index] === option
                          ? "bg-blue-100 border-blue-600"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        checked={selectedAnswers[index] === option}
                        onChange={() => handleSelect(index, option)}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={handleFinishQuiz}
              className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition-all"
            >
              Finish Quiz
            </button>
          </div>
        )}

        {isFinished && (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Quiz Completed! 🎉
            </h2>
            <div className="space-x-4">
              <button
                onClick={handleRestartQuiz}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
              >
                Restart Quiz
              </button>
              <button
                onClick={handleViewQuestions}
                className="bg-gray-700 text-white px-5 py-2 rounded-lg hover:bg-gray-800"
              >
                View Questions
              </button>
            </div>
          </div>
        )}

        {showAnswers && (
          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Correct Answers ✅
            </h2>
            {quizData.map((q, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">
                  {index + 1}. {q.question}
                </h3>
                <ul className="space-y-1">
                  {q.options.map((option, i) => (
                    <li
                      key={i}
                      className={`px-4 py-2 rounded-lg ${
                        option === q.correctAnswer
                          ? "bg-green-200 font-semibold border border-green-600"
                          : "bg-gray-100"
                      }`}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="text-center">
              <button
                onClick={handleRestartQuiz}
                className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700"
              >
                Restart Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
