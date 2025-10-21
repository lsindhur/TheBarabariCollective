import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CharacterInput from './components/CharacterInput';
import CharacterCount from './components/CharacterCount';


const App = () => {

  const [text, setText] = useState("");

  return (
    <div>
      <h1>Live Character Counter</h1>
     
      <CharacterInput 
      text = {text}
      setText = {setText}
      />
     
    { <CharacterCount 
     text = {text}
     />}
      
    </div>
  )
}

export default App