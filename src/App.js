import { useState } from "react";
import GamePage from "./routes/Game";
import HomePage from "./routes/Home";
import "./App.css";

const App = () => {
  const [page, setPage] = useState("app");

  const handleChangePage = (page) => {
    console.log("####: <App />");
    setPage(page);
  };

  switch (page) {
    case "app":
      return <HomePage onChangePage={handleChangePage} />;
    case "game":
      return <GamePage />;
    default:
      return <HomePage />;
  }
};

export default App;
