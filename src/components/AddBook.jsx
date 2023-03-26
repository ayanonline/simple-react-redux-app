import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../store/action/bookAction";
import uniqid from "uniqid";
import "./Library.css";
function AddBook() {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: "",
    author: "",
    rating: "",
  });
  function titleInputHandler(event) {
    const title = event.target.value;
    setBook((prev) => {
      return {
        ...prev,
        title: title,
      };
    });
  }
  function authorInputHandler(event) {
    const author = event.target.value;
    setBook((prev) => {
      return {
        ...prev,
        author: author,
      };
    });
  }
  function ratingInputHandler(event) {
    const rating = event.target.value;
    setBook((prev) => {
      return {
        ...prev,
        rating: rating,
      };
    });
  }
  function clickHandler() {
    const id = uniqid();
    console.log(id);
    book.author &&
      book.title &&
      book.rating &&
      dispatch(addBook({ id, ...book }));

    //clearing input field
    book.author &&
      book.title &&
      book.rating &&
      setBook(() => {
        return {
          title: "",
          author: "",
          rating: "",
        };
      });
  }
  return (
    <div className="form">
      <h3>Title</h3>
      <input
        type="text"
        name=""
        onChange={titleInputHandler}
        value={book.title}
      />
      <h3>Author</h3>
      <input
        type="text"
        name=""
        onChange={authorInputHandler}
        value={book.author}
      />
      <h3>Rating</h3>
      <input
        type="number"
        name=""
        onChange={ratingInputHandler}
        value={book.rating}
      />
      <button onClick={clickHandler}>Add Book</button>
    </div>
  );
}

export default AddBook;
