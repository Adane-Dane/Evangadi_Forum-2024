import React, { useEffect, useState } from "react";
import axios from "../../../Axios/Axios";
import SingleQuestion from "../SingleQuestion/SingleQuestion";
import { Link } from "react-router-dom";
import ReanderAllQuestion from "./ReanderAllQuestion";

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
  console.log(questions);
  return (
    <div className="h-full my-12  ">
      <div className="mx-auto min-w-fit">
        {questions.map((element) => (
          <ReanderAllQuestion element={element} />
        ))}
      </div>
    </div>
  );
}

export default ViewAllQuestions;
