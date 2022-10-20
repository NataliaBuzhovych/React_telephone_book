import { contacts } from "./Contacts";
import { useState } from "react";
import Table from "./Contact";

function App() {
  const [word, findContact] = useState("");
  const search = (data) => {
    return data.filter(
      (el) =>
        el.firstName.toLowerCase().includes(word) ||
        el.lastName.toLowerCase().includes(word) ||
        el.phone.toLowerCase().includes(word)
    );
  };

  return (
    <div className="container">
      <div className="serch">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => findContact(e.target.value)}
        ></input>
      </div>
      <Table data={search(contacts)} />
    </div>
  );
}

export default App;
