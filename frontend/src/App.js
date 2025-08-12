import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [search, setSearch] = useState("");

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log(search);
    // fetch utilizes GET request by default
    fetch(
      `https://api.unsplash.com/photos/random/?query=${search}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setSearch("");
  }

  return (
    <div>
      <Header title="Images Gallery" />
      <Search
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSearchSubmit}
      />
    </div>
  );
}

export default App;
