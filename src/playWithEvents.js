// import React from "react";
// import "./App.css";

// //setup vars
// const books = [
//   {
//     id: 1,
//     img: "https://images-na.ssl-images-amazon.com/images/I/91hIsjFuICL.jpg",
//     title: "I love You to the moon and back",
//     author: "Amelia Hepworth",
//   },

//   {
//     id: 2,
//     img: "https://taralazar.files.wordpress.com/2015/05/wolfie.jpg?w=350&h=353",
//     title: "wolfie",
//     author: "whateva",
//   },

//   {
//     id: 3,
//     img: "https://m.media-amazon.com/images/I/51P-07c64+L.jpg",
//     title: "marketing strategies",
//     author: "ryan mcallen",
//   },
// ];

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return <Book key={book.id} {...book} />;
//       })}
//     </section>
//   );
// }

// const Book = ({ img, title, author }) => {
//   const clickHandler = (e) => {
//   console.log(e);
//     console.log(e.target);
//     alert("hellloo");
//   };
//   const complexExample = (author) => {
//     console.log(author);
//   };
//   return (
//     <article className="book" onMouseOver={() => {
//       console.log(title)
//     }}>
//       <img src={img} alt="book" />
//       <h1 onClick={() => console.log(title)}>{title}</h1>
//       <h4>{author}</h4>
//       <button type="button" onClick={clickHandler}>
//         reference
//       </button>
//       <button type="button" onClick={() => complexExample(author)}>
//         more complex example
//       </button>
//     </article>
//   );
// };

// export default BookList;
