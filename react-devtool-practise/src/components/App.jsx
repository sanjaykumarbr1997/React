import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

function createEmoji(emojipediaa) {
  return (
    <Emoji
      key={emojipediaa.id}
      emoji={emojipediaa.emoji}
      name={emojipediaa.name}
      meaning={emojipediaa.meaning}
     
    />
  );
}


function App() {
  return (
   

    <div>
    <h1>
        <span>emojipedia</span>
      </h1>
     <dl className="dictionary">
     {emojipedia.map(createEmoji)}

     {/*
    <Emoji
    key ={emojipedia[0].id}
    emoji ={emojipedia[0].emoji}
    name = {emojipedia[0].name}
    meaning = {emojipedia[0].meaning}
    />
     <Emoji
    key ={emojipedia[1].id}
    emoji ={emojipedia[1].emoji}
    name = {emojipedia[1].name}
    meaning = {emojipedia[1].meaning}
    />
    <Emoji
    key ={emojipedia[2].id}
    emoji ={emojipedia[2].emoji}
    name = {emojipedia[2].name}
    meaning = {emojipedia[2].meaning}
    />
     */}
  </dl>
    </div>
    
    
  );
}

export default App;
