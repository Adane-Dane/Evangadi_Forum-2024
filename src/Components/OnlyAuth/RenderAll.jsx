import React from "react";
function RenderAll({ data }) {
  return (
    <>
      <ul className="flex flex-col md:grid grid-cols-3 gap-5 text-redis-neutral-800 max-w-2xl mx-auto p-10 mt-10">
        <li className="w-full text-sm font-semibold text-orange-600 p-6 bg-orange-500 border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
          <span className="mb-1 text-black font-display text-3xl">
            {data.userCount}+
          </span>
          Users
        </li>
        <li className="w-full text-sm font-semibold text-orange-600 p-6 bg-orange-500 border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
          <span className="mb-1 text-black  font-display text-5xl">
            {data.questionCount}+
          </span>
          Total Question
        </li>
        <li className="w-full text-sm font-semibold text-orange-600 p-6 bg-orange-500 border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
          <span className="mb-1 text-black  font-display text-5xl">50+</span>
          Total Answer
        </li>
      </ul>
    </>
  );
}

export default RenderAll;
