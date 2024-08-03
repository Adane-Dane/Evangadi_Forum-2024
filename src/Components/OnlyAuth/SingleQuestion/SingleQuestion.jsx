import React, { useEffect, useRef, useState } from "react";
import axios from "../../../Axios/Axios";

// const [questions, setQuestions] = useState([]); // Renamed for consistency
// const [showAnswer, setShowAnswer] = useState(false);

function SingleQuestion({ questionid }) {
  const Answer = useRef();
  const [showAnswer, setShowAnswer] = useState([]);
  async function handleSubmit() {
    const title = Answer.current.value;
    const token = localStorage.getItem("token");

    if (!title) {
      return alert("Please provide all required fields");
    }

    try {
      await axios.post(
        "/answers",
        {
          questionid: questionid.questionid,
          answer: title,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      alert("Question posted successfully");
    } catch (error) {
      console.error(error.response.data);
      alert("Error posting question");
    }
  }

  async function answerdata() {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("/answers/Answers", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setShowAnswer(response.data);
    } catch (error) {
      console.error(error.response.data);
      alert("Error");
    }
  }

  useEffect(() => {
    answerdata();
  }, [questionid]);

  console.log(showAnswer);
  return (
    <>
      <div class="max-w-lg my-10 bg-gray-100 rounded-lg shadow-md p-5">
        <img
          class="w-32 h-32 rounded-full mx-auto"
          src="https://picsum.photos/200"
          alt="Profile picture"
        />
        <p class="text-center text-gray-600 mt-1">Question Posted By</p>
        <h2 class="text-center text-2xl font-semibold mt-1 text-orange-600">
          {questionid.username}
        </h2>

        <div class="mt-5">
          <h3 class="text-xl font-semibold text-purple-600">
            {questionid.title}
          </h3>
          <p class="text-gray-600 mt-2">{questionid.description}</p>
          <p className="text-gray-500 my-3">
            Posted Date {questionid.created_at}
          </p>
        </div>
        {/* <p>{items.answer}</p> */}
        {showAnswer.map((items) => {
          return (
            <div class="relative border-l-violet-400">
              <div class="md:flex items-center md:space-x-4 mb-3">
                <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                  <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path
                        class="fill-slate-300"
                        d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z"
                      />
                      <path
                        class="fill-slate-500"
                        d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z"
                      />
                    </svg>
                  </div>
                </div>

                <div class="text-slate-500 ml-14">
                  <span class="text-slate-900 font-bold">John Mirkovic</span>{" "}
                  commented the request
                </div>
              </div>

              <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ">
                <h1>{items.answer}</h1>
              </div>
            </div>
          );
        })}

        <div class="w-full md:w-full px-3 mb-2 mt-2">
          <textarea
            class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            placeholder="Type Your Comment"
            ref={Answer}
          ></textarea>
          <div class="w-full md:w-full flex items-start md:w-full px-3">
            <div class="-mr-1">
              <button
                onClick={handleSubmit}
                className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
              >
                Post Answer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleQuestion;
