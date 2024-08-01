import { useState } from "react";
import axios from "axios";

const GenerateQuiz = () => {
  const [contentType, setContentType] = useState("text");
  const [schoolLevel, setSchoolLevel] = useState("primary");
  const [difficulty, setDifficulty] = useState("easy");
  const [language, setLanguage] = useState("English");
  const [questionType, setQuestionType] = useState("true_false");
  const [textContent, setTextContent] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [urlContent, setUrlContent] = useState("");
  const [numQuestions, setNumQuestions] = useState(10);

  const handleFileUpload = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object
    const formData = new FormData();
    formData.append("contentType", contentType);
    formData.append("schoolLevel", schoolLevel);
    formData.append("difficulty", difficulty);
    formData.append("language", language);
    formData.append("questionType", questionType);
    formData.append("numQuestions", numQuestions);

    // Add content based on content type
    if (contentType === "text") {
      formData.append("textContent", textContent);
    } else if (contentType === "pdf") {
      formData.append("pdfFile", pdfFile);
    } else {
      formData.append("urlContent", urlContent);
    }

    try {
      // Replace 'your-backend-url' with your Django backend URL
      const response = await axios.post('http://localhost:8000/api/generate-quiz/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log("Quiz generated successfully:", response.data);
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error("There was an error generating the quiz:", error);
      // Handle error (e.g., show an error message)
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
              className="w-full  h-12 rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
              <option value="expert">Expert</option>
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
              <option value="Hindi">Hindi</option>
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
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              value={questionType}
              onChange={(e) => setQuestionType(e.target.value)}
            >
              <option value="true_false">True/False</option>
              <option value="numeric">Numeric</option>
              <option value="theory">Theory</option>
              <option value="multiple_select">Multiple Select</option>
              <option value="single_select">Single Select</option>
            </select>
          </div>

          <button className="rounded border-0 bg-black py-2 text-lg text-white shadow-xl w-fit px-10 focus:outline-none">
            Generate Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default GenerateQuiz;
