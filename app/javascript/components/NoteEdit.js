import React from "react";

// const NoteEdit = (props) => {
//   return(
//     <div>
//       <h1>Edit Note</h1>

//       <form action={`/notes/${props.note.id}`} method='post'>
//         <input type='hidden' name="_method" value="patch" />
//         <p>Title</p>
//         <input defaultValue={props.note.title} type='text' name='note[title]' />

//         <p>Description</p>
//         <textarea defaultValue={props.note.description} type='text' name='note[description]' />

//         <hr/>
//         <button type='submit'>Submit</button>
//         <a href={/notes/}>Cancel</a>
//       </form>
//     </div>
//   )
// }

const NoteEdit = (props) => {
  return(

    <div> 
      <body className="main_background">
        <header>
          <h1>Edit Note</h1>
          {/* <a href='/notes/new'>Create New Note</a> */}
        </header>
        
        <div className="notes_background">

          <form action={`/notes/${props.note.id}`} method='post'>
            <div className="post_it_note">
            
              <div className="post_it_note_content">
              
                <input type='hidden' name="_method" value="patch" />
                <p>Title</p>
                <input defaultValue={props.note.title} type='text' name='note[title]' />

                <p>Description</p>
                <textarea defaultValue={props.note.description} type='text' name='note[description]' />
              
              </div>
          
          

              <div className="post_it_note_options">
                <button type='submit'>Submit</button>
                <a href={/notes/}>Cancel</a>
              </div>
           
            </div>
          </form>

        </div>
      </body>
    </div>  
  )
}

export default NoteEdit;

