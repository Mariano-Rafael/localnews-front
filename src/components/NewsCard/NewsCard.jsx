import React from "react";

function NewsCard({ news }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden h-auto hover:opacity-70 hover:translate-y-[-2px] transition duration-300 ease">
      <a href={news.link} target="_blank" rel="noopener noreferrer">
        {" "}
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-64 object-fill"
        />
      </a>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-black mb-2">{news.title}</h3>
        <a
          href={news.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline block "
        >
          Saiba mais
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
