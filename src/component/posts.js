import React from "react";
import Post from "./post";

const posts = ({ posts }) => {
  return (
    <div>
      {posts.map((article, index) => (
        <Post article={article} key={index} />
      ))}
    </div>
  );
};

export default posts;
