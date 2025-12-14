import React from 'react'
import { useNavigate } from 'react-router-dom';

const LearningFeatures = () => {


     const navigate = useNavigate();
    const handleQuiz = () => {
        navigate("/quiz");
    };
    return (
        <div>

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
        </div>
    )
}

export default LearningFeatures