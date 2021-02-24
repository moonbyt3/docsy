import React from "react";

const Icon = ({ children }) => {
  return (
    <svg
      dangerouslySetInnerHTML={{ __html: children }}
      width="25"
      height="25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
  );
};

export default Icon;
