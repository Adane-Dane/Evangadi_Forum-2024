import Guidelines from "./Guidelines";
import axios from "../../../Axios/Axios";
import { AppSate } from "../../../App";
import { createContext, useContext } from "react";
import { useRef } from "react";

function HaveaQuestion() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const { user } = useContext(AppSate);
  console.log(user);

  async function handleSubmit() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const token = localStorage.getItem("token");

    if (!title || !description) {
      return alert("Please provide all required fields");
    }

    try {
      await axios.post(
        "/questions",
        {
          title: title,
          description: description,
          userid: user.userId,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      titleRef.current.value = "";
      alert("Question posted successfully");
    } catch (error) {
      console.error(error.response.data);
      alert("Error posting question");
    }
  }
  return (
    <div className="mt-20 bg">
      <h1 className="text-center">Ask Question</h1>
      <div className="flex ">
        <Guidelines />
        <div>
          <div class="heading text-center font-bold text-2xl m-5 text-gray-800 ">
            Post Your Question
          </div>

          <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
            <input
              class="title bg-gray-100 border border-gray-800 p-2 mb-4 outline-none"
              spellcheck="false"
              ref={titleRef}
              placeholder="Question Title"
              type="text"
            />
            <textarea
              class="description bg-gray-100 sec p-3 h-60 border border-gray-800 outline-none"
              spellcheck="false"
              ref={descriptionRef}
              placeholder="Question Describe everything about this post here"
            ></textarea>

            <div class="icons flex text-gray-500 m-2">
              <svg
                class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              <div class="count ml-auto text-gray-400 text-xs font-semibold">
                0/300
              </div>
            </div>
            <div class="buttons flex">
              <div class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">
                Cancel
              </div>
              <div
                onClick={handleSubmit}
                class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
              >
                Post
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HaveaQuestion;
