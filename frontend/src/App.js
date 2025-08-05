import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log(search);
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
