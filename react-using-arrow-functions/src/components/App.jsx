import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";



function App() {
  return (
   

    <div>
    <h1>
        <span>emojipedia</span>
      </h1>
     <dl className="dictionary">
     {emojipedia.map(emojipediaa =>
     <Emoji
      key={emojipediaa.id}
      emoji={emojipediaa.emoji}
      name={emojipediaa.name}
      meaning={emojipediaa.meaning}
     
    />
  
)}

    </dl>
    </div>
    
    
  );
}

export default App;
