import React from "react";

function RenderAll({ data }) {
  return (
    <>
      <ul class="flex flex-col md:grid grid-cols-3 gap-5 text-redis-neutral-800 max-w-2xl mx-auto p-10 mt-10">
        <li class="w-full text-sm font-semibold text-orange-600 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
          <span class="mb-1 text-black font-display text-5xl">
            {data.userCount}+
          </span>
          Users
        </li>
        <li class="w-full text-sm font-semibold text-orange-600 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
          <span class="mb-1 text-black  font-display text-5xl">
            {data.questionCount}+
          </span>
          Total Question
        </li>
        <li class="w-full text-sm font-semibold text-orange-600 p-6 bg-white border border-slate-900/10 bg-clip-padding shadow-md shadow-slate-900/5 rounded-lg flex flex-col justify-center">
          <span class="mb-1 text-black  font-display text-5xl">50+</span>
          Total Answer
        </li>
      </ul>
    </>
  );
}

export default RenderAll;
