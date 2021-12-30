import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "I Love You to the Moon and Back",
  author: "Amelia Hepworth",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: "Our Class is a Family",
  author: "Shannon Olsen",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          dolorem maiores, similique architecto nihil ullam officiis facere.
          Iure, tenetur ea.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}
const Book = ({ img, author, title, children }) => {
  //const { img, author, title } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      {children}
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
