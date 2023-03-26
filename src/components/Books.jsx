import React from "react";
import Book from "./Book";
import { useSelector } from "react-redux";

import "./Library.css";
function Books() {
  const books = useSelector((state) => state.books.books);

  console.log(books);
  return (
    <div className="books">
      <h2 className="heading2">Books</h2>
      <ul className="booksHeading">
        <li>Title</li>
        <li>Author</li>
        <li>Rating</li>
        <li></li>
      </ul>
      {books.map((book, index) => (
        <Book key={index} item={book} />
      ))}
    </div>
  );
}

export default Books;
