import { contacts } from "./Contacts";
import { useState } from "react";
import Table from "./Contact";
import NewContact from "./NewContact";

function App() {
  const [word, findContact] = useState("");
  const [show, setShow] = useState(false);
  const [ok, setOk] = useState(true);
  const clickChange = () => {
    setShow(!show);
    setOk(!ok);
  };
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
        {ok ? (
          <button type="button" className="btn add" onClick={clickChange}>
            Add new contact
          </button>
        ) : (
          <></>
        )}
        {show && <NewContact setShow={setShow} setOk={setOk} />}
      </div>
      <Table data={search(contacts)} />
    </div>
  );
}

export default App;
