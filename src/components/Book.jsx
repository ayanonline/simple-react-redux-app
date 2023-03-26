import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../store/action/bookAction";
import "./Library.css";
function Book({ item }) {
  const dispatch = useDispatch();
  function clickHandle() {
    dispatch(deleteBook(item.id));
  }
  return (
    <Fragment>
      <ul className="book">
        <li>{item.title}</li>
        <li>{item.author}</li>
        <li>{item.rating}</li>
        <li>
          <button onClick={clickHandle}>Delete</button>
        </li>
      </ul>
    </Fragment>
  );
}

export default Book;
