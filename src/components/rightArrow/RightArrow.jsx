import React from "react";

function RightArrow({ link, setPageNumber }) {
  return (
    <a href={link} onClick={() => setPageNumber(1)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 4 20 10"
        fill="currentColor"
        className="w-6 h-6 mt-0 ml-2 border text-gray-400 rounded-sm border-gray-200
             bg-gray-200 hover:bg-gray-300 hover:border-gray-300 hover:text-gray-600 hover:transition-all"
      >
        <path
          fill-rule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clip-rule="evenodd"
        />
      </svg>
    </a>
  );
}

export default RightArrow;
