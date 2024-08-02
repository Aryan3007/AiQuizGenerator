import { useLocation } from 'react-router-dom';

const QuizOutput = () => {
  const location = useLocation();
  const { quizResponse } = location.state || {};
  
  // Access the data array from quizResponse
  const questions = quizResponse?.data || [];

  const renderQuestion = (questionData, index) => {
    const { question, options, type } = questionData;

    return (
      <div key={index} className="mt-8 space-y-8">
        <div>
          <div className="flex items-start">
            <div>
              <span className="inline-flex justify-center items-center w-fit px-2 h-6 rounded bg-green-500 text-white font-medium text-sm">
                Question
              </span>
            </div>
            <p className="ml-4 md:ml-6 text-bold">
              {question}
            </p>
          </div>
          <div className="flex flex-col items-start mt-3 space-y-2">
            {type === "single_select" && options && options.map((option, i) => (
              <div key={i} className="flex items-start">
                <input type="radio" id={`option-${index}-${i}`} name={`question-${index}`} className="mr-2" />
                <label htmlFor={`option-${index}-${i}`} className="text-gray-800">{option}</label>
              </div>
            ))}

            {type === "true_false" && options && options.map((option, i) => (
              <div key={i} className="flex items-start ">
                <input type="radio" id={`option-${index}-${i}`} name={`question-${index}`} className="m-1" />
                <label htmlFor={`option-${index}-${i}`} className="text-gray-800">{option}</label>
              </div>
            ))}

            {type === "short_answer" && (
              <div className="flex flex-col w-full">
                <textarea
                  className="w-full mt-2 p-2 border rounded-lg focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Write your answer here..."
                  rows={4}
                ></textarea>
              </div>
            )}
          </div>
        </div>

       
      </div>
    );
  };

  return (
    <div className="pt-24">
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Quiz Results</h1>
              <p className="mt-1.5 text-sm text-gray-500">
                Review your quiz and answers below.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
                type="button"
              >
                <span className="text-sm font-medium"> View Website </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </button>

              <button
                className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="w-full md:w-2/3 mx-auto p-5 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div className="w-2/3">
            <h2 className="section-heading text-bold">
              Questions and Answers
            </h2>
          </div>
          
        </div>

        {questions.length > 0 ? (
          questions.map((questionData, index) => (
            renderQuestion(questionData, index)
            
          ))
        ) : (
          <p className="mt-8 text-gray-700">No quiz data available.</p>
        )}
      <button className=' bg-blue-600 my-6 rounded-lg text-white hover:bg-blue-400 px-4 py-2'>Submit Quiz</button>
      </div>

      {/* {quizResponse ? (
        <div>
          <pre>{JSON.stringify(quizResponse, null, 2)}</pre>
        </div>
      ) : (
        <p>No quiz data available.</p>
      )} */}
    </div>
  );
};

export default QuizOutput;
