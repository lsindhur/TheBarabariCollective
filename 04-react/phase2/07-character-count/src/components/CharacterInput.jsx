import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const CharacterInput = ({text,setText}) => {

//console.log(props)

  function handleText(e) {
    setText(e.target.value); 
  }


  return (
    <div>
      <label>Type something..</label>
      <textarea
        onChange={handleText}
        value={text}
        placeholder="start typing..."
      />
    </div>
  );
};

export default CharacterInput;
