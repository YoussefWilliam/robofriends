import React from "react";

const Searchbox = ({ setQuery }) => {
  return (
    <div className="pa2">
      <input
        placeholder="Search robot by name"
        className="pa3 ba b--green bg-lightest-blue"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Searchbox;
