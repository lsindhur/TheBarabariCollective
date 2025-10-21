import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


const CharacterCount = ({text}) => {
    const [count, setCount] = useState(0);

      useEffect(() => {
       setCount(text.length);
  },[text])

  return (
    <div>
        <p>Character count: {count}</p>
    </div>
  )
}

export default CharacterCount