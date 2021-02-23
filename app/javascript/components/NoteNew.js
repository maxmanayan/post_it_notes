import React from "react";

const NoteNew = (props) => {
  return(
    <div>
      <h1>Create a New Note</h1>
      
      <form action='/notes/' method='post'>
        <p>Title</p>
        <input name='note[title]' />

        <p>Description</p>
        <textarea name='note[description]' />

        <hr/>
        <button type='submit'>Add</button>
        <a href='/notes/'>Cancel</a>
      </form>
    </div>
  )
};


export default NoteNew;