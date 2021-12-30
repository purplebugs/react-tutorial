import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setup vars
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Our Class is a Family",
    author: "Shannon Olsen",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41w4B0f21VL._SY349_BO1,204,203,200_.jpg",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, author, title } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
