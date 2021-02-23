import React from "react";

const Notes = (props) => {
  const renderNotes = () => {
    return props.notes.map( note => {
      return(
        <div className="post_it_note">
          <h3>{note.title}</h3>
          <p>ID: {note.id}</p>
          <hr/>
          <p>{note.description}</p>
          <a href={`/notes/${note.id}`}>View</a>
          <a href={`/notes/${note.id}/edit`}>Edit</a>
          <a href={`/notes/${note.id}`} data-method='delete'>Delete</a>
        </div>
      )
    })
  }

  return(
    <div className="main_background">
      <h1>Post It Notes</h1>
      <a href='/notes/new'>Create New Note</a>
      {renderNotes()}
    </div>
    )
};


export default Notes;