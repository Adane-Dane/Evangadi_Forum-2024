import React, { useEffect, useState } from "react";
import axios from "../../../Axios/Axios";
import SingleQuestion from "../SingleQuestion/SingleQuestion";
import { Link } from "react-router-dom";

function ViewAllQuestions() {
  const token = localStorage.getItem("token");
  const [questions, setQuestions] = useState([]); // Renamed for consistency
  const [showAnswer, setShowAnswer] = useState(false);
  const [questionid, seQuestionId] = useState({});
  async function fetchAllQuestions() {
    try {
      const response = await axios.get("/questions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Ensure response.data is an array

      setQuestions(response.data);
    } catch (error) {
      console.log("Error fetching questions: ", error);
    }
  }
  useEffect(() => {
    fetchAllQuestions();
  }, [questionid]);
  return (
    <div className="bg">
      <h3 class="text-2xl text-gray-700 font-bold mb-6 ml-3 text-center">
        All Question By Users
      </h3>
      <div className="m-10 flex justify-around">
        <div className="flex-initial min-w-72">
          {questions.map((item, index) => (
            <div className="mx-12 transition duration-300 ease-in-out scroll-smooth">
              <li class="border-l-2 border-purple-600">
                <div class="md:flex flex-start">
                  <div class="bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      class="text-white w-3 h-3"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                      ></path>
                    </svg>
                  </div>
                  <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                    <div class="flex justify-between mb-4">
                      <a
                        href="#!"
                        class=" font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                      >
                        {item.title}
                      </a>
                      <Link
                        to={`/ViewAllQuestions/${item.questionid}`}
                        class="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                      >
                        {item.created_at}
                      </Link>
                    </div>
                    <p class="text-gray-700 mb-6">{item.description}</p>
                    <button
                      onClick={() => {
                        seQuestionId(item);
                        setShowAnswer(true);
                      }}
                      type="button"
                      class="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                    >
                      Answer{" "}
                    </button>
                    <p
                      type="button"
                      class="inline-block px-3.5 py-1 border-2 text-purple-600 font-medium text-xs leading-tight uppercase rounded "
                    >
                      4 Answers
                    </p>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </div>
        <div className="flex-initial min-w-96 ">
          <h1>Answer For Questions</h1>
          {showAnswer && <SingleQuestion questionid={questionid} />}
        </div>
      </div>
    </div>
  );
}

export default ViewAllQuestions;
