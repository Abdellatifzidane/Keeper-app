import { DeleteForever } from "@mui/icons-material";
import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.deleteItem(props.id);
        }}
      >
        <DeleteForever></DeleteForever>
      </button>
    </div>
  );
}
export default Note;
