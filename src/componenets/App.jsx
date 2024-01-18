import React from "react";
import Header from "./Header";
import Note from "./note";
import Footer from "./footer";
import CreateArea from "./createArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function changeNotes(note) {
    setNotes([...notes, note]);
  }

  function deleteItem(id) {
    setNotes(
      notes.filter((value, index) => {
        return index !== id;
      })
    );
  }
  return (
    <div>
      <Header></Header>
      <CreateArea onAdd={changeNotes} />
      {notes.map((item, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={item.title}
            content={item.content}
            deleteItem={deleteItem}
          ></Note>
        );
      })}
      <Footer></Footer>
    </div>
  );
}

export default App;
