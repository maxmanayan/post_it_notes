import React from "react";

const NoteEdit = (props) => {
  return(
    <div>
      <h1>Edit Note</h1>

      <form>
        <p>Title</p>
        <input defaultValue={props.note.title} type='text' name='note[title]' />

        <p>Description</p>
        <textarea defaultValue={props.note.description} type='text' name='note[description]' />

        <hr/>
        <button type='submit'>Submit</button>
        <a href={/notes/}>Cancel</a>
      </form>
    </div>
  )
}


export default NoteEdit;