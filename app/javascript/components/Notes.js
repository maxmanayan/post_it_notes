import React from "react";

const Notes = (props) => {
  const renderNotes = () => {
    return props.notes.map( note => {
      return(
        <div className="post_it_note">
          <section className="post_it_note_content">
            <h3>{note.title}</h3>
            <p>ID: {note.id}</p>
            <hr/>
            <p>{note.description}</p>
           
            
          </section>
          <div className="post_it_note_options">
              <a href={`/notes/${note.id}`}>View</a>
              <a href={`/notes/${note.id}/edit`}>Edit</a>
              <a href={`/notes/${note.id}`} data-method='delete'>Delete</a>
          </div>
        </div>
      )
    })
  }

  return(
    <div> 
      <body className="main_background">
        <header>
          <h1>📝Post It Notes</h1> 
          {/* <h1>✍️Post It Notes</h1> */}
          <a href='/notes/new'>Create New Note</a>
        </header>
        <div className="notes_background">
          {renderNotes()}
        </div>
      </body>
    </div>
    )
};


export default Notes;