import React from "react";
import { Link } from "react-router-dom";

const Articles = ({articles}) => {
  return (
    <div className="articles">
      <p className="text-2x1 font-extrabold ml-1 pb-2">Articles</p>
      <ul className="list-inside">
        {articles.map((article, index) => (
          <li
            key={index}
            className={`pt-1 pb-1 ${
              index % 2 === 0 ? "bg-gray-100" : ""
            } hover:underline`}
          >
            <>
              <Link to={article.link} className="flex justify-between">
                <div className="ml-2">{article.title}</div>
                <div className="mr-2 text-gray-500">{article.time}</div>
              </Link>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
