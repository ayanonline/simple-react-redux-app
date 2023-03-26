import React from "react";
import AddBook from "./AddBook";
import "./Library.css";
import Books from "./Books";
function Library() {
  return (
    <div>
      <h1 className="heading">My Library</h1>
      <AddBook />
      <Books />
    </div>
  );
}

export default Library;
