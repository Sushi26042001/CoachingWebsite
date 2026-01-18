import React, { useState } from "react";
import { FilePlus, Trash2, Eye, X, Pencil } from "lucide-react";
import { QuizSettingsApi } from "../../ApiServices/ApiServices";
import UseNotification from "../../Utils/Notification/UseNotification";

/* ========================= MODAL ========================= */
const Modal = ({ title, onClose, children }) => (
  <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
    <div className="bg-white w-full max-w-6xl rounded-xl shadow-lg flex flex-col">
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button onClick={onClose}>
          <X />
        </button>
      </div>

      <div className="px-6 py-4 overflow-y-auto max-h-[70vh]">{children}</div>
    </div>
  </div>
);

/* ========================= DATAGRID ========================= */
const DataGrid = ({ data, onEdit, onDelete }) => (
  <div className="overflow-x-auto border rounded-lg">
    <table className="w-full border-collapse">
      <thead className="bg-blue-900 text-white">
        <tr>
          <th className="px-4 py-3 text-left text-sm font-semibold">Headline</th>
          <th className="px-4 py-3 text-left text-sm font-semibold">
            Description
          </th>
          <th className="px-4 py-3 text-left text-sm font-semibold">
            Questions
          </th>
          <th className="px-4 py-3 text-left text-sm font-semibold">Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={4} className="text-center py-6 text-gray-500">
              No quizzes created
            </td>
          </tr>
        ) : (
          data.map((q, index) => (
            <tr
              key={q.id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className="px-4 py-3 border-t font-medium">{q.headline}</td>
              <td className="px-4 py-3 border-t">{q.desc}</td>
              <td className="px-4 py-3 border-t text-center">
                {q.questions.length}
              </td>
              <td className="px-4 py-3 border-t">
                <div className="flex gap-3">
                  <button
                    onClick={() => onEdit(index)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => onDelete(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

/* ========================= MAIN COMPONENT ========================= */
const QuizSettings = () => {
  const [showModal, setShowModal] = useState(false);

  /* ---------- QUIZ FORM STATES ---------- */
  const [quizHeadline, setQuizHeadline] = useState("");
  const [quizDesc, setQuizDesc] = useState("");
  const [questions, setQuestions] = useState([]);
  const notify = UseNotification();

  /* ---------- QUIZ LIST ---------- */
  const [quizzes, setQuizzes] = useState([]);

  /* ---------- QUESTION LOGIC ---------- */
  const addQuestion = () => {
    setQuestions([
      ...questions,
      { q: "", options: ["", "", "", ""], correctIndex: 0 },
    ]);
  };

  const updateQuestion = (qi, data) => {
    const updated = [...questions];
    updated[qi] = { ...updated[qi], ...data };
    setQuestions(updated);
  };

  const updateOption = (qi, oi, value) => {
    const updated = [...questions];
    updated[qi].options[oi] = value;
    setQuestions(updated);
  };

  const removeQuestion = (qi) => {
    setQuestions(questions.filter((_, i) => i !== qi));
  };

  /* ---------- API SUCCESS ---------- */
  const handleSuccess = (res) => {
       notify.success(res.message);

  };

  /* ---------- API FAILURE ---------- */
 const handleFailure = (err) => {
  notify.error(err.message || "Something went wrong");
};


  /* ---------- SUBMIT QUIZ ---------- */
  const submitQuiz = (e) => {
    e.preventDefault();

    /* ===== BACKEND PAYLOAD FORMAT ===== */
    const payload = {
      headline: quizHeadline,
      description: quizDesc,
      questions: questions.map((q) => ({
        questionText: q.q,
        option1: q.options[0],
        option2: q.options[1],
        option3: q.options[2],
        option4: q.options[3],
        correctOption: q.correctIndex + 1, // 1-based
      })),
    };

    console.log("FINAL PAYLOAD:", payload);

    /* ===== API CALL ===== */
    QuizSettingsApi(payload, handleSuccess, handleFailure);

    /* ===== LOCAL TABLE UPDATE ===== */
    const newQuiz = {
      id: Date.now(),
      headline: quizHeadline,
      desc: quizDesc,
      questions,
    };

    setQuizzes([...quizzes, newQuiz]);
    setQuizHeadline("");
    setQuizDesc("");
    setQuestions([]);
  };

  /* ---------- DELETE QUIZ ---------- */
  const removeQuiz = (index) => {
    setQuizzes(quizzes.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* ================= CREATE QUIZ CARD ================= */}
      <div className="bg-white p-6 rounded-xl shadow-sm border relative">
        <button
          onClick={() => setShowModal(true)}
          className="absolute top-5 right-5 text-blue-600 hover:text-blue-800"
        >
          <Eye />
        </button>

        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <FilePlus /> Create Quiz
        </h3>

        <form onSubmit={submitQuiz} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Quiz Headline"
              value={quizHeadline}
              onChange={(e) => setQuizHeadline(e.target.value)}
              className="border p-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Short description"
              value={quizDesc}
              onChange={(e) => setQuizDesc(e.target.value)}
              className="border p-3 rounded-lg"
            />
          </div>

          <div className="space-y-4">
            <div className="flex bg-gray-50 p-3 rounded justify-between items-center">
              <span className="font-semibold">
                Questions ({questions.length})
              </span>
              <button
                type="button"
                onClick={addQuestion}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-200"
              >
                + Add Question
              </button>
            </div>

            {questions.map((qq, qi) => (
              <div key={qi} className="border rounded p-4 bg-gray-50">
                <div className="flex justify-between gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder={`Question ${qi + 1}`}
                      value={qq.q}
                      onChange={(e) =>
                        updateQuestion(qi, { q: e.target.value })
                      }
                      className="w-full border p-2 rounded mb-3"
                    />

                    <div className="grid sm:grid-cols-2 gap-2">
                      {qq.options.map((opt, oi) => (
                        <div key={oi} className="flex items-center gap-2">
                          <input
                            type="text"
                            placeholder={`Option ${oi + 1}`}
                            value={opt}
                            onChange={(e) =>
                              updateOption(qi, oi, e.target.value)
                            }
                            className="flex-1 border p-2 rounded"
                          />
                          <label className="text-sm cursor-pointer">
                            <input
                              type="radio"
                              name={`correct-${qi}`}
                              checked={qq.correctIndex === oi}
                              onChange={() =>
                                updateQuestion(qi, { correctIndex: oi })
                              }
                            />
                            <span className="ml-1">Correct</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeQuestion(qi)}
                    className="text-red-600 hover:bg-red-50 p-2 rounded"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Save Quiz
          </button>
        </form>
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <Modal title="Created Quizzes" onClose={() => setShowModal(false)}>
          <DataGrid
            data={quizzes}
            onEdit={(i) => console.log("Edit quiz", i)}
            onDelete={removeQuiz}
          />
        </Modal>
      )}
    </>
  );
};

export default QuizSettings;
