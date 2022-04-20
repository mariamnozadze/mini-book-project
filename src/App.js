import React from "react";
import "./App.css";
import {data} from "./books";
import Book from "./book";

function BookList() {
  return (
    <section className="booklist">
      {data.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}



export default BookList;
