import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const BlogPosts = [
    { title: "Blog #1" },
    { title: "Blog #2" },
    { title: "Blog #3" },
  ];

  return (
    <BlogContext.Provider value={BlogPosts}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
