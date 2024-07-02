import "./App.css";
import { Component } from "react";
import BookList from "./component/BookList";
import MyNav from "./component/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import fantasy from "./data/fantasy.json";

const App = () => {
  return (
    <>
      <MyNav />
      <BookList books={fantasy} />
    </>
  );
};

export default App;
