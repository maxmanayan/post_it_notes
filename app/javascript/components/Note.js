import React from "react";

const Note = (props) => {
  return(
    <div> 
      <body className="main_background">
        <header>
          <h1>View Note</h1>
          {/* <a href='/notes/new'>Create New Note</a> */}
        </header>
        
        <div className="notes_background">

          <div className="post_it_note">
            <div className="post_it_note_content">
              <h1>{props.note.title}</h1>
              <p>ID: {props.note.id}</p>
              <hr/>
              <p>{props.note.description}</p>
            </div>
          

            <div className="post_it_note_options">
              <a href={/notes/}>Go Back</a>
              <a href={`/notes/${props.note.id}/edit`}>Edit</a>
            </div>
          </div>

        </div>
      </body>
    </div>  
  )
};

export default Note;