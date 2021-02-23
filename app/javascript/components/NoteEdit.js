import React from "react";

const NoteEdit = () => {
  return(
    <div>
      <h1>Edit Note</h1>

      <p>Title</p>
      <input name='note[title]' />

      <p>Description</p>
      <textarea name='note[description]' />

      <hr/>
      <button type='submit'>Submit</button>
      <a href={/notes/}>Cancel</a>
    </div>
  )
}


export default NoteEdit;