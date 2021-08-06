import React from "react";
import notes from "../notes";
import Note from "./Note";


function NotesList(){
    return <div>
    {notes.map( notelist =>{
    return <div>
    <Note
    key= {notelist.id}
    title={notelist.title}
    content={notelist.content}
     />
        
    </div> 
})}
    </div>
}

export default NotesList;