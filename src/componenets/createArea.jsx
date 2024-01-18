import React from "react";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  const [titleInputClicked, setTitleInputClicked] = React.useState(false);

  function changeNote(event) {
    const { value, name } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  function changetitleInputClicked() {
    setTitleInputClicked(true);
  }
  return (
    <div>
      <form className="create-note">
        <input
          onClick={changetitleInputClicked}
          value={note.title}
          onChange={changeNote}
          name="title"
          placeholder="Title"
        />
        {titleInputClicked ? (
          <textarea
            onChange={changeNote}
            name="content"
            placeholder="Take a note..."
            rows="3"
            value={note.content}
          />
        ) : null}
        <Zoom in={titleInputClicked}>
          <Fab onClick={submitNote}>+</Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
