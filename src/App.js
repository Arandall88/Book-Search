import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <section>
      <form>
        <label>
          <span>Search for books</span>
          <input
            type="search"
            placeholder="microservice, restful design, etc.,"
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </section>
  );
};

export default App;
