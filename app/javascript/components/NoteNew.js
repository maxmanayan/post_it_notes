import React from "react";

// const NoteNew = (props) => {
//   return(
//     <div>
//       <h1>Create a New Note</h1>
      
//       <form action='/notes/' method='post'>
//         <p>Title</p>
//         <input name='note[title]' />

//         <p>Description</p>
//         <textarea name='note[description]' />

//         <hr/>
//         <button type='submit'>Add</button>
//         <a href='/notes/'>Cancel</a>
//       </form>
//     </div>
//   )
// };

const NoteNew = (props) => {
  return(

    <div> 
      <body className="main_background">
        <header>
          <h1>Create a New Note</h1>
          {/* <a href='/notes/new'>Create New Note</a> */}
        </header>
        
        <div className="notes_background">

          <form action='/notes/' method='post'>
            <div className="post_it_note">
            
              <div className="post_it_note_content">
              
                <p>Title</p>
                <input name='note[title]' />

                <p>Description</p>
                <textarea name='note[description]' />
              
              </div>
          
          

              <div className="post_it_note_options">
                <button type='submit'>Add</button>
                <a href='/notes/'>Cancel</a>
              </div>
           
            </div>
          </form>

        </div>
      </body>
    </div>  
  )
}

export default NoteNew;



