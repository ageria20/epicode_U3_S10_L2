import "./App.css";
import BookList from "./component/BookList";
import MyNav from "./component/MyNav";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fantasy from "./data/fantasy.json";
import history from "./data/history.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import sciFi from "./data/scifi.json";

const App = () => {
  const [libraries, setLibraries] = useState(fantasy);

  const handleCategories = category => {
    switch (category) {
      case "fantasy":
        setLibraries(fantasy);
        break;
      case "history":
        setLibraries(history);
        break;
      case "horror":
        setLibraries(horror);
        break;
      case "romance":
        setLibraries(romance);
        break;
      case "scifi":
        setLibraries(sciFi);
        break;
    }
  };

  return (
    <>
      <MyNav handleCategories={handleCategories} />
      <BookList books={libraries} />
    </>
  );
};

export default App;
