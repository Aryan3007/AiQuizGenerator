/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GenerateQuiz = () => {
  const navigate = useNavigate();
  const [contentType, setContentType] = useState("text");
  const [schoolLevel, setSchoolLevel] = useState("primary");
  const [difficulty, setDifficulty] = useState("easy");
  const [language, setLanguage] = useState("english");
  const [questionType, setQuestionType] = useState("true_false");
  const [textContent, setTextContent] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [urlContent, setUrlContent] = useState("");
  const [numQuestions, setNumQuestions] = useState(10);
  const [quizResponse, setQuizResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // New loading state

  const handleFileUpload = (e) => {
    setPdfFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !contentType ||
      !schoolLevel ||
      !difficulty ||
      !language ||
      !questionType ||
      (!textContent && !pdfFile && !urlContent)
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    setQuizResponse(null);
    setError(null);
    setLoading(true);

    const formData = new FormData();
    formData.append("content_type", contentType);
    formData.append(
      "content_file",
      contentType === "text" ? textContent : pdfFile || urlContent
    );
    formData.append("num_questions", numQuestions.toString());
    formData.append("subject", textContent);
    formData.append("language", language);
    formData.append("schooling_level", schoolLevel || "primary");
    formData.append("level", difficulty || "medium");
    formData.append("question_types", questionType || "multiple_choice");

    try {
      const response = await axios.post(
        "https://quizzer-backend-w4q1.onrender.com/apiV1/quiz/generate-quiz-questions/",
        formData
      );

      setQuizResponse(response.data);
      navigate("/quiz-output", { state: { quizResponse: response.data } });
    } catch (error) {
      setError(error.response ? error.response.data : "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 max-w-5xl mx-auto">
      <h1 className="font-extrabold lg:text-5xl text-3xl text-center pt-16">
        Generate A Quiz With One Click
      </h1>
      <p className="text-center py-6 text-sm lg:px-32">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        rem praesentium sapiente ipsa provident iure, deserunt distinctio
        facilis tenetur dolorem dolores non eos dolor harum odit velit id?
        Quisquam, illum.
      </p>

      <div>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex w-full flex-col border rounded-lg bg-white p-8"
        >
          {/* Content Type Selector */}
          <div className="mb-4">
            <label
              htmlFor="contentType"
              className="text-sm leading-7 text-gray-600"
            >
              Content Type
            </label>
            <select
              id="contentType"
              name="contentType"
              className="w-full h-12 rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
            >
              <option value="text">Text</option>
              <option value="pdf">PDF</option>
              <option value="video_url">Video URL</option>
              <option value="blog_url">Blog URL</option>
            </select>
          </div>

          {/* Conditional Content Input */}
          {contentType === "text" && (
            <div className="mb-4">
              <label
                htmlFor="textContent"
                className="text-sm leading-7 text-gray-600"
              >
                Enter Text
              </label>
              <textarea
                id="textContent"
                name="textContent"
                className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                value={textContent}
                onChange={(e) => setTextContent(e.target.value)}
              />
            </div>
          )}

          {contentType === "pdf" && (
            <main className="flex items-center justify-center  font-sans">
              <label
                htmlFor="dropzone-file"
                className="mx-auto cursor-pointer flex w-full max-w-sm flex-col items-center rounded-xl border border-blue-400 bg-white p-6 text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">
                  PDF File
                </h2>
                <p className="mt-2 text-gray-500 tracking-wide">
                  Upload or drag &amp; drop your PDF file{" "}
                </p>
                <input
                  onChange={handleFileUpload}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                />
              </label>
            </main>
          )}

          {(contentType === "video_url" || contentType === "blog_url") && (
            <div className="mb-4">
              <label
                htmlFor="urlContent"
                className="text-sm leading-7 text-gray-600"
              >
                {contentType === "video_url"
                  ? "Enter Video URL"
                  : "Enter Blog URL"}
              </label>
              <input
                type="url"
                id="urlContent"
                name="urlContent"
                className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                value={urlContent}
                onChange={(e) => setUrlContent(e.target.value)}
              />
            </div>
          )}

          {/* Other Form Fields */}
          <div className="mb-4">
            <label
              htmlFor="schoolLevel"
              className="text-sm leading-7 text-gray-600"
            >
              Schooling Level
            </label>
            <select
              id="schoolLevel"
              name="schoolLevel"
              className="w-full h-12 rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              value={schoolLevel}
              onChange={(e) => setSchoolLevel(e.target.value)}
            >
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="high_school">High School</option>
              <option value="college">College</option>
              <option value="university">University</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="numQuestions"
              className="text-sm leading-7 text-gray-600"
            >
              Number of Questions
            </label>
            <input
              type="number"
              id="numQuestions"
              name="numQuestions"
              className="w-full h-12 rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="difficulty"
              className="text-sm leading-7 text-gray-600"
            >
              Difficulty Level
            </label>
            <select
              id="difficulty"
              name="difficulty"
              className="w-full h-12 rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="language"
              className="text-sm leading-7 text-gray-600"
            >
              Language
            </label>
            <select
              id="language"
              name="language"
              className="w-full h-12 rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Chinese">Chinese</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="questionType"
              className="text-sm leading-7 text-gray-600"
            >
              Question Type
            </label>
            <select
              id="questionType"
              name="questionType"
              className="w-full h-12 rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
            >
              <option value="true_false">True/False</option>
              <option value="multiple_choice">Multiple Choice</option>
              <option value="short_answer">Short Answer</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2"
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Generating Quiz..." : "Generate Quiz"}{" "}
          </button>
        </form>

        {error && (
          <div className="mt-8 p-4 bg-red-100 text-red-800 rounded-lg">
            <h3 className="text-lg font-semibold">Error:</h3>
            <p className="mt-4">{error}</p>
          </div>
        )}

        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
           
              <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full" />
              </div>
     

            <div className="text-white mx-4 text-2xl font-semibold">
              Generating Quiz...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateQuiz;
