import axios from "../../../Axios/Axios";
import { AppSate } from "../../../App";
import { createContext, useContext } from "react";
import { useRef } from "react";
import AuthNav from "../AuthNav/AuthNav";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";

function HaveaQuestion() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const navigate = useNavigate();
  const { user } = useContext(AppSate);
  console.log(user);

  async function handleSubmit(e) {
    e.preventDefault();
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
      description.current.value = "";
      alert("Question posted successfully");
      navigate("/only");
    } catch (error) {
      console.error(error.response.data);
      alert("Error posting question");
    }
  }
  return (
    <>
      <AuthNav user={user} />
      <div className="max-w-screen-lg mx-auto p-4 my-7">
        <div className="grid grid-cols-2 md:grid-cols-12 border">
          <div className="bg-gray-900 md:col-span-4 px-3 text-white">
            <h3 className="text-2xl sm:text-3xl leading-normal font-extrabold tracking-tight mt-7">
              Steps to write
              <span className="text-orange-500 text-center">
                {" "}
                a good question
              </span>
            </h3>
            <div className="mt-14">
              <p className="my-3">
                <span className="text-orange-500">=</span>Summarize your problem
                in one-line title.
              </p>
              <p className="my-3">
                <span className="text-orange-500">=</span>Describe your problem
                in more detail.
              </p>
              <p className="my-3">
                <span className="text-orange-500">=</span>
                Describe what you tried and you expect to happen.
              </p>
              <p className="my-3">
                <span className="text-orange-500">=</span>
                Review your question and post it to the site.
              </p>
            </div>
          </div>
          <form
            method="post"
            onSubmit={handleSubmit}
            className="md:col-span-8 p-10"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Title
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ref={titleRef}
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Your Question
                </label>
                <textarea
                  ref={descriptionRef}
                  rows="10"
                  className=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>
              <div className="flex justify-between w-full px-3">
                <button
                  className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Post Question
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HaveaQuestion;
