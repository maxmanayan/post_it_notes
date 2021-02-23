import React from "react";

const Note = (props) => {
  return(
    <div>
      <h1>{props.note.title}</h1>
      <p>ID: {props.note.id}</p>
      <hr/>
      <p>{props.note.description}</p>
      <a href={/notes/}>Go Back</a>
    </div>
  )
};

export default Note;